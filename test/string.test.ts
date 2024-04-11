import { camelCase, capitalize, kebabCase, split, strRepeat, toLowerCase, toUpperCase } from 'src'
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

it('string toLowerCase', () => {
  expect(toLowerCase('hhHH jjjj')).toBe('hhhh jjjj')
  expect(toLowerCase('HHHH1JJJJ')).toBe('hhhh1jjjj')
})

it('string strRepeat', () => {
  expect(strRepeat('aa', 3)).toBe('aaaaaa')
  expect(strRepeat('aa', 1)).toBe('aa')
  expect(strRepeat('aa', 0)).toBe('')
})

it('string split ', () => {
  expect(split('a-b-c', '-', 2)).toStrictEqual(['a', 'b'])
  expect(split('a-b-c', /a|b/g, 2)).toStrictEqual(['a', 'b'])
  expect(split('a-b-c', /a|b/g, 0)).toStrictEqual([])
  expect(split('a-b-c', /a|b|c/g, undefined)).toStrictEqual(['a', 'b', 'c'])
})

it('string kebanCase ', () => {
  expect(kebabCase('Foo Bar')).toBe('foo-bar')
  expect(kebabCase('fooBar')).toBe('foo-bar')
  // expect(kebabCase('foo-Bar')).toBe('foo-bar')
  // expect(kebabCase('___FOO_BAR__')).toBe('foo-bar')
})
