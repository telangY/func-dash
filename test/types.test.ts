import { isEmpty, isNumber } from 'src'
import { describe, expect, it } from 'vitest'

describe('types test', () => {
  it('isEmpty', () => {
    expect(isEmpty('true')).toBe(false)
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
  })

  it('isNumber', () => {
    expect(isNumber(12)).toBe(true)
    expect(isNumber('12')).toBe(false)
  })
})
