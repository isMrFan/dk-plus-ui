const {toString} = Object.prototype;

/**
 * 检测一个值是否为指定的类型
 * @Time 2023年04月27日
 * @param { unknown} value 要检测的值
 * @param { string } type 预期类型
 * @returns { boolean } 这个值是否为传入的类型
*/

export const isType = (value: unknown, type: string): boolean => {
  return toString.call(value) === `[object ${type}]`
}

/**
 * 检测一个数据是否为 Date(时间) 类型
 * @Time 2023年04月27日
 * @param {unknown } value 要检测的值
 * @returns { boolean }
*/

export const isDateTime = (value: unknown): value is Date => isType(value, 'Date')


/**
 * 检测一个数据是否为 number(数值) 类型
 * @Time 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean }
 * @see isNaN() 函数用于检查其参数是否是非数字值。
*/

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !isNaN(value)

/**
 * 检测一个数据是否为 string(字符串) 类型
 * 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean }
*/

export const isString = (value: unknown): value is string => 
  typeof value === 'string'

/**
 * 检测一个数据是否为 boolean(布尔) 类型
 * 2023年04月27日
 * @param { unknown } value 要检测的数据
 * @returns { boolean }
*/

export const isBoolean = (value: unknown): value is boolean => 
  isType(value, 'Boolean')

/**
 * 判断一个值是否为 object(对象) 类型
 * 2023年04月27日
 * @param { unknown } value 要检测的值
 * @returns { boolean }
*/

export const isObject = (value: unknown): value is object => 
  isType(value, 'Object')

/**
 * 判断一个值是否为 function(函数) 类型
 * 2023年04月27日
 * @param {unknown } value 要检测的值
 * @returns { boolean }
*/

export const isFunction = (value: unknown): value is Function => isType(value, "Function"); 

/**
 * 判断一个值是否为 array(数组) 类型
 *
 * @param { unknown } value 要检测的值
 * @returns { boolean }
*/

export const isArray = Array.isArray