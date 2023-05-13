/**
 * @name get-StyleList
 * @Time 2023年05月04日
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 * @returns getStyleList 用于生成样式名称的hooks简洁代码
 */
import { computed, ref } from 'vue'
import { getProps } from '../..'
import { isBoolean, humpConversion, sizeChange } from '../../../_utils'
import type { ComputedRef, CSSProperties } from 'vue'
import type { FilterParams } from '../..'
import type { ClassListName, ScssConfigType } from '../../../_interface'

import sassConfig from '../../../../theme-chalk/src/mixins/config.scss?module'

/**
 * @name getSassList
 * @Time 2023年05月14日
 * @returns nameSpace 命名空间
 * @returns commonSeparator 公共分隔符
 * @returns elementSeparator 元素分隔符
 * @returns modifierSeparator 修饰符分隔符
 */
export const getSassConfig = (): ScssConfigType => {
  const SASS_CONFIG_CLASS: string = sassConfig.replace(/[\r\n\{\}\s*]/g, '')
  const SASS_CONFIG: ScssConfigType = SASS_CONFIG_CLASS.slice(
    7,
    SASS_CONFIG_CLASS.length - 1
  )
    .replace(/[\:\;]/g, ',')
    .split(',')
    .reduce((prev: object, cur: string, index: number, arr: string[]) => {
      if (index % 2 === 0) {
        cur = cur.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
        prev[cur] = arr[index + 1].replace(/\"/g, '')
      }
      return prev
    }, {})

  const {
    namespace = 'dk',
    commonSeparator = '-',
    elementSeparator = '_',
    modifierSeparator = '--'
  } = SASS_CONFIG
  return {
    namespace,
    commonSeparator,
    elementSeparator,
    modifierSeparator
  }
}

const { namespace, commonSeparator, elementSeparator, modifierSeparator } =
  getSassConfig()
export interface UseListReturn {
  classes: (list: FilterParams, className?: string) => ComputedRef<ClassListName>
  styles: (
    list: FilterParams,
    pixel?: boolean | string | string[]
  ) => ComputedRef<CSSProperties>
}

export const getStyleList = <T extends object>(props: T, name: string) => {
  const { filter } = getProps(props)
  /**
   * @name classes
   * @param { string[] } list 类名列表
   * @param { string } className 类名
   * @description 用于生成样式名称的hooks简洁代码
   */
  const classes = (
    list: FilterParams,
    className?: string
  ): ComputedRef<ClassListName> => {
    return computed((): ClassListName => {
      const classList = ref<ClassListName>([])
      const propList: Record<string, unknown> = filter(list)
      /**
       * @description 如果有className则添加className
       */
      className && classList.value.push(className)
      for (const key in propList) {
        if (propList[key]) {
          /**
           * @name classList
           * @description 利用props的key成样式名称
           */
          classList.value.push(
            `${namespace}${commonSeparator}${name}${elementSeparator}${
              isBoolean(propList[key]) ? humpConversion(key) : propList[key]
            }`
          )
        }
      }
      return classList.value
    })
  }
  /**
   * @name setStyleListType
   * @description setStyleList函数的参数类型
   */
  type setStyleListType = string | number
  /**
   * @name setStyleList
   * @param { string,number } val 表示需要转换的值，可以是字符串或数字
   * @param { string } key 表示需要转换的值的key，用于判断是否需要添加单位
   * @param { boolean,string,string[] } pixel 表示是否需要添加单位，可以是布尔值，字符串，字符串数组
   * @description 函数的主要逻辑是判断 pixel 参数的类型，根据不同的类型来确定是否需要添加单位。如果 pixel 是一个布尔值，那么所有的数字都将添加单位。如果 pixel 是一个字符串，那么只有在 pixel 等于 key 时才不会添加单位。如果 pixel 是一个字符串数组，那么只有在数组中包含当前的值时才不会添加单位。最后，函数返回转换后的值，可以是字符串或数字。
   */
  const setStyleList = (
    val: setStyleListType,
    key: string,
    pixel: boolean | string | string[] = true
  ): string => {
    const shouldAddUnit =
      typeof pixel === 'boolean'
        ? pixel
        : pixel === key || (Array.isArray(pixel) && pixel.includes(val.toString()))
    const valueWithUnit = shouldAddUnit ? sizeChange(val) : val
    return String(valueWithUnit)
  }
  /**
   * @name styles
   * @param { string[] } list 样式列表
   * @param { boolean,string,string[] } pixel 表示是否需要添加单位，可以是布尔值，字符串，字符串数组
   * @description 用于生成样式名称的hooks简洁代码
   */
  const styles = (
    list: FilterParams,
    pixel: boolean | string | string[] = true
  ): ComputedRef<CSSProperties> => {
    const propList = filter(list)
    const styleList = Object.fromEntries(
      Object.entries(propList)
        .filter(([key, value]) => value)
        .map(([key, value]) => [
          `${modifierSeparator}${name}${commonSeparator}${humpConversion(key)}`,
          setStyleList(value as string | number, key, pixel)
        ])
    )
    return computed(() => styleList)
  }

  return {
    classes,
    styles
  }
}
