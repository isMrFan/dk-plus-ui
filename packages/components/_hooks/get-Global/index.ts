import { computed, reactive, toRefs } from 'vue'
import { DK_TYPE, DK_SIZE } from '../../_tokens'
import { isArray } from '../../_utils'
import type { ComputedRef } from 'vue'
import type { dkPlusType, dkPlusSize } from '../../_interface'

/**
 * @name getGlobalPropType
 * @Time 2023年04月28日
 * @param { dkPlusType | null | undefined } [type] 组件的类型
 * @param { dkPlusSize | string | number } [size] 组件的尺寸
 * @returns getGlobalPropType 所需要的 props 参数类型接口
 */
export interface getGlobalPropType {
  type?: dkPlusType | null 
  size: dkPlusSize | string | number
}

/**
 * @name getGlobalType
 * @Time 2023年04月28日
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 * @param { Function } getProp 获取组件的 props 指定参数(type | size)如有需要自行添加
 * @returns getGlobalType 返回值类型接口
 */
export interface getGlobalType {
  getType: (value?: dkPlusType) => ComputedRef<dkPlusType>
  getSize: (value?: dkPlusSize) => ComputedRef<dkPlusSize>
  getProp: (target: ('type' | 'size')[], value?: string[]) => object
}

/**
 * @name getGlobal
 * @Time 2023年04月28日
 * @param { Function } getType 获取公共组件的类型
 * @param { Function } getSize 获取公共组件的尺寸
 * @param { Function } getProp 获取组件的 props 指定参数(type | size)如有需要自行添加
 * @returns getGlobal 具体函数方法
 */
export const getGlobal = (props?: getGlobalPropType): getGlobalType => {
  /**
   * @name getType
   * @Time 2023年04月28日
   * @returns 获取组件的类型
   */
  const getType = (value: string | dkPlusType = 'default'): ComputedRef<dkPlusType> => {
    return computed((): dkPlusType => {
      if (!props) {
        return value as dkPlusType
      }
      if (props.type && !DK_TYPE.includes(props.type as dkPlusType)) {
        return value as dkPlusType
      }
      return (props.type || value) as dkPlusType
    })
  }
  /**
   * @name getSize
   * @Time 2023年04月28日
   * @returns 获取组件的尺寸
   */
  const getSize = (value: string | dkPlusSize = 'large'): ComputedRef<dkPlusSize> => {
    return computed((): dkPlusSize => {
      if (!props) {
        return value as dkPlusSize
      }
      if (props.size && !DK_SIZE.includes(props.size as dkPlusSize)) {
        return value as dkPlusSize
      }
      return (props.size || value) as dkPlusSize
    })
  }
  /**
   * @name getProp
   * @Time 2023年05月04日
   * @returns 获取组件的 props 指定参数(type | size)
   */
  type GetPropTarget = 'type' | 'size'
  const getPropMapList = {
    type: getType,
    size: getSize
  } as const
  const getProp = (target: GetPropTarget[], value?: string[]): object => {
    /**
     * @returns 结果对象 {props}
     */
    const prams: {
      type?: ComputedRef<dkPlusType | dkPlusSize>
      size?: ComputedRef<dkPlusType | dkPlusSize>
    } = {}
    /**
     * @returns 判断是否为数组,提前拦截不是数组的错误
     */
    if (isArray(target)) {
      target.forEach((item: GetPropTarget, index: number): void => {
        /** 检测映射对象中是否存在该属性 */
        if (getPropMapList[item]) {
          /** 获取默认值 */
          const defaultValue: string | undefined = value && value[index]

          /** 将需要更改的树形改为指定参数 */
          prams[item] = getPropMapList[item](defaultValue)
        }
      })
    }
    if (props) {
      return reactive({
        ...toRefs(props),
        ...prams
      })
    }
    return reactive(prams)
  }
  return {
    getType,
    getSize,
    getProp
  }
}
