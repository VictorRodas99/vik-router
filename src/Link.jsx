import { NAVIGATION_EVENT_TYPE } from './App'

export function navigate ({ href }) {
  window.history.pushState({}, '', href) // Cargamos la nueva url en el history (Sin recargar la página)
  const navigationEvent = new Event(NAVIGATION_EVENT_TYPE)
  window.dispatchEvent(navigationEvent) // Avisamos que se lanzó un evento de navegación (Custom event)
}

export function Link ({ children, target, to, ...props }) {
  const handleClick = (event) => {
    // Controlar si el usuario hace click al link de una forma diferente

    const isMainEvent = event.button === 0 // click izquierdo
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // Si se hace click izquierdo sumado a otra tecla especial
    const isManageableEvent = target === undefined || target === '_self'

    // Si es un click normal se realiza la navegación en SPA
    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault()
      navigate({ href: to })
    }
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props}>
      {children}
    </a>
  )
}
