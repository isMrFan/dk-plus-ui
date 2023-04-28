const {toString} = Object.prototype;

/**
 * @name isType
 * @Time 2023年04月27日
 * @param { unknown} value 要检测的值
 * @param { string } type 预期类型
 * @returns { boolean } 检测一个值是否为指定的类型
*/

export const isType = (value: unknown, type: string): boolean => {
  return toString.call(value) === `[object ${type}]`
}

/**
 * @name isDateTime
 * @Time 2023年04月27日
 * @param {unknown } value 要检测的值
 * @returns { boolean } 检测一个数据是否为 Date(时间) 类型
*/

export const isDateTime = (value: unknown): value is Date => isType(value, 'Date')


/**
 * @name isNumber
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean }
 * @see isNaN() 函数用于检查其参数是否是非数字值。
 * @returns  检测一个数据是否为 number(数值) 类型
*/

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !isNaN(value)

/**
 * @name isString
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean } 检测一个数据是否为 string(字符串) 类型
*/

export const isString = (value: unknown): value is string => 
  typeof value === 'string'

/**
 * @name isBoolean
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean } 检测一个数据是否为 boolean(布尔) 类型
*/

export const isBoolean = (value: unknown): value is boolean => 
  isType(value, 'Boolean')

/**
 * @name isObject
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的值
 * @returns { boolean } 判断一个值是否为 object(对象) 类型
*/

export const isObject = (value: unknown): value is object => 
  isType(value, 'Object')

/**
 * @name isFunction
 * @Time 2023年04月27日
 * @param {unknown } value 要检测的值
 * @returns { boolean } 判断一个值是否为 function(函数) 类型
*/

export const isFunction = (value: unknown): value is Function => isType(value, "Function"); 

/**
 * @name isArray
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的值
 * @returns { boolean } 判断一个值是否为 array(数组) 类型
*/

export const isArray = Array.isArray