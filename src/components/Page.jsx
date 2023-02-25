import { navigate } from '../App'

export function HomePage () {
  return (
    <div>
      <h2>Este es el Home!</h2>
      <button onClick={() => navigate({ href: '/about' })}>Ir a Sobre nosotros</button>
    </div>
  )
}

export function AboutPage () {
  return (
    <div>
      <h2>Mi nombre es Víctor Rodas</h2>
      <p>... y estoy haciendo un React Router desde cero!</p>
      <button onClick={() => navigate({ href: '/' })}>Ir a Home</button>
    </div>
  )
}
