import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <h2 style={{ color: 'red', fontStyle: 'italic' }}>Página no encontrada (404)</h2>
      <Link to='/'>Volver al Home</Link>
    </>
  )
}
