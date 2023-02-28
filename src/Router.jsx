import { useState, useEffect, Children } from 'react'
import { EVENTS } from './config'
import { match } from 'path-to-regexp' // Se agrega una librería para abstraernos del uso de regex para el procesamiento de rutas

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  let routeParams = {}

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname) // Agrega al estado la nueva url que se cambió por el navigate
    }

    window.addEventListener(EVENTS.navigation.pushState, onLocationChange)
    window.addEventListener(EVENTS.navigation.popState, onLocationChange) // Escucha el evento de navegación hacia atrás

    return () => {
      window.removeEventListener(EVENTS.navigation.pushState, onLocationChange)
      window.removeEventListener(EVENTS.navigation.popState, onLocationChange)
    }
  }, [])

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const isRoute = type.name === 'Route'
    return isRoute ? props : null
  }) // Leer las props de los Route components que podrían estar dentro del Router component como children

  const routesToUse = routes.concat(routesFromChildren)

  const Component = routesToUse.find(({ path }) => {
    /* `match` devuelve una función que permite comparar rutas
        además de devolver en un contrato específico los params y otros elementos
    */
    const URLMatcher = match(path, { decode: decodeURIComponent })
    const matched = URLMatcher(currentPath)

    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Component ? <Component params={routeParams} /> : <DefaultComponent />
}
