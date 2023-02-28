import './App.css'
import { HomePage, AboutPage } from './components/Page'
import NotFound from './components/NotFound'
import { Router } from './Router'

export const NAVIGATION_EVENT_TYPE = 'navigation'

const ROUTES = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App () {
  return (
    <main>
      <h1>My own router!</h1>
      <Router routes={ROUTES} defaultComponent={NotFound} />
    </main>
  )
}

export default App
