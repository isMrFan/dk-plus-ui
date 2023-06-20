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
  prependText: string
  appendText: string
  placeholder: string
  /** Show clearable button or not */
  clearable: boolean
  /** Show password or not */
  showPassword: boolean
  prependIcon: string
  appendIcon: string
  /** Disabled or not */
  disabledProp: boolean
  prefixIcon: string
  inputType: dkInputType
  suffixIcon: string
  maxlengthProp: number | string
  minlengthProp: number | string
  /** Is there textarea height adaptive */
  autosizeProp: boolean
  /** Textarea line limit */
  rowsProp: number | string
  readonlyProp: boolean
  /** Show character statistics or not - Only text textarea take effect */
  showLengthProp: boolean
}

export interface dataType {
  /**
   * @description Is there prepend text
   * @type {boolean} [true | false]
   * @default false
   */
  isPrepend: boolean
  /** Is there append text */
  isAppendTextLen: boolean
  /** Is there prefix */
  isPrefix: boolean
  /** Show clear button or not */
  isClear: boolean
  /** Input box type */
  inputType: dkInputType
  inputmode: string
  /** Is there prefix icon */
  isPrefixIcon: boolean
  /** Is there suffix icon */
  isSuffix: boolean
  /** Show suffix icon or not */
  isSuffixIcon: boolean
  /** Show password or not */
  isShowPassword: boolean
  /** Is there prefix icon */
  isPrependIcon: boolean
  /** Is there suffix icon */
  isAppendIcon: boolean
  /** Is there append content */
  isAppend: boolean
  /** Display or not length */
  isLength: boolean
  rows: number | string
  /** Is display character statistics */
  showLength: boolean
}

export interface pendType {
  /** Is there prepend text */
  isPrependText: boolean
  /** Is there append text */
  isAppendText: boolean
}
