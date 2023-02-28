import './App.css'
import { HomePage, AboutPage } from './components/Page'
import { useState, useEffect } from 'react'

export const NAVIGATION_EVENT_TYPE = 'navigation'

function App () {
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

  return (
    <main>
      <h1>My own router!</h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
