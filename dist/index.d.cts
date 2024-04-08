/**
 * capitalize 将首字母转为大写
 * @param str 需要转换的字符串
 * @returns str 首字母转换大写后的字符串
 * capitalize('hello world')   -> 'Hello'
 * capitalize('va va voom') -> 'Va va voom'
 */
declare function capitalize(str: string): string;
/**
 * 修改给定的字符串中的所有前缀和后缀字符
 * @param str
 * @param charsToTrim
 * @returns format string
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
 * toUpperCase convert letters to upper case
 * @param str
 */
declare function toUpperCase(str: string): string;

declare function isSymbol(value: any): value is symbol;
declare const isArray: (value: any) => boolean;
declare function isObject(value: any): value is object;
declare function isFunction(value: any): value is Function;
declare function isPrimitive(value: any): boolean;
declare function isString(value: any): value is string;
declare function isNumber(value: any): value is number;
declare function isInt(value: any): value is number;
declare function isFloat(value: any): value is number;
declare function isDate(value: any): value is Date;
declare function isPromist(value: any): value is Promise<any>;
declare function isEmpty(value: any): boolean;

/**
 * sort
 * 一个没有修改原数组 并返回一个新的数组
 * 目前仅支持按照数字大小排序  其他排序开发中
 */
declare function sort<T>(array: readonly T[], getter: (item: T) => number, desc?: boolean): T[];

/**
 * 计算两个的数字的和  暂不支持其他类型
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 计算结果  数字或者  undefined
 */
declare function add<T = number>(a: T, b: T): number | string | undefined;
/**
 * 计算纯数字的数组
 * @param array 原始数据
 * @returns 计算总和
 */
declare function sum(array: number[]): number;
/**
 * 根据原始数据 计算某个字段的统计值
 * @param array 原始数据
 * @param func 需要计算的结果字段
 * @returns 统计数
 */
declare function sumBy<T>(array: T[], func: Function): number;

export { add, camelCase, capitalize, isArray, isDate, isEmpty, isFloat, isFunction, isInt, isNumber, isObject, isPrimitive, isPromist, isString, isSymbol, sort, sum, sumBy, toUpperCase, trim };
