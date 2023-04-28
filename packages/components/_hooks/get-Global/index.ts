import { computed } from 'vue'
import { DK_TYPE, DK_SIZE } from '../../_tokens'
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
 * @returns getGlobalType 返回值类型接口
 */
export interface getGlobalType {
  getType: (value?: dkPlusType) => ComputedRef<dkPlusType>,
  getSize: (
    value?: dkPlusSize,
    parentSize?: dkPlusSize | null
  ) => ComputedRef<dkPlusSize>
}

/**
 * @name getGlobal
 * @Time 2023年04月28日
 * @returns getGlobal 具体函数方法
 */
export const getGlobal = (props?: getGlobalPropType): getGlobalType => {
  const getType = (value: dkPlusType = 'default'): ComputedRef<dkPlusType> => {
    return computed(() => {
      if (!props) {
        return value;
      }
      if (props.type && !DK_TYPE.includes(props.type)) {
        return value;
      }
      return props.type || value;
    })
  }
  const getSize = (value: dkPlusSize = 'large'): ComputedRef<dkPlusSize> => {
    return computed(() => {
      if (!props) {
        return value;
      }
      if (props.size && !DK_SIZE.includes(props.size as dkPlusSize)) {
        return value;
      }
      return (props.size || value) as dkPlusSize;
    })
  }
  return {
    getType,
    getSize
  }
}
