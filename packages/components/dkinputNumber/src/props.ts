import type { ExtractPropTypes } from 'vue'
import { setNumberProps, setStringProp } from '../../_utils'
import type { dkPlusSize } from '../../_interface'
import { DK_SIZE } from '../../_tokens'

export const dkInputNumberProps = {
  /**
   * @name size
   * @description size of dk-input-number
   * @type string
   * @param { string } type [large]
   * @param { string } type [medium]
   * @param { string } type [small]
   * @param { string } type [mini]
   * @default small
   */
  size: setStringProp<dkPlusSize>('small', (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  /**
   * @name modelValue
   * @description modelValue of dk-input-number
   * @type string or number
   * @default undefined
   */
  modelValue: setNumberProps(),
  /**
   * @name step
   * @description step value when click button
   * @type number
   * @default 1
   */
  step: setNumberProps(1),
  /**
   * @name min
   * @description min value
   * @type number
   * @default -Infinity
   */
  min: setNumberProps(-Infinity),
  /**
   * @name max
   * @description max value
   * @type number
   * @default Infinity
   */
  max: setNumberProps(Infinity)
}

export type DkInputNumberProps = ExtractPropTypes<typeof dkInputNumberProps>
