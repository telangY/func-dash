/**
 * 计算两个的数字的和  暂不支持其他类型
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 计算结果  数字或者  undefined
 */
export function add<T = number>(a: T, b: T): number | string | undefined {
  if (typeof a === 'number' && typeof b === 'number')
    return a + b
  if (typeof a === 'string' && typeof b === 'string')
    return a.concat(b)

  return undefined
}

/**
 * 计算纯数字的数组
 * @param array 原始数据
 * @returns 计算总和
 */
export function sum(array: number[]): number {
  if (array.length === 0)
    return 0
  return array.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

/**
 * 根据原始数据 计算某个字段的统计值
 * @param array 原始数据
 * @param func 需要计算的结果字段
 * @returns 统计数
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
