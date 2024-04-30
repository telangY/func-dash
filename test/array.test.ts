import { assert, describe, expect, it } from 'vitest'
import { chunk, counting, flat, group, maxItem, select, sort, sumItem, toggle, unique } from 'src'

const fish = [
  {
    name: 'Marlin',
    source: 'ocean',
  },
  {
    name: 'Bass',
    source: 'lake',
  },
  {
    name: 'Trout',
    source: 'lake',
  },
]

describe('array chunk function', () => {
  it('return no flat arrar of have num', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([[1, 2], [3, 4], [5, 6]])
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([[1, 2], [3, 4], [5, 6], [7]])
    expect(chunk(fish, 2)).toStrictEqual([
      [{
        name: 'Marlin',
        source: 'ocean',
      }, {
        name: 'Bass',
        source: 'lake',
      }],
      [{
        name: 'Trout',
        source: 'lake',
      }],
    ])
  })
  it('return flat array of have no num', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 0)).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('return flat array of an array is empty', () => {
    expect(chunk([], 0)).toStrictEqual([])
  })

  it('return flat array of num is 0', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 0)).toStrictEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('array counting function', () => {
  it('counting ', () => {
    expect(counting(fish, f => f.source)).toStrictEqual({ ocean: 1, lake: 2 })
  })
})

describe('array flat function', () => {
  it('returns all items in all arrays', () => {
    expect(flat([[1, 2], [3, 4], [5, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6])
    expect(flat([[1, 2], [3, 4, [7, 8]], [5, 6]])).toStrictEqual([1, 2, 3, 4, 7, 8, 5, 6])

    assert.deepEqual(flat([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6])
  })
})

describe('array group function', () => {
  it('group ', () => {
    // assert.strictEqual(group(fish, f => f.source), { ocean: [marlin], lake: [bass, trout] })
    expect(group(fish, f => f.source)).toStrictEqual({
      ocean: [{
        name: 'Marlin',
        source: 'ocean',
      }],
      lake: [{
        name: 'Bass',
        source: 'lake',
      }, {
        name: 'Trout',
        source: 'lake',
      }],
    })
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

describe('array select function', () => {
  const fish = [
    {
      name: 'Marlin',
      weight: 105,
      source: 'ocean',
    },
    {
      name: 'Bass',
      weight: 8,
      source: 'lake',
    },
    {
      name: 'Trout',
      weight: 13,
      source: 'lake',
    },
  ]
  it('return selected items from an array', () => {
    assert.deepEqual(select(fish, f => f.weight, f => f.source === 'lake'), [8, 13])
  })
})

describe('array sort function', () => {
  it('sort by number size', () => {
    expect(sort([1, 2, 3, 4, 5], item => item, true)).toStrictEqual([5, 4, 3, 2, 1])
    expect(sort([{ a: 1 }, { a: 2 }, { a: 3 }], item => item.a, false)).toStrictEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
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

describe('array toggle function', () => {
  it('return toggle items from an array if not exists', () => {
    assert.deepEqual(toggle([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6])
  })

  it('return toggle items from an array if exists', () => {
    assert.deepEqual(toggle([1, 2, 3, 4, 5], 2), [1, 3, 4, 5])
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
