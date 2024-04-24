/**
 * Given an array of arrays,return a new array with all sub-array elements concatenated into it.
 */
export function flat<T = any>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => {
    return acc.concat(...val)
  }, [])
}

/**
 * Get max value from an array
 */
export function maxItem(arr: readonly [number, ...number[]]): number
export function maxItem(arr: readonly number[]): number | null
export function maxItem<T>(arr: readonly T[], func: (item: T) => number | string): T | null
export function maxItem<T>(arr: readonly T[], func?: (item: T) => number | string): T | null {
  if (!arr || (arr.length ?? 0) === 0)
    return null
  const get = func ?? ((item: any) => item)
  return (arr || []).reduce((a, b) => (get(a) > get(b) ? a : b))
}

/**
 * Sort a/an list/array of objects by a numerical property
 */
export function sort<T>(array: readonly T[], getter: (item: T) => number, desc = false) {
  if (!array)
    return []
  const asc = (a: T, b: T) => getter(a) - getter(b)
  const dsc = (a: T, b: T) => getter(b) - getter(a)
  return array.slice().sort(desc === true ? dsc : asc)
}

/**
 *
 * Sum all number in an arrays.
 * Optionally privode a function to convert object in an array to number values.
 *
 */
export function sumItem<T extends number>(array: readonly T[]): number
export function sumItem<T extends object>(
  array: readonly T[],
  fn: (item: T) => number
): number
export function sumItem<T extends object | number>(arr: readonly any[], func?: (item: T) => number): number {
  return (arr || []).reduce((acc, cur) => acc + (func ? func(cur) : cur), 0)
}

/**
 * Remove duplicates from an/a array/list
 */
export function unique<T, K extends string | number | symbol>(arr: readonly T[], key?: (item: T) => K): T[] {
  const valueMap = arr.reduce((acc, cur) => {
    const toKey = key ? key(cur) : cur as any as string | number | symbol
    if (acc[toKey])
      return acc
    acc[toKey] = cur
    return acc
  }, {} as Record<string | number | symbol, T>)

  return Object.values(valueMap)
}
