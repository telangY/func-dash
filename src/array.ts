export function chunk<T>(list: T[], num: number): T[][] | T[] {
  const chunks: T[][] = []
  if (list.length === 0 || !list)
    return []
  if (list.length <= num || !num)
    return list

  const size = Math.ceil(list.length / num)
  for (let i = 0; i < size; i++) {
    const chunk = list.slice(i * num, (i + 1) * num)
    chunks.push(chunk)
  }

  return chunks
}

/**
 * Statistically determine the key value for each item in an array.
 */
export function counting<T, K extends string | number | symbol>(list: T[], toKey: (item: T) => string): Record<K, number> {
  if (list.length === 0 || !list)
    return {} as Record<K, number>

  return list.reduce((acc, item) => {
    const key = toKey(item) as K
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {} as Record<K, number>)
}

/**
 * Given an array of arrays,return a new array with all sub-array elements concatenated into it.
 */
export function flat<T = any>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => {
    return acc.concat(...val)
  }, [])
}

/**
 * Group an array by a key function and return a new object with the grouped items.
 */
export function group<T, Key extends string | number | symbol>(list: readonly T[], groupId: (item: T) => Key): Partial<Record<Key, T[]>> {
  return list.reduce((acc, item) => {
    const key = groupId(item)
    if (!acc[key])
      acc[key] = []
    acc[key].push(item)
    return acc
  }, {} as Record<Key, T[]>)
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
 * Select a filter and a mapper inside of a reduce, only iterate the list once time.
 */
export function select<T, K>(list: T[], mapper: (item: T, index: number) => K, condition: (item: T, index: number) => boolean) {
  if (!list)
    return []

  return list.reduce((acc, item, index) => {
    if (condition(item, index))
      acc.push(mapper(item, index))
    return acc
  }, [] as K[])
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
 * If the item matching the condition already exists, remove it. Otherwise, add it.
 */
export function toggle<T = any>(arr: readonly T[], item: T, key?: null | ((item: T, idx: number) => number | string | symbol), options?: { strategy?: 'prepend' | 'append' }) {
  if (!arr && !item)
    return []
  if (!arr)
    return [item]
  if (!item)
    return [...arr]

  if (arr.includes(item))
    return arr.filter(i => i !== item)

  const strategy = options?.strategy ?? 'append'
  if (strategy === 'prepend')
    return [item, ...arr]

  return [...arr, item]
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
