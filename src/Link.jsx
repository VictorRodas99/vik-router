import { NAVIGATION_EVENT_TYPE } from './App'

export function navigate ({ href }) {
  window.history.pushState({}, '', href) // Cargamos la nueva url en el history (Sin recargar la página)
  const navigationEvent = new Event(NAVIGATION_EVENT_TYPE)
  window.dispatchEvent(navigationEvent) // Avisamos que se lanzó un evento de navegación (Custom event)
}

export function Link ({ children, target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate({ href: to })
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props}>
      {children}
    </a>
  )
}
