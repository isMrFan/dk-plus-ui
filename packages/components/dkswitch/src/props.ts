import { setBooleanProps, setStringProp } from '../../_utils'
import { type ExtractPropTypes } from 'vue'
import type { dkPlusSize } from '../../_interface'
import { DK_SIZE } from '../../_tokens'

export const switchProps = {
  /**
   * @name modelValue
   * @type boolean
   * @default false
   * @description Selected status of the switch
   */
  modelValue: setBooleanProps(false),
  /**
   * @name disabled
   * @type boolean
   * @default false
   * @description Whether the switch is disabled
   */
  disabled: setBooleanProps(false),
  /**
   * @name size
   * @param { string }  [large]
   * @param { string }  [medium]
   * @param { string }  [small]
   * @param { string }  [mini]
   */
  size: setStringProp<dkPlusSize>(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  })
}

export type SwitchPropsType = ExtractPropTypes<typeof switchProps>
