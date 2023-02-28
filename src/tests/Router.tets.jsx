import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../Router'
import { getCurrentPath } from '../utils/router.utils'

vi.mock('../utils/router.utils.js', () => ({
  getCurrentPath: vi.fn() // Modificar la función del archivo utils a conveniencia del test
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup() // Limpiar la pantalla virtual
    vi.clearAllMocks()
  })

  it('should work without any paths', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if not routes are found', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })
})
