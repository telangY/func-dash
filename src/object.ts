import { isObject, isPrimitive } from './types'

// Merges two objects together into new object
export function assign<T extends Record<string | symbol | number, any>, K extends Record<string | symbol | number, any>>(initial: T, override: K): T & K {
  if (!initial || !override)
    return initial ?? override ?? {}

  return Object.entries({ ...initial, ...override }).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: (() => {
      if (isObject(initial[key]))
        return assign(initial[key], override[key])

      return value
    })(),
  }), {} as T)
}

// Creates a shallow copy of the given object/value
export function clone<T>(obj: T): T {
  if (isPrimitive(obj))
    return obj

  if (typeof obj === 'function')
    return obj.bind({})

  const newObj = new ((obj as object).constructor as { new(): T })()

  Object.getOwnPropertyNames(obj).forEach((item) => {
    (newObj as any)[item] = (obj as any)[item]
  })

  return newObj
}

// Map over the keys of an object
export function mapKeys<TValue, TKey extends string | number | symbol, TNewKey extends string | number | symbol>(obj: Record<TKey, TValue>, func: (key: TKey, value: TValue) => TNewKey): Record<TNewKey, TValue> {
  const keys = Object.keys(obj) as TKey[]
  return keys.reduce((acc, key) => {
    acc[func(key as TKey, obj[key])] = obj[key]
    return acc
  }, {} as Record<TNewKey, TValue>)
}

// Map over the values of an object
export function mapValues<TValue, TKey extends string | number | symbol, TNewValue>(obj: Record<string | number | symbol, TValue>, func: (value: TValue, key: TKey) => TNewValue): Record<TKey, TNewValue> {
  const keys = Object.keys(obj) as TKey[]
  return keys.reduce((acc, key) => {
    acc[key] = func(obj[key], key)
    return acc
  }, {} as Record<TKey, TNewValue>)
}

// Omit unwanted keys from an object
export function omit<T extends object, TKeys extends keyof T>(obj: T, keys: TKeys[]): Omit<T, TKeys> {
  if (!obj)
    return {} as Omit<T, TKeys>
  if (keys.length === 0 || !keys)
    return obj as Omit<T, TKeys>

  return keys.reduce((acc, key) => {
    delete acc[key]
    return acc
  }, { ...obj })
}

// Pick a list of keys from an object into a new object
export function pick<T extends object, TKeys extends keyof T>(obj: T, keys: TKeys[]): Pick<T, TKeys> {
  if (!obj)
    return {} as Pick<T, TKeys>
  if (keys.length === 0 || !keys)
    return obj as Pick<T, TKeys>

  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key))
      acc[key] = obj[key]
    return acc
  }, {} as Pick<T, TKeys>)
}
