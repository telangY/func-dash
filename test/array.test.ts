import { assert, describe, expect, it } from 'vitest'
import { flat, maxItem, sort, sumItem, unique } from 'src'

describe('array sort function', () => {
  it('sort by number size', () => {
    expect(sort([1, 2, 3, 4, 5], item => item, true)).toStrictEqual([5, 4, 3, 2, 1])
    expect(sort([{ a: 1 }, { a: 2 }, { a: 3 }], item => item.a, false)).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
  })
})

describe('array flat function', () => {
  it('returns all items in all arrays', () => {
    expect(flat([[1, 2], [3, 4], [5, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6])
    expect(flat([[1, 2], [3, 4, [7, 8]], [5, 6]])).toStrictEqual([1, 2, 3, 4, 7, 8, 5, 6])

    assert.deepEqual(flat([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6])
  })
})

describe('array sumItem function', () => {
  it('returns all item of number in an array', () => {
    assert.deepEqual(sumItem([1, 2, 3, 4, 5]), 15)
  })

  it('returns all item of object correctly using getter func', () => {
    assert.deepEqual(sumItem([{ a: 1 }, { a: 2 }, { a: 3 }], item => item.a), 6)
  })

  it('handle null input', () => {
    assert.equal(sumItem(null as unknown as readonly number[]), 0)
  })
})

describe('array maxItem function', () => {
  it('return the max val from an array', () => {
    assert.equal(maxItem([1, 2, 3, 4, 5]), 5)
  })

  it('return the max val from an array of object', () => {
    assert.deepEqual(maxItem([{ a: 1 }, { a: 2 }, { a: 3 }], item => item.a), { a: 3 })
  })
})

describe('array unique function', () => {
  it('return unique items from an array', () => {
    assert.deepEqual(unique([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
  })

  it('return unique items from an array of object', () => {
    assert.deepEqual(unique([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 3 }], item => item.a), [{ a: 1 }, { a: 2 }, { a: 3 }])
  })
})
