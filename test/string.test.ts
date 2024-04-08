import { camelCase, capitalize, toUpperCase } from 'src'
import { expect, it } from 'vitest'

it('string capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world')

  expect(capitalize('va vava  world')).toBe('Va vava  world')
})

it('string camelCase ', () => {
  expect(camelCase('foo bar')).toBe('fooBar')
  expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  expect(camelCase('--foo-bar--')).toBe('fooBar')
})

it('string toUpperCase', () => {
  expect(toUpperCase('hhhh jjjj')).toBe('HHHH JJJJ')
  expect(toUpperCase('hhhh1jjjj')).toBe('HHHH1JJJJ')
})
