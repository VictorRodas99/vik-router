import './App.css'
import { HomePage, AboutPage } from './components/Page'
import { useState, useEffect } from 'react'

const NAVIGATION_EVENT_TYPE = 'navigation'

export function navigate ({ href }) {
  window.history.pushState({}, '', href) // Cargamos la nueva url en el history (Sin recargar la página)
  const navigationEvent = new Event(NAVIGATION_EVENT_TYPE)
  window.dispatchEvent(navigationEvent) // Avisamos que se lanzó un evento de navegación (Custom event)
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname) // Agrega al estado la nueva url que se cambió por el navigate
    }

    window.addEventListener(NAVIGATION_EVENT_TYPE, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT_TYPE, onLocationChange)
    }
  }, [])

  return (
    <main>
      <h1>My own router!</h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
