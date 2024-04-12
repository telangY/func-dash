import { camelCase, capitalize, kebabCase, split, strRepeat, toLowerCase, toUpperCase } from 'src'
import { describe, expect, it } from 'vitest'

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

describe('string split', () => {
  it('should split string into array of substrings', () => {
    expect(split('a-b-c', '-', 2)).toStrictEqual(['a', 'b'])
    expect(split('a-b-c', /a|b/g, 2)).toStrictEqual(['a', 'b'])
    expect(split('a-b-c', /a|b|c/g, 0)).toStrictEqual([])
    expect(split('a-b-c', /a|b|c/g, undefined)).toStrictEqual(['a', 'b', 'c'])
  })
})

describe('kebabCase', () => {
  it('should convert camel case to kebab case', () => {
    expect(kebabCase('camelCaseString')).toBe('camel-case-string')
  })

  it('should convert Pascal case to kebab case', () => {
    expect(kebabCase('PascalCaseString')).toBe('pascal-case-string')
  })

  it('shouw convert line case to kebab case', () => {
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar')
    expect(kebabCase('-FOO-BAR__')).toBe('foo-bar')
  })

  // it('should convert mixed case to kebab case', () => {
  //   expect(kebabCase('MiXeD CaSe StrInG')).toBe('mixed-case-string')
  // })

  it('should handle empty string', () => {
    expect(kebabCase('')).toBe('')
  })
})
