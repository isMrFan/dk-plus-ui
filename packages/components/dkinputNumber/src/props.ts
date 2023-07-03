import type { ExtractPropTypes } from 'vue'
import {
  setBooleanProps,
  setNumberProps,
  setStringProp,
  setStringNumberProps
} from '../../_utils'
import type { dkPlusSize, dkInputNumberPosition } from '../../_interface'
import { DK_SIZE, DK_INPUT_NUMBER_POSITION } from '../../_tokens'

export const dkInputNumberProps = {
  /**
   * @name position
   * @description Position of built-in buttons
   * @type string
   * @param { string } type [right]
   * @param { string } type [left]
   * @default right
  */
  position: setStringProp<dkInputNumberPosition>(null, (val: dkInputNumberPosition) => {
    return DK_INPUT_NUMBER_POSITION.includes(val)
  }),
  /**
   * @name readonly
   * @description Native readonly attribute
   * @type boolean
   * @default false
  */
  readonly: setBooleanProps(false),
  /**
   * @name precision
   * @description Set precision of input value
   * @type number | string
   * @default 0
   */
  precision: setStringNumberProps(0),
  /**
   * @name strict
   * @description strict of dk-input-number, only allow input step value
   * @type boolean
   * @default false
   */
  strict: setBooleanProps(false),
  /**
   * @name disabled
   * @description Disabled of dk-input-number
   * @type boolean
   * @default false
   */
  disabled: setBooleanProps(false),
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
   * @type number ｜ string
   * @default 1
   */
  step: setStringNumberProps(1),
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
