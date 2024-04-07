import { capitalize } from 'src'
import { expect, it } from 'vitest'

it('string capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world')

  expect(capitalize('va vava  world')).toBe('Va vava  world')
})
