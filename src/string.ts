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
