/**
 *  Converts the first character of string to upper case and the remaining to low case
 * @param str string to capitalize
 * @returns  the capitalized string
 * capitalize('hello world')   -> 'Hello world'
 * capitalize('va va voom') -> 'Va va voom'
 */
declare function capitalize(str: string): string;
/**
 * Removed leading and trailing whitespace or specified characters from string
 * @param str string to trim
 * @param charsToTrim the characters to trim
 * @returns the trimmed string
 */
declare function trim(str: string | null | undefined, charsToTrim?: string): string;
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
declare function camelCase(str: string): string;
/**
 * Convert letters to upper case
 * @param str convert to string
 * @returns upper string
 */
declare function toUpperCase(str: string): string;
/**
 * Convert letters to lower case
 * @param str convert to string
 * @returns lower string
 */
declare function toLowerCase(str: string): string;
/**
 * Replaces matches for pattern in string with replacement
 * @param str string to be replaced
 * @param pattern content to match
 * @param replacement  replacement content
 * @returns the modified string
 */
declare function replace(str: string, pattern: RegExp | string, replacement: (...args: any) => string | string): string;
/**
 * repeats the given string n times
 * @param str the string to repeat
 * @param num the number of times to repeat the string
 * @returns the repeated string
 */
declare function repeat(str: string, num: number): string;
/**
 * Formats the given string in title case fashion
 * @param str the string to title
 * @returns formated string
 */
declare function title(str: string | null | undefined): string;
/**
 * Splits string to separtor
 * @param str the string to split
 * @param separator the separtor pattern to split by
 * @param limit the length to truncate results to
 * @returns the string array
 */
declare function split(str: string, separator: RegExp | string, limit: number | undefined): string[];
/**
 * Convert string to kebab case
 * @param str the string to kebabCase
 * @returns converted to string
 */
declare function kebabCase(str: string): string;
/**
 * convert string to first upper
 * @param str convert to string
 * @returns converted to string
 */
declare function upperFirst(str: string): string;
/**
 * Splits string into an array of its word
 * @param str the string to inspect
 * @param pattern the pattern to match words
 * @returns the words of string array
 */
declare function word(str: string, pattern: RegExp | string): string[] | string;

declare function isArgument(val: any): boolean;
declare function isBuffer(val: any): boolean;
declare function isDate(val: any): boolean;
declare function isSymbol(value: any): value is symbol;
declare const isArray: (value: any) => boolean;
declare function isObject(value: any): value is object;
declare function isFunction(value: any): value is Function;
declare function isPrimitive(value: any): boolean;
declare function isString(value: any): value is string;
declare function isNumber(value: any): value is number;
declare function isInt(value: any): value is number;
declare function isFloat(value: any): value is number;
declare function isPromist(value: any): value is Promise<any>;
declare function isEmpty(value: any): boolean;

declare function chunk<T>(list: T[], num: number): T[][] | T[];
/**
 * Statistically determine the key value for each item in an array.
 */
declare function counting<T, K extends string | number | symbol>(list: T[], toKey: (item: T) => string): Record<K, number>;
/**
 * Given an array of arrays,return a new array with all sub-array elements concatenated into it.
 */
declare function flat<T = any>(arr: T[][]): T[];
/**
 * Group an array by a key function and return a new object with the grouped items.
 */
declare function group<T, Key extends string | number | symbol>(list: readonly T[], groupId: (item: T) => Key): Partial<Record<Key, T[]>>;
/**
 * Get max value from an array
 */
declare function maxItem(arr: readonly [number, ...number[]]): number;
declare function maxItem(arr: readonly number[]): number | null;
declare function maxItem<T>(arr: readonly T[], func: (item: T) => number | string): T | null;
/**
 * Select a filter and a mapper inside of a reduce, only iterate the list once time.
 */
declare function select<T, K>(list: T[], mapper: (item: T, index: number) => K, condition: (item: T, index: number) => boolean): K[];
/**
 * Sort a/an list/array of objects by a numerical property
 */
declare function sort<T>(array: readonly T[], getter: (item: T) => number, desc?: boolean): T[];
/**
 *
 * Sum all number in an arrays.
 * Optionally privode a function to convert object in an array to number values.
 *
 */
declare function sumItem<T extends number>(array: readonly T[]): number;
declare function sumItem<T extends object>(array: readonly T[], fn: (item: T) => number): number;
/**
 * If the item matching the condition already exists, remove it. Otherwise, add it.
 */
declare function toggle<T = any>(arr: readonly T[], item: T, key?: null | ((item: T, idx: number) => number | string | symbol), options?: {
    strategy?: 'prepend' | 'append';
}): T[];
/**
 * Remove duplicates from an/a array/list
 */
declare function unique<T, K extends string | number | symbol>(arr: readonly T[], key?: (item: T) => K): T[];

/**
 * Adds two numbers.
 * @param a the first number in an addition
 * @param b the second number in an addition
 * @returns return the totals type number or string or undefined
 */
declare function add<T = number>(a: T, b: T): number | string | undefined;
/**
 * Computes number rounded up to precision.
 * @param num the number to be rounded up
 * @param precision upward rounding accuracy
 * @returns the rounded up number
 */
declare function ceil(num: number, precision: number): number;
/**
 * The sum function takes a list of numbers and returns the sum of those numbers.
 * @param array init array
 * @returns  the sum of the numbers in the list
 */
declare function sum(array: number[]): number;
/**
 * Calculate the statistical value of a field based on raw data
 * @param array  init array
 * @param func return the field that requires a certain calculation
 * @returns statistical value
 */
declare function sumBy<T>(array: T[], func: Function): number;

export { add, camelCase, capitalize, ceil, chunk, counting, flat, group, isArgument, isArray, isBuffer, isDate, isEmpty, isFloat, isFunction, isInt, isNumber, isObject, isPrimitive, isPromist, isString, isSymbol, kebabCase, maxItem, repeat, replace, select, sort, split, sum, sumBy, sumItem, title, toLowerCase, toUpperCase, toggle, trim, unique, upperFirst, word };
