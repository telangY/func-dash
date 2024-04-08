/**
 * capitalize 将首字母转为大写
 * @param str 需要转换的字符串
 * @returns str 首字母转换大写后的字符串
 * capitalize('hello world')   -> 'Hello'
 * capitalize('va va voom') -> 'Va va voom'
 */
export function capitalize(str: string): string {
  if (!str || str.length === 0)
    return ''
  const lower = str.toUpperCase()

  return lower.substring(0, 1).toUpperCase() + lower.substring(1).toLowerCase()
}

/**
 * 修改给定的字符串中的所有前缀和后缀字符
 * @param str
 * @param charsToTrim
 * @returns format string
 */
export function trim(str: string | null | undefined, charsToTrim: string = ' '): string {
  if (!str)
    return ''
  const toTrim = charsToTrim.replace(/[\W]{1}/g, '\\$&')
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, 'g')
  return str.replace(regex, '')
}

/**
 * Converts string to camel case.
 * @param str
 * ```
 *
 * camelCase('Foo Bar')   => fooBar
 * camelCase('--foo-bar--')  => fooBar
 * camelCase('__FOO_BAR__')  => fooBar
 * ```
 */
export function camelCase(str: string): string {
  const parts = str.replace(/([A-Z])+/g, capitalize).split(/(?=[A-Z])|[\.\-\s_]/).map(x => x.toLowerCase()) ?? []
  if (parts.length === 0)
    return ''
  if (parts.length === 1)
    return parts[0]
  return parts.reduce((acc, part) => {
    return `${acc}${!acc ? part.charAt(0).toLowerCase() : part.charAt(0).toUpperCase()}${part.slice(1)}`
  }, '')
}

/**
 * toUpperCase convert letters to upper case
 * @param str
 */
export function toUpperCase(str: string) {
  if (!str)
    return ''
  return str.split('').reduce((acc, cur) => {
    return `${acc}${cur.charAt(0).toUpperCase()}`
  }, '')
}
