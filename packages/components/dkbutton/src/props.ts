import { setBooleanProps, setStringProp } from '../../_utils'
import { ExtractPropTypes } from 'vue'
import { DK_TYPE, DK_TARGET, DK_SIZE } from '../../_tokens'
import { dkPlusType, dkTarget, dkPlusSize } from '../../_interface'
export const dkButtonProps = {
  /**
   * @name link
   * @param { boolean } link  [false] 默认值
   * @returns 按钮类型  是否为A标签按钮
   */
  link: setBooleanProps(),
  /**
   * @name href
   * @param { string } href  [''] 默认值
   * @returns 按钮类型为 link 时生效
   */
  href: setStringProp(),
  /**
   * @name target
   * @param { string } target ['_blank'] 默认值
   * @returns 原生 target 按钮类型为 link 时生效 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: setStringProp<dkTarget>('_blank', (value: dkTarget): boolean => {
    return DK_TARGET.includes(value)
  }),
  /**
   * @name text
   * @param { boolean } text  [false] 默认值
   * @returns 按钮类型为文本类型
   */
  text: setBooleanProps(),
  /**
   * @name type
   * @param { string } type [default] 默认值
   * @param { string } type [primary] 基础
   * @param { string } type [success] 成功
   * @param { string } type [info] 信息
   * @param { string } type [warning] 警告
   * @param { string } type [danger] 危险
   * @returns 按钮类型 是否为文本按钮(默认值:'default')
  */
  type: setStringProp<dkPlusType>(null, (value: dkPlusType): boolean => {
    return DK_TYPE.includes(value)
  }),
  /**
    * @name size
    * @param { string }  [large] 大
    * @param { string }  [medium] 中
    * @param { string }  [small] 小
    * @param { string }  [mini] 迷你
    * @returns 按钮类型 是否为文本按钮(默认值:'large')
  */
  size: setStringProp<dkPlusSize>(null, (value: dkPlusSize): boolean => {
    return DK_SIZE.includes(value)
  }),
  /**
    * @name bgColor
    * @param { string }  背景颜色
    * @returns 按钮的背景颜色
  */
  bgColor: setStringProp(),
  /**
    * @name fontColor
    * @param { string }  字体颜色
    * @returns 按钮的字体颜色
  */
  fontColor: setStringProp(),
  /**
    * @name shadow
    * @param { string }  按钮阴影效果
    * @returns 按钮阴影效果
  */
  shadow:setStringProp(),
  /**
    * @name fontSize
    * @param { string }  按钮文字大小
    * @returns 按钮文字大小
  */
  fontSize:setStringProp(),

  /**是否禁用 */
  disable: setBooleanProps(),

  /**是否加载中 */
  loading: setBooleanProps(),
  /**半圆角按钮 */
  round: setBooleanProps(),
  /**圆形按钮 */
  circle: setBooleanProps(),
  /**按钮图标 */
  icon: setStringProp(),
  /**按钮图标后 */
  afterIcon: setStringProp()
} as const

/** button 组件 props 类型 */
export type DkButtonProps = ExtractPropTypes<typeof dkButtonProps>
