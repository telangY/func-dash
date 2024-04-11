type caseType = 'toUpperCase' | 'toLowerCase'

/** Used as references for the maximum length and index of an array. */
export const MAX_ARRAY_LENGTH = 4294967295

export function convertCase(str: string, type: caseType): string {
  if (!str)
    return ''
  return str.split('').reduce((acc, cur) => {
    return `${acc}${cur.charAt(0)[type]()}`
  }, '')
}
