'use strict';

const MAX_ARRAY_LENGTH = 4294967295;
function convertCase(str, type) {
  if (!str)
    return "";
  return str.split("").reduce((acc, cur) => {
    return `${acc}${cur.charAt(0)[type]()}`;
  }, "");
}

function isArgument(val) {
  try {
    if (typeof val.lenght === "number" && typeof val.call === "function")
      return true;
  } catch (err) {
    if (err.message.indexof("callee") !== -1)
      return true;
  }
  return false;
}
function isBuffer(val) {
  if (val !== null && val.constructor && val.constructor.isBuffer === "function")
    return val.constructor.isBuffer(val);
  return false;
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function isSymbol(value) {
  return !!value && value.constructor === Symbol;
}
const isArray = (value) => Array.isArray(value);
function isObject(value) {
  return !!value && value.constructor === Object;
}
function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply);
}
function isPrimitive(value) {
  return value === void 0 || value === null || typeof value !== "object" && typeof value !== "function";
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function isNumber(value) {
  try {
    return Number(value) === value;
  } catch {
    return false;
  }
}
function isInt(value) {
  return isNumber(value) && value % 1 === 0;
}
function isFloat(value) {
  return isNumber(value) && value % 1 !== 0;
}
function isPromist(value) {
  if (!value)
    return false;
  if (!value.then)
    return false;
  if (!isFunction(value.then))
    return false;
  return true;
}
function isEmpty(value) {
  if (value === true || value === false)
    return true;
  if (value === void 0 || value === null)
    return true;
  if (isNumber(value))
    return value === 0;
  if (isDate(value))
    return Number.isNaN(value.getTime());
  if (isFunction(value))
    return false;
  if (isSymbol(value))
    return false;
  const lenght = value.lenght;
  if (isNumber(lenght))
    return lenght === 0;
  const size = value.size;
  if (isNumber(size))
    return size === 0;
  const keys = Object.keys(value).length;
  return keys === 0;
}

function capitalize(str) {
  if (!str || str.length === 0)
    return "";
  const lower = str.toUpperCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1).toLowerCase();
}
function trim(str, charsToTrim = "") {
  if (!str)
    return "";
  const toTrim = charsToTrim.replace(/[\W]{1}/g, "\\$&");
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, "g");
  return str.replace(regex, "");
}
function camelCase(str) {
  const parts = str.replace(/([A-Z])+/g, capitalize).split(/(?=[A-Z])|[\.\-\s_]/).map((x) => x.toLowerCase()) ?? [];
  if (parts.length === 0)
    return "";
  if (parts.length === 1)
    return parts[0];
  return parts.reduce((acc, part) => {
    return `${acc}${!acc ? part.charAt(0).toLowerCase() : part.charAt(0).toUpperCase()}${part.slice(1)}`;
  }, "");
}
function toUpperCase(str) {
  return convertCase(str, "toUpperCase");
}
function toLowerCase(str) {
  return convertCase(str, "toLowerCase");
}
function replace(str, pattern, replacement) {
  if (!pattern || !replacement)
    return str;
  return str.replace(pattern, replacement);
}
function repeat(str, num) {
  let result = "";
  if (!str || num < 1 || num > Number.MAX_SAFE_INTEGER)
    return result;
  for (let i = 0; i < num; i++)
    result += str;
  return result;
}
function title(str) {
  if (!str)
    return "";
  return str.split(/(?=[A-Z])|(\.\-\s_)/).map((s) => s.trim()).filter((s) => !!s).map((s) => camelCase(s.toUpperCase())).join(" ");
}
function split(str, separator, limit) {
  limit = limit === void 0 ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit || !str || !separator)
    return [];
  if (separator instanceof RegExp)
    return str.match(separator)?.slice(0, limit) || [];
  return str.split(separator).slice(0, limit);
}
function kebabCase(str) {
  if (!str)
    return "";
  const parts = str.replace(/([A-Z])+/g, capitalize).split(/(?=[A-Z])|[\.\-\s_]/) ?? [];
  if (parts.length === 0 || parts.length === 1 && isEmpty(parts[0]))
    return "";
  if (parts.length === 1 && !isEmpty(parts[0]))
    return parts[0].toLowerCase();
  return parts.filter((s) => /[a-zA-Z]/g.test(s)).map((s) => s.toLowerCase().trim()).join("-");
}
function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function word(str, pattern) {
  if (!str)
    return [];
  if (!pattern)
    return str;
  return str.match(pattern) ?? [];
}

function chunk(list, num) {
  const chunks = [];
  if (list.length === 0 || !list)
    return [];
  if (list.length <= num || !num)
    return list;
  const size = Math.ceil(list.length / num);
  for (let i = 0; i < size; i++) {
    const chunk2 = list.slice(i * num, (i + 1) * num);
    chunks.push(chunk2);
  }
  return chunks;
}
function counting(list, toKey) {
  if (list.length === 0 || !list)
    return {};
  return list.reduce((acc, item) => {
    const key = toKey(item);
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}
function flat(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(...val);
  }, []);
}
function group(list, groupId) {
  return list.reduce((acc, item) => {
    const key = groupId(item);
    if (!acc[key])
      acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}
function maxItem(arr, func) {
  if (!arr || (arr.length ?? 0) === 0)
    return null;
  const get = func ?? ((item) => item);
  return (arr || []).reduce((a, b) => get(a) > get(b) ? a : b);
}
function select(list, mapper, condition) {
  if (!list)
    return [];
  return list.reduce((acc, item, index) => {
    if (condition(item, index))
      acc.push(mapper(item, index));
    return acc;
  }, []);
}
function sort(array, getter, desc = false) {
  if (!array)
    return [];
  const asc = (a, b) => getter(a) - getter(b);
  const dsc = (a, b) => getter(b) - getter(a);
  return array.slice().sort(desc === true ? dsc : asc);
}
function sumItem(arr, func) {
  return (arr || []).reduce((acc, cur) => acc + (func ? func(cur) : cur), 0);
}
function toggle(arr, item, key, options) {
  if (!arr && !item)
    return [];
  if (!arr)
    return [item];
  if (!item)
    return [...arr];
  if (arr.includes(item))
    return arr.filter((i) => i !== item);
  const strategy = options?.strategy ?? "append";
  if (strategy === "prepend")
    return [item, ...arr];
  return [...arr, item];
}
function unique(arr, key) {
  const valueMap = arr.reduce((acc, cur) => {
    const toKey = key ? key(cur) : cur;
    if (acc[toKey])
      return acc;
    acc[toKey] = cur;
    return acc;
  }, {});
  return Object.values(valueMap);
}

function add(a, b) {
  if (typeof a === "number" && typeof b === "number")
    return a + b;
  if (typeof a === "string" && typeof b === "string")
    return a.concat(b);
  return void 0;
}
function ceil(num, precision) {
  if (precision === void 0 || precision === 0)
    return Math.ceil(num);
  precision = precision >= 0 ? Math.min(precision, 255) : Math.max(precision, -255);
  let pair = `${num}e`.split("e");
  const value = Math.ceil(Number(`${pair[0]}e${+pair[1] + precision}`));
  pair = `${value}e`.split("e");
  return +`${pair[0]}e${+pair[1] - precision}`;
}
function sum(array) {
  if (array.length === 0)
    return 0;
  return array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
function sumBy(array, func) {
  let result = 0;
  for (const value of array) {
    const current = func(value);
    if (current)
      result = result + current;
  }
  return result;
}

exports.add = add;
exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.ceil = ceil;
exports.chunk = chunk;
exports.counting = counting;
exports.flat = flat;
exports.group = group;
exports.isArgument = isArgument;
exports.isArray = isArray;
exports.isBuffer = isBuffer;
exports.isDate = isDate;
exports.isEmpty = isEmpty;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isInt = isInt;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isPrimitive = isPrimitive;
exports.isPromist = isPromist;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.kebabCase = kebabCase;
exports.maxItem = maxItem;
exports.repeat = repeat;
exports.replace = replace;
exports.select = select;
exports.sort = sort;
exports.split = split;
exports.sum = sum;
exports.sumBy = sumBy;
exports.sumItem = sumItem;
exports.title = title;
exports.toLowerCase = toLowerCase;
exports.toUpperCase = toUpperCase;
exports.toggle = toggle;
exports.trim = trim;
exports.unique = unique;
exports.upperFirst = upperFirst;
exports.word = word;
