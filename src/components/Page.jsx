import { Link } from '../Link'

export function HomePage () {
  return (
    <div>
      <h2>Este es el Home!</h2>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </div>
  )
}

export function AboutPage () {
  return (
    <div>
      <h2>Mi nombre es Víctor Rodas</h2>
      <p>... y estoy haciendo un React Router desde cero!</p>
      <Link to='/'>Ir a Home</Link>
    </div>
  )
}
