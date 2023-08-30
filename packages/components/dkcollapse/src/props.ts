import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

/**
 * @name dk-collapse
 * @author fanKai
 * @Time 2023/08/14
 * @property {string} modelValue 折叠面板数组参数唯一标识
 * */
export const dkcollapse = {
  modelValue: setStringProp()
} as const

/** Collapse 组件 props 类型 */
export type DkCollapseProps = ExtractPropTypes<typeof dkcollapse>
