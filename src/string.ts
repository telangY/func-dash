import { MAX_ARRAY_LENGTH, convertCase } from './_common/strings'
import { isEmpty } from './types'

/**
 *  Converts the first character of string to upper case and the remaining to low case
 * @param str string to capitalize
 * @returns  the capitalized string
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
 * Removed leading and trailing whitespace or specified characters from string
 * @param str string to trim
 * @param charsToTrim the characters to trim
 * @returns the trimmed string
 */
export function trim(str: string | null | undefined, charsToTrim: string = ''): string {
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
 * Convert letters to upper case
 * @param str convert to string
 * @returns upper string
 */
export function toUpperCase(str: string): string {
  return convertCase(str, 'toUpperCase')
}

/**
 * Convert letters to lower case
 * @param str convert to string
 * @returns lower string
 */
export function toLowerCase(str: string): string {
  return convertCase(str, 'toLowerCase')
}

/**
 * Replaces matches for pattern in string with replacement
 * @param str string to be replaced
 * @param pattern content to match
 * @param replacement  replacement content
 * @returns the modified string
 */
export function strReplace(str: string, pattern: RegExp | string, replacement: (...args: any) => string | string): string {
  if (!pattern || !replacement)
    return str
  return str.replace(pattern, replacement)
}

/**
 * repeats the given string n times
 * @param str the string to repeat
 * @param num the number of times to repeat the string
 * @returns the repeated string
 */
export function strRepeat(str: string, num: number): string {
  let result = ''
  if (!str || num < 1 || num > Number.MAX_SAFE_INTEGER)
    return result

  for (let i = 0; i < num; i++)
    result += str

  return result
}

/**
 * Formats the given string in title case fashion
 * @param str the string to title
 * @returns formated string
 */
export function title(str: string | null | undefined): string {
  if (!str)
    return ''
  return str.split(/(?=[A-Z])|(\.\-\s_)/).map(s => s.trim()).filter(s => !!s).map(s => camelCase(s.toUpperCase())).join(' ')
}

/**
 * Splits string to separtor
 * @param str the string to split
 * @param separator the separtor pattern to split by
 * @param limit the length to truncate results to
 * @returns the string array
 */
export function split(str: string, separator: RegExp | string, limit: number | undefined): string[] {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0
  if (!limit || !str || !separator)
    return []

  if (separator instanceof RegExp)
    return str.match(separator)?.slice(0, limit) || []

  return str.split(separator).slice(0, limit)
}

/**
 * Convert string to kebab case
 * @param str the string to kebabCase
 * @returns converted to string
 */
export function kebabCase(str: string): string {
  if (!str)
    return ''
  // console.log(str.replace(/([A-Z]+)|[\.\-\s_]+/g, (match, p1) => p1 ? capitalize(p1) : '').split(/(?=[A-Z])/))
  const parts = str.replace(/([A-Z])+/g, capitalize).split(/(?=[A-Z])|[\.\-\s_]/) ?? []
  if (parts.length === 0 || (parts.length === 1 && isEmpty(parts[0])))
    return ''
  if (parts.length === 1 && !isEmpty(parts[0]))
    return parts[0].toLowerCase()
  return parts.filter(s => /[a-zA-Z]/g.test(s)).map(s => s.toLowerCase().trim()).join('-')
}

/**
 * convert string to first upper
 * @param str convert to string
 * @returns converted to string
 */
export function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Splits string into an array of its words.
 * @param str the string to inspect
 * @param pattern the pattern to match words
 * @returns the words of string array
 */
export function word(str: string, pattern: RegExp | string): string[] | string {
  if (!str)
    return []
  if (!pattern)
    return str

  return str.match(pattern) ?? []
}
