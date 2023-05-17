import { setBooleanProps, setStringProp, setFunction } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import { DK_TYPE, DK_TARGET, DK_SIZE } from '../../_tokens'
import type { dkPlusType, dkTarget, dkPlusSize, MouseEventType } from '../../_interface'
/**
 * @name dk-button
 * @author fanKai16
 * @Time 2023/05/08
 * @property {boolean} link 是否为A标签按钮
 * @property {string} href  A标签按钮的链接地址
 * @property {string} target  A标签按钮的原生target
 * @property {boolean} text 是否为文本按钮
 * @property {string} type 按钮类型
 * @property {string} size 按钮大小
 * @property {string} fontSize 按钮文字大小
 * @property {string} fontColor 按钮的字体颜色
 * @property {string} bgColor 按钮的背景颜色
 * @property {boolean} disabled  按钮是否禁用了
 * @property {string} textDecoration 文本按钮中上下划线
 * @property {function} onClick 点击按钮事件回调
 * @property {boolean} circle    圆形按钮
 * @property {string} shadow   可以自定义按钮的阴影样式
 * @property {boolean} ripples 水波纹效果
 * @property {string} ripplesBgColor  水波纹效果的背景颜色
 * @property {boolean} diffusion   扩散效果哦
 * @description 按钮变量定义
 **/
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
   * @name fontSize
   * @param { string }  按钮文字大小
   * @returns 按钮文字大小
   */
  fontSize: setStringProp(),
  /**
   * @name fontColor
   * @param { string }  字体颜色
   * @returns 按钮的字体颜色
   */
  fontColor: setStringProp(),
  /**
   * @name bgColor
   * @param { string }  背景颜色
   * @returns 按钮的背景颜色
   */
  bgColor: setStringProp(),
  /**
   * @name disable
   * @param { boolean }  是否禁用
   * @returns 按钮否禁用
   */
  disabled: setBooleanProps(),
  /**
   * @name textDecoration
   * @param { string }  文本按钮中上下划线
   * @returns 文本按钮中上下划线
   */
  textDecoration: setStringProp(),
  /**
   * @name onClick
   * @param { Function }  点击按钮事件回调
   * @returns 按钮阴影效果
   */
  onClick: setFunction<MouseEventType>(),
  /**
   * @name circle
   * @param { boolean }  圆形按钮
   * @returns 圆形按钮
   */
  circle: setBooleanProps(),
  /**
   * @name shadow
   * @param { string }  按钮阴影效果
   * @returns 按钮阴影效果
   */
  shadow: setStringProp(),
  /**
   * @name ripples
   * @param { boolean }  涟漪效果
   * @returns 涟漪效果
   */
  ripples: setBooleanProps(),
  /**
   * @name ripplesBgColor
   * @param { string }  涟漪效果的自定义颜色BG
   * @returns 涟漪效果的自定义颜色BG
   */
  ripplesBgColor: setStringProp(),
  /**
   * @name diffusion
   * @param { string }  涟漪效果的自定义颜色BG
   * @returns 扩散效果
   */
  diffusion: setBooleanProps(),

  /**是否加载中 */
  loading: setBooleanProps(),

  /**半圆形按钮 */
  round: setBooleanProps(),
  /**按钮图标 */
  icon: setStringProp(),
  /**按钮图标后 */
  afterIcon: setStringProp()
} as const

/** button 组件 props 类型 */
export type DkButtonProps = ExtractPropTypes<typeof dkButtonProps>
