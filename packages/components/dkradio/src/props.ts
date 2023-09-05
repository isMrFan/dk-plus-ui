import type { ExtractPropTypes } from 'vue'
import { setBooleanProps, setStringProp } from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { dkPlusSize } from '../../_interface'
export const dkRadioProps = {
  /**
   * @name modelValue
   * @param { boolean } modelValue  [false]
   */
  modelValue: setBooleanProps(false),
  /**
   * @name disabled
   * @param { boolean } disabled  [false]
   * @returns 是否禁用
   * @description 是否禁用
   * @default false
   * @type boolean
   */
  disabled: setBooleanProps(false),
  /**
   * @name name
   * @param { string } name Value when selected
   */
  name: String,
  /**
   * @name label
   * @param { string } label Copy of Radio
   */
  label: String,
  /**
   * @name size
   * @param { string }  [large]
   * @param { string }  [medium]
   * @param { string }  [small]
   * @param { string }  [mini]
   */
  size: setStringProp<dkPlusSize>(null, (value: dkPlusSize): boolean => {
    return DK_SIZE.includes(value)
  })
  // checkedColor: String,
  // uncheckedColor: String
}

export type DkRadioType = ExtractPropTypes<typeof dkRadioProps>
