/**
 * @name get-button
 * @Time 2023年04月28日
 * @description 按钮用的hooks
 * CSSProperties：表示 CSS 样式属性的键值对集合，用于指定 DOM 元素的样式；
 * ComputedRef：表示一个计算属性的引用，即一个响应式的、只读的值；
 * useSlots：是一个 Vue 3 中的 Hook，用于获取组件的插槽内容；
 * Slots：表示一个插槽对象，包含了组件中定义的所有插槽内容。
 */
import { useSlots, computed, reactive, toRefs } from 'vue'
import type { CSSProperties, ComputedRef, Slots } from 'vue'
import { getStyleList, getColor } from '..'
import { sizeChange } from '../../_utils'
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
 * @name getButton
 * @Time 2023年05月04日
 * @author CadWalaDers(范先生) <https://github.com/CadWalaDers>
 * @description button组件方法封装
 */

export const getButton = (props: DkButtonProps) => {
  /**
   * @name slot
   * @description 获取当前组件的插槽
   */
  const slot: Slots = useSlots()
  const isSlot = computed(
    (): boolean => !(slot.default && slot.default() && slot.default()[0].children)
  )

  /**
   * @name defaultClassList
   * @description 默认转换的类名
   */
  let defaultClassList = [
    'type', 'size', 
    'disabled', 'loading', 
    'round', 'circle',
    'textDecoration'
  ]
  /**
   * @name params
   * @description 组件传来的props和准备特殊类名合并的处理
   */
  let params = reactive({
    ...toRefs(props)
  })
  // console.log('params', params);

  /**
   * @description 判断组件是否有插槽有则添加对应的类名用于样式处理
   */
  if (isSlot) {
    const iconSlot = !!slot.icon
    if (iconSlot) {
      defaultClassList = [...defaultClassList, ...['iconSlot']]
      params['iconSlot'] = true
    }
    const afterIconSlot = !!slot.afterIcon
    if (afterIconSlot) {
      defaultClassList = [...defaultClassList, ...['afterIconSlot']]
      params['afterIconSlot'] = true
    }
  }
  /**
   * @name classes
   * @description 进行类名的处理
   */
  const { classes } = getStyleList(params, 'button')
  const classList = classes([...defaultClassList], 'button')
  const styleList = computed((): CSSProperties => {
    const { bgColor, fontColor, shadow, fontSize } = props
    let defaultStyle = {
      '--button-color': fontColor,
      '--button-hover': fontColor ? getColor(props.fontColor).getDodge(0.4) : null,
      '--button-active': fontColor ? getColor(props.fontColor).getDeepen(0.4) : null,
      '--button-shadow': shadow,
      '--button-font-size': sizeChange(fontSize),
      '--button-hover-borderColor':bgColor?getColor(props.bgColor).getDodge(0.4) : null,
      '--button-hover-background':bgColor? getColor(props.bgColor).getDodge(0.4)  : null
    } as CSSProperties
    if (bgColor) {
      const bgStyle = {
        '--button-background': bgColor || null,
        '--button-hover': bgColor ? getColor(props.bgColor).getDeepen(0.4) : null,
        '--button-active': bgColor ? getColor(props.bgColor).getDeepen(0.2) : null
      } as CSSProperties
      defaultStyle = { ...defaultStyle, ...bgStyle }
    }
    return defaultStyle
  })

  return {
    classList,
    styleList
  }
}
