import { isNumber } from '../typeof'
import type { PropType } from 'vue'

/**
 * 校验器类型
 *
 * @param { any } val 校验的值
 */

export type calibrator = (val: any) => boolean

/**
 * @name returnType
 * @Time 2023年04月27日
 * @param { Object } type 参数类型
 * @param { Function } default 默认值
 * @param { Function } calibrator 校验器
 * @returns 返回值类型接口
 */

export interface returnType<T, F> {
  readonly type: T
  readonly default: () => F
  readonly validator?: calibrator
}

/**
 * @name setStringNumberProps
 * @Time 2023年04月27日
 * @param { string | number } [defaultVal] 默认值
 * @returns 设置 string(字符串) & number(数字) 类型 props 参数
 */

export const setStringNumberProps = <T extends string | number>(
  defaultVal?: T
): returnType<PropType<string | number>, string | number | null> => {
  return {
    type: [String, Number] as PropType<string | number>,
    default: (): T | null => defaultVal || null
  } as const
}

/**
 * @name setBooleanProps
 * @Time 2023年04月27日
 * @param { boolean } defaultVal 默认值:false
 * @param { unknown } BooleanConstructor 布尔类型构造函数
 * @returns 设置 boolean(布尔类型) 类型的 props 参数
 */
export const setBooleanProps = (
  defaultVal = false
): returnType<BooleanConstructor, boolean> => {
  return {
    type: Boolean,
    default: (): boolean => defaultVal
  } as const
}

/**
 * @name setStringProp
 * @Time 2023年04月27日
 * @param { string } [defaultVal] 默认值
 * @param { Function } [validator] 校验器
 * @returns 设置 string(字符串) 类型的 props 参数
 */
export const setStringProp = <T extends string>(
  defaultVal?: null | T,
  validator?: calibrator
) => {
  const config = {
    type: String as unknown as PropType<T>,
    default: (): T | null => defaultVal || null,
    ...(validator ? { validator } : {})
  } as const
  return config
}

/**
 * @name setNumberProps
 * @Time 2023年04月27日
 * @param { number } defaultVal 默认值
 * @returns 设置 number(数值类型) 类型 props 参数
 */
export const setNumberProps = <T extends number>(
  defaultVal?: null | T
): returnType<NumberConstructor, number | null> => {
  return {
    type: Number,
    default: (): T | null => (isNumber(defaultVal) ? defaultVal : null)
  } as const
}

/**
 * @name setObjectProps
 * @Time 2023年04月27日
 * @param { Object } [defaultVal] 默认值
 * @returns 设置 object(一个对象) 类型 props 参数
 */

export const setObjectProps = <T extends object>(
  defaultVal = null
): returnType<PropType<T>, null> => {
  return {
    type: Object as PropType<T>,
    default: () => defaultVal
  } as const
}

/**
 * @name setFunctionProps
 * @Time 2023年04月27日
 * @param { Function } [defaultVal] 默认值
 * @returns 设置 function(一个方法函数) 类型 props 参数
 */

export const setFunctionProps = <T extends Function>(
  defaultVal = null
): returnType<PropType<T>, null> => {
  return {
    type: Function as PropType<T>,
    default: () => defaultVal
  } as const
}

/**
 * @name setArrayProps
 * @Time 2023年04月27日
 * @param { Array } [defaultVal] 默认值
 * @returns 设置 array(数组类型) 类型 props 参数
 */

export const setArrayProps = <T>(
  defaultVal?: null | T
): returnType<PropType<T>, T | null> => {
  return {
    type: Array as unknown as PropType<T>,
    default: (): T | null => defaultVal || null
  }
}
