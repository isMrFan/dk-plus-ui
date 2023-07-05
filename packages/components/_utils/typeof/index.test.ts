import { describe, it, expect } from 'vitest'
import {
  isType,
  isDateTime,
  isNumber,
  isString,
  isBoolean,
  isObject,
  isFunction,
  isArray
} from './'

describe('checking _utils/props/props.ts', () => {
  it('runnning isType', () => {
    expect(isType('value', 'String')).toBe(true)
    expect(isType(1, 'Number')).toBe(true)
    expect(isType(null, 'Null')).toBe(true)
    expect(isType(undefined, 'Undefined')).toBe(true)
    expect(isType([], 'Array')).toBe(true)
    expect(isType({}, 'Object')).toBe(true)
    expect(isType(new Map(), 'Map')).toBe(true)
    expect(isType(Symbol('Symbol'), 'Symbol')).toBe(true)

    // error example
    expect(isType(Symbol('Symbol'), '')).toBe(false)
  })

  it('runnning isDateTime', () => {
    expect(isDateTime(new Date())).toBe(true)
    // error example
    expect(isDateTime('is not Date')).toBe(false)
  })

  it('runnning isNumber', () => {
    expect(isNumber(12306)).toBe(true)
    // error example
    expect(isNumber('is not Number')).toBe(false)
  })

  it('runnning isString', () => {
    expect(isString('string')).toBe(true)
    // error example
    expect(isString(Symbol('is not String'))).toBe(false)
  })

  it('runnning isBoolean', () => {
    expect(isBoolean(false)).toBe(true)
    // error example
    expect(isBoolean(Symbol('is not Boolean'))).toBe(false)
  })

  it('runnning isObject', () => {
    expect(isObject({ status: 1 })).toBe(true)
    // error example
    expect(isObject([])).toBe(false)
  })

  it('runnning isFunction', () => {
    expect(isFunction(() => 'ok')).toBe(true)
    expect(
      isFunction(function check() {
        return 'okk'
      })
    ).toBe(true)
    // error example
    expect(isFunction('is not Function')).toBe(false)
  })

  it('runnning isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray(new Array(10))).toBe(true)
    expect(isArray([...new Set([1, 2, 3])])).toBe(true)
    // error example
    expect(isArray({})).toBe(false)
    expect(isArray('is not Function')).toBe(false)
  })
})
