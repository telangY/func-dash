/**
 * Adds two numbers.
 * @param a the first number in an addition
 * @param b the second number in an addition
 * @returns return the totals type number or string or undefined
 */
export function add<T = number>(a: T, b: T): number | string | undefined {
  if (typeof a === 'number' && typeof b === 'number')
    return a + b
  if (typeof a === 'string' && typeof b === 'string')
    return a.concat(b)

  return undefined
}

/**
 * Computes number rounded up to precision.
 * @param num the number to be rounded up
 * @param precision upward rounding accuracy
 * @returns the rounded up number
 */
export function ceil(num: number, precision: number): number {
  if (precision === undefined || precision === 0)
    return Math.ceil(num)

  precision = precision >= 0 ? Math.min(precision, 255) : Math.max(precision, -255)
  let pair = `${num}e`.split('e')
  const value = Math.ceil(Number(`${pair[0]}e${+pair[1] + precision}`))

  pair = `${value}e`.split('e')
  return +`${pair[0]}e${+pair[1] - precision}`
}

/**
 * The sum function takes a list of numbers and returns the sum of those numbers.
 * @param array init array
 * @returns  the sum of the numbers in the list
 */
export function sum(array: number[]): number {
  if (array.length === 0)
    return 0
  return array.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

/**
 * Calculate the statistical value of a field based on raw data
 * @param array  init array
 * @param func return the field that requires a certain calculation
 * @returns statistical value
 */
export function sumBy<T>(array: T[], func: Function): number {
  let result: number = 0
  for (const value of array) {
    const current = func(value)
    if (current)
      result = result + current
  }
  return result
}
