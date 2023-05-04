

/**
 * @name vue
 * @Time 2023年04月28日
 * CSSProperties：表示 CSS 样式属性的键值对集合，用于指定 DOM 元素的样式；
 * ComputedRef：表示一个计算属性的引用，即一个响应式的、只读的值；
 * useSlots：是一个 Vue 3 中的 Hook，用于获取组件的插槽内容；
 * Slots：表示一个插槽对象，包含了组件中定义的所有插槽内容。
 * @description 按钮用的hooks
*/
import type { CSSProperties, ComputedRef,Slots,useSlots } from 'vue'
import { getStyleList } from '..'
import type { ClassListName } from '../../_interface'
import type { DkButtonProps } from '../../dkbutton/src/props'

/**
 * @name get-button
 * @Time 2023年04月28日
 * @description 按钮用的hooks
*/

/**
 * @name getButtonType
 * @Time 2023年04月28日
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
*/

export interface getButtonType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
}

/**
 * button 组件方法封装
 * @Time 2023年05月04日
 * @author CadWalaDers(范先生) <https://github.com/CadWalaDers>
 * @description 组件方法封装
*/

export const getButton = (props: DkButtonProps)=> {
  getStyleList(props,'button')
  const classList =[]
  const styleList =[]

  return {
    classList,
    styleList
  }
}