import { computed } from 'vue'
import { DK_INPUT_TYPE } from '../../_tokens'
import type { ComputedRef } from 'vue'
import type { dkInputType } from '../../_interface'
/**
 * @name getInputGlobalType
 * @Time 2023年05月05日
 * @param { dkInputType | null | undefined } [type] 组件的类型
 * @returns getInputGlobalType 所需要的 props 参数类型接口
 */

export interface getInputGlobalType {
  type?: dkInputType | null
}

export interface getInputType {
  getInputType: (value?: dkInputType) => ComputedRef<dkInputType>
}

/**
 * @name getInput
 * @Time 2023年05月05日
 * @function getInputType 获取input组件的类型
 * @returns input组件hooks
 */
export const getInput = (props?: getInputGlobalType): getInputType => {
  /**
   * @name getInputType
   * @returns 获取input组件的类型
   */
  const getInputType = (
    value: string | dkInputType = 'text'
  ): ComputedRef<dkInputType> => {
    return computed((): dkInputType => {
      if (!props) {
        return value as dkInputType
      }
      if (props.type && !DK_INPUT_TYPE.includes(props.type as dkInputType)) {
        return value as dkInputType
      }
      return (props.type || value) as dkInputType
    })
  }
  return {
    getInputType
  }
}
