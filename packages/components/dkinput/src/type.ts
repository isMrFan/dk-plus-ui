import { Ref, ComputedRef, CSSProperties } from 'vue'
export type UseInputProps = {
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
  autosize: boolean | object
  autocomplete: string
}

export type UseEmitType = {
  emit: (event: string, ...args: any[]) => void
}

export type UseInputReturn = {
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