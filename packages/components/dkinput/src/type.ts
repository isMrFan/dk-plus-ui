import type { dkInputType } from '../../_interface';
export interface UseInputProps {
  value: string | number
  type: string
  size: string
  disabled: boolean
  clearable: boolean
  readonly: boolean
  placeholder: string
  maxlength: number | string
  minlength: number | string
  showWordLimit: boolean
  prefixIcon: string
  suffixIcon: string
  rows: number | string
  autosize: boolean
  autocomplete: string
}

export interface UseEmitType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: (event: string, ...args: any[]) => void
}

export interface propDataModel {
  /** 前置文本 */
  prependText: string
  /** 后置文本 */
  appendText: string
  /** 占位符 */
  placeholder: string
  /** 是否显示清除按钮 */
  clearable: boolean
  /** 是否显示密码 */
  showPassword: boolean
  /** 前置图标 */
  prependIcon: string
  /** 后置图标 */
  appendIcon: string
  /** 是否禁用 */
  disabledProp: boolean
  /** 前缀图标 */
  prefixIcon: string
  /** 输入类型 */
  inputType: dkInputType
  /** 后缀图标 */
  suffixIcon: string
  maxlengthProp: number | string
  minlengthProp: number | string
  autosizeProp: boolean
  rowsProp: number | string
  readonlyProp: boolean
  /** 是否显示字符统计 - 只对 text textarea生效 */
  showLengthProp: boolean
}

export interface dataType {
  /** 是否有前缀内容 */
  isPrepend: boolean
  /** 是否有后缀文本 */
  isAppendTextLen: boolean
  /** 是否有前缀 */
  isPrefix: boolean
  /** 是否显示清除按钮 */
  isClear: boolean
  /** 输入类型 */
  inputType: dkInputType
  /** 输入方式 */
  inputmode: string
  /** 是否有前缀图标 */
  isPrefixIcon: boolean
  /** 是否有后缀 */
  isSuffix: boolean
  /** 是否显示后缀图标 */
  isSuffixIcon: boolean
  /** 是否显示密码 */
  isShowPassword: boolean
  /** 是否有前缀图标 */
  isPrependIcon: boolean
  /** 是否有后缀图标 */
  isAppendIcon: boolean
  /** 是否有后缀内容 */
  isAppend: boolean
  /** 是否显示长度限制 */
  isLength: boolean
  /** 行 */
  rows: number | string
  /** 是否显示字符统计 */
  showLength: boolean
}

export interface pendType {
  /** 是否有前缀文本 */
  isPrependText: boolean
  /** 是否有后缀文本 */
  isAppendText: boolean
}
