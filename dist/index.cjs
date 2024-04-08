'use strict';

function capitalize(str) {
  if (!str || str.length === 0)
    return "";
  const lower = str.toUpperCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1).toLowerCase();
}
function trim(str, charsToTrim = " ") {
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
  if (!str)
    return "";
  return str.split("").reduce((acc, cur) => {
    return `${acc}${cur.charAt(0).toUpperCase()}`;
  }, "");
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
function isDate(value) {
  return Object.prototype.toString.call(value) === "[object Date]";
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

function sort(array, getter, desc = false) {
  if (!array)
    return [];
  const asc = (a, b) => getter(a) - getter(b);
  const dsc = (a, b) => getter(b) - getter(a);
  return array.slice().sort(desc === true ? dsc : asc);
}

function add(a, b) {
  if (typeof a === "number" && typeof b === "number")
    return a + b;
  if (typeof a === "string" && typeof b === "string")
    return a.concat(b);
  return void 0;
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
exports.isArray = isArray;
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
exports.sort = sort;
exports.sum = sum;
exports.sumBy = sumBy;
exports.toUpperCase = toUpperCase;
exports.trim = trim;
