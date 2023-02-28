import { useState, useEffect } from 'react'
import { NAVIGATION_EVENT_TYPE } from './App'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname) // Agrega al estado la nueva url que se cambió por el navigate
    }

    window.addEventListener(NAVIGATION_EVENT_TYPE, onLocationChange)
    window.addEventListener('popstate', onLocationChange) // Escucha el evento de navegación hacia atrás

    return () => {
      window.removeEventListener(NAVIGATION_EVENT_TYPE, onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const Component = routes.find(({ path }) => path === currentPath)?.Component

  return Component ? <Component /> : <DefaultComponent />
}
