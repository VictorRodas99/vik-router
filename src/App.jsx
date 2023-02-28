import './App.css'
import { lazy, Suspense } from 'react'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import { Router } from './Router'
import { Route } from './Route'

const AboutPage = lazy(() => import('./components/AboutPage')) // Solo carga este componente cuando se necesite

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
      <Suspense fallback={<h4>Loading...</h4>}>
        <Router routes={ROUTES} defaultComponent={NotFound}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
