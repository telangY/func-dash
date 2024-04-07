/**
 * sort
 * 一个没有修改原数组 并返回一个新的数组
 * 目前仅支持按照数字大小排序  其他排序开发中
 */
export function sort<T>(array: readonly T[], getter: (item: T) => number, desc = false) {
  if (!array)
    return []
  const asc = (a: T, b: T) => getter(a) - getter(b)
  const dsc = (a: T, b: T) => getter(b) - getter(a)
  return array.slice().sort(desc === true ? dsc : asc)
}
