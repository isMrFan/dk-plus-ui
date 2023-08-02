import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

/**
 * @name dk-alert
 * @author fanKai
 * @Time 2023/08/02
 * @property {string} type 指定警告提示的样式，有四种选择 success、info、warning、error
 * */
export const dkcollapse = {
  modelName: setStringProp()
} as const

/** Collapse 组件 props 类型 */
export type DkCollapseProps = ExtractPropTypes<typeof dkcollapse>
