import { capitalize } from 'src/string'
import { expect, test } from 'vitest'

test('string capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world')

  expect(capitalize('va vava  world')).toBe('Va vava  world')
})
