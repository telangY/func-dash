import { isArgument, isArray, isBuffer, isDate } from 'src/types'

export function kindOf(val: any): unknown {
  if (val === void 0)
    return 'undefined'
  if (val === null)
    return 'null'

  const type = typeof val
  if (type === 'boolean')
    return 'boolean'
  if (type === 'string')
    return 'string'
  if (type === 'number')
    return 'number'
  if (type === 'symbol')
    return 'symbol'
  if (type === 'function')
    return isGeneratorFn(val) ? 'generatorfunction' : 'function'

  if (isArray(val))
    return 'array'
  if (isBuffer(val))
    return 'buffer'
  if (isArgument(val))
    return 'arguments'
  if (isDate(val))
    return 'date'
  if (isError(val))
    return 'error'
  if (isRegexp(val))
    return 'regexp'

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol'
    case 'Promise': return 'promise'

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap'
    case 'WeakSet': return 'weakset'
    case 'Map': return 'map'
    case 'Set': return 'set'

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array'
    case 'Uint8Array': return 'uint8array'
    case 'Uint8ClampedArray': return 'uint8clampedarray'

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array'
    case 'Uint16Array': return 'uint16array'
    case 'Float16Array': return 'float16array'

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array'
    case 'Uint32Array': return 'uint32array'
    case 'Float32Array': return 'float32array'

    // 64-bit typed arrays
    case 'Float64Array': return 'float64array'
    case 'BigInt64Array': return 'bigint64array'
    case 'BigUint64Array': return 'biguint64array'
  }

  if (isGeneratorObj(val))
    return 'generator'

  switch (Object.prototype.toString.call(val)) {
    case '[object Object]': return 'object'
    // iterators
    case '[object Map Iterator]': return 'mapiterator'
    case '[object Set Iterator]': return 'setiterator'
    case '[object String Iterator]': return 'stringiterator'
    case '[object Array Iterator]': return 'arrayiterator'
  }

  return type.slice(8, -1).toLowerCase().replace(/\s/g, '')
}

export function ctorName(val: any): string | undefined {
  return typeof val.constructor === 'function' ? val.constructor.name : undefined
}

export function isError(val: any) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number')
}

export function isGeneratorFn(value: any): value is GeneratorFunction {
  return ctorName(value) === 'GeneratorFunction'
}

export function isGeneratorObj(val: any) {
  return typeof val.next === 'function' && typeof val.throw === 'function' && typeof val.return === 'function'
}

export function isRegexp(val: any) {
  if (val instanceof RegExp)
    return true
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean'
}
