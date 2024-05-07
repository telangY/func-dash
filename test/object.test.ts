import { describe, expect, it } from 'vitest'
import { assign, clone, mapKeys, mapValues, omit, pick } from 'src'

describe('object assign func', () => {
  it('should assign values', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(assign(obj, { b: 3 })).toStrictEqual({ a: 1, b: 3 })
    expect(assign(obj, { b: 3, c: 4 })).toStrictEqual({ a: 1, b: 3, c: 4 })
  })
})

describe('object clone func', () => {
  it('should clone object', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(clone(obj)).toStrictEqual(obj)
    expect(clone(obj)).not.toBe(obj)
  })
})

describe('object mapKeys func', () => {
  it('should map keys', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(mapKeys(obj, (key, value) => `${key}-${value}`)).toStrictEqual({
      'a-1': 1,
      'b-2': 2,
    })
  })
})

describe('object mapValues func', () => {
  it('should map values', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(mapValues(obj, (value, key) => `${key as string}-${value}`)).toStrictEqual({
      a: 'a-1',
      b: 'b-2',
    })
  })
})

describe('object omit func', () => {
  it('should omit keys', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(omit(obj, ['a'])).toStrictEqual({ b: 2 })
    expect(omit(obj, ['a', 'b'])).toStrictEqual({})
  })
})

describe('object pick func', () => {
  it('should pick keys', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    expect(pick(obj, ['a'])).toStrictEqual({ a: 1 })
    expect(pick(obj, ['a', 'b'])).toStrictEqual({ a: 1, b: 2 })
  })
})
