import { describe, expect, it } from 'vitest'
import { add, ceil, sum, sumBy } from 'src'

it('maths add', () => {
  expect(add('hello', 'world')).toBe('helloworld')
  // expect(add('hello', 'world')).toBe('hello world')
  expect(add(1, 2)).toBe(3)
  // expect(add(1, 2)).toBe(4)
})

describe('maths ceil', () => {
  it('should int', () => {
    expect(ceil(1.1, 0)).toBe(2)
  })

  it('should have decimal places', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
  })
})

it('maths sum', () => {
  expect(sum([])).toBe(0)
  expect(sum([1, 2, 3, 4])).toBe(10)
  // expect(sum([1, 2, 3, 4])).toBe(11)
  // expect(sum(null)).toBe(11)
})

it('maths sumBy', () => {
  interface IItem {
    n: string
  }
  const arr = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

  expect(sumBy(arr, (item: IItem) => item.n)).toBe(20)
})
