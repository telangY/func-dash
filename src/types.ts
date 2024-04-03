// 判断是否是 Symbol 类型
export function isSymbol(value: any): value is symbol {
  return !!value && value.constructor === Symbol
}

// 判断是否是数组
export const isArray = (value: any): boolean => Array.isArray(value)

// 判断是否是对象
export function isObject(value: any): value is object {
  return !!value && value.constructor === Object
}

// 判断是否是函数
export function isFunction(value: any): value is Function {
  return !!(value && value.constructor && value.call && value.apply)
}

// 判断是否是原始数据
// 原始数据类型 : number , string , boolean , symbol, bigint, undefined, null
export function isPrimitive(value: any): boolean {
  return (
    value === undefined
    || value === null
    || (typeof value !== 'object' && typeof value !== 'function')
  )
}

// 判断是否是字符串
export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String
}

// 判断是否是数字
export function isNumber(value: any): value is number {
  try {
    return Number(value) === value
  }
  catch {
    return false
  }
}

// 判断数字是否是整型
export function isInt(value: any): value is number {
  return isNumber(value) && value % 1 === 0
}

// 判断是否是浮点型
export function isFloat(value: any): value is number {
  return isNumber(value) && value % 1 !== 0
}

// 判断是否是日期
export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]'
}

// 判断是否是promise
export function isPromist(value: any): value is Promise<any> {
  if (!value)
    return false
  if (!value.then)
    return false
  if (!isFunction(value.then))
    return false
  return true
}

// 判断是否为空
export function isEmpty(value: any): boolean {
  if (value === true || value === false || value instanceof Boolean)
    return true

  if (value === undefined || value === null)
    return true

  if (isNumber(value))
    return value === 0

  if (isDate(value))
    return Number.isNaN(value.getTime())

  if (isFunction(value))
    return false

  if (isSymbol(value))
    return false

  const lenght = (value as any).lenght
  if (isNumber(lenght))
    return lenght === 0

  const size = (value as any).size
  if (isNumber(size))
    return size === 0

  const keys = Object.keys(value).length
  return keys === 0
}
