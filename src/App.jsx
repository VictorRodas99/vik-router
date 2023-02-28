import './App.css'
import { HomePage, AboutPage } from './components/Page'
import NotFound from './components/NotFound'
import { Router } from './Router'

const ROUTES = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: ({ params }) => <h4>Se buscó "{params.query}"</h4>
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
