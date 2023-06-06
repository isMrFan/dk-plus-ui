import type { Ref, ComputedRef, CSSProperties } from 'vue'
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

export interface UseInputReturn {
  input?: Ref<HTMLInputElement | HTMLTextAreaElement>
  inputSize?: ComputedRef<CSSProperties>
  inputDisabled?: ComputedRef<boolean>
  inputReadonly?: ComputedRef<boolean>
  inputMaxLength?: ComputedRef<number>
  inputMinLength?: ComputedRef<number>
  inputPlaceholder?: ComputedRef<string>
  inputAutocomplete?: ComputedRef<string>
  inputType?: ComputedRef<string>
  inputRows?: ComputedRef<number>
  inputStyle?: ComputedRef<CSSProperties>
  inputClass?: ComputedRef<string[]>
  inputAttrs?: ComputedRef<Record<string, string | number | boolean>>
  inputEvents?: ComputedRef<Record<string, (e: Event) => void>>
  inputListeners?: ComputedRef<Record<string, (e: Event) => void>>
  handleInput?: (e: Event) => void
  handleChange?: (e: Event) => void
  handleFocus?: (e: Event) => void
  handleBlur?: (e: Event) => void
  handleCompositionStart?: (e: Event) => void
  handleCompositionUpdate?: (e: Event) => void
  handleCompositionEnd?: (e: Event) => void
  handleClear?: (e: Event) => void
  focus?: () => void
  blur?: () => void
  select?: () => void
  setNativeInputValue?: (value: string) => void
  resizeTextarea?: () => void
  showClear?: ComputedRef<boolean>
  showPwdVisible?: ComputedRef<boolean>
  showWordLimit?: ComputedRef<boolean>
  isWordLimitVisible?: ComputedRef<boolean>
  textLength?: ComputedRef<number>
  textCount?: ComputedRef<string>
  handlePasswordVisible?: (e: Event) => void
  passwordVisible?: Ref<boolean>
  inputExceed?: ComputedRef<boolean>
  inputExceedText?: ComputedRef<string>
  inputExceedClass?: ComputedRef<string[]>
  inputExceedStyle?: ComputedRef<CSSProperties>
  inputExceedAttrs?: ComputedRef<Record<string, string | number | boolean>>
  inputExceedEvents?: ComputedRef<Record<string, (e: Event) => void>>
  inputExceedListeners?: ComputedRef<Record<string, (e: Event) => void>>
  handleInputExceedClick?: (e: Event) => void
  handleInputExceedMouseenter?: (e: Event) => void
  handleInputExceedMouseleave?: (e: Event) => void
  handleInputExceedFocus?: (e: Event) => void
  handleInputExceedBlur?: (e: Event) => void
  handleInputExceedKeydown?: (e: Event) => void
  handleInputExceedKeyup?: (e: Event) => void
  handleInputExceedKeypress?: (e: Event) => void
  handleInputExceedTouchstart?: (e: Event) => void
  handleInputExceedTouchmove?: (e: Event) => void
  handleInputExceedTouchend?: (e: Event) => void
  handleInputExceedTouchcancel?: (e: Event) => void
  handleInputExceedMousedown?: (e: Event) => void
  handleInputExceedMouseup?: (e: Event) => void
  handleInputExceedMousemove?: (e: Event) => void
  handleInputExceedMouseout?: (e: Event) => void
  handleInputExceedMouseover?: (e: Event) => void
  handleInputExceedContextmenu?: (e: Event) => void
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
}

export interface dataType {
  /** 是否有前缀内容 */
  isPrepend: boolean
  /** 是否有后缀文本 */
  isAppendTextLen: boolean
  /** 是否有前缀 */
  isPrefix: boolean
  /** 是否显示清除按钮 */
  isShowClear: boolean
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
  isLength: boolean
  lengthLimit: string
}

export interface pendType {
  /** 是否有前缀文本 */
  isPrependText: boolean
  /** 是否有后缀文本 */
  isAppendText: boolean
}
