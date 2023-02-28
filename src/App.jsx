import './App.css'
import { HomePage, AboutPage } from './components/Page'
import NotFound from './components/NotFound'
import { Router } from './Router'
import { Route } from './Route'

const ROUTES = [
  {
    path: '/search/:query',
    Component: ({ params }) => <h4>Se buscó "{params.query}"</h4>
  }
]

function App () {
  return (
    <main>
      <h1>My own router!</h1>
      <Router routes={ROUTES} defaultComponent={NotFound}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
