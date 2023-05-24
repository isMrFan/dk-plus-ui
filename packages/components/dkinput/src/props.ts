import type { ExtractPropTypes } from 'vue'
import { DK_SIZE, DK_INPUT_TYPE } from '../../_tokens'
import {
  setBooleanProps,
  setStringProp,
  setNumberProps,
  setObjectProps
} from '../../_utils'
import type { dkPlusSize, dkInputType } from '../../_interface'

export const dkInputProps = {
  /** textColor */
  textColor: setStringProp() || setNumberProps(),

  /** borderRadius */
  borderRadius: setStringProp() || setNumberProps(),
  /** fontSize */
  fontSize: setStringProp() || setNumberProps(),
  /** input宽度 */
  width: setStringProp() || setNumberProps(),

  /** input高度 */
  height: setStringProp() || setNumberProps(),
  /** input边框颜色 */
  borderColor: setStringProp(),
  /** input聚焦边框颜色 */
  focusBorderColor: setStringProp(),
  /** input悬浮颜色 */
  hoverBorderColor: setStringProp(),

  /** 是否展示密码 */
  showPassword: setBooleanProps(),
  /** 前缀内容 */
  append: setStringProp() || setNumberProps(),
  /** 前缀背景颜色 */
  appendBackground: setStringProp(),
  /** 前缀字体颜色 */
  appendColor: setStringProp(),
  /** 后缀内容 */
  prepend: setStringProp() || setNumberProps(),
  /** 输入框内容 */
  modelValue: setStringProp() || setNumberProps(),
  /**
   * 输入框类型
   * @default text
   * @param { string } type [text] 文本
   * @param { string } type [number] 数字
   * @param { string } type [password] 密码
   * @param { string } type [textarea] 多行文本
   * @returns { string } 返回一个字符串 默认值为 text
   */
  type: setStringProp<dkInputType>('text', (val: dkInputType): boolean => {
    return DK_INPUT_TYPE.includes(val)
  }),
  /**
   * 输入框尺寸
   * @default small
   * @param { string } type [large] 大
   * @param { string } type [medium] 中
   * @param { string } type [small] 小
   * @param { string } type [mini] 迷你
   * @returns { string } 返回一个字符串 默认值为 small
   */
  size: setStringProp<dkPlusSize>(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  /** 输入框禁用 */
  disabled: setBooleanProps(),
  /** 是否显示清空 */
  clearable: setBooleanProps(),
  /** 是否只读 */
  readonly: setBooleanProps(),
  /** 提示信息 */
  placeholder: setStringProp(),
  /** 是否显示长度限制 */
  showLengthLimit: setBooleanProps(),
  /** 最大长度 */
  maxlength: setStringProp(),
  /** 最小长度 */
  minlength: setStringProp(),
  /** 是否显示字符限制 */
  showWordLimit: setBooleanProps(),
  /** 前缀图标 */
  prefixIcon: setBooleanProps() || setStringProp(),
  /** 后缀图标 */
  suffixIcon: setBooleanProps() || setStringProp(),
  /** 行数 */
  rows: setStringProp() || setNumberProps(),
  autosize: setBooleanProps() || setObjectProps()
} as const
export type DkInputProps = ExtractPropTypes<typeof dkInputProps>
