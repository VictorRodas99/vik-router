import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../Router'

describe('Router', () => {
  beforeEach(() => {
    cleanup() // Limpiar la pantalla virtual
  })

  it('should work without any paths', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if not routes are found', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })
})
