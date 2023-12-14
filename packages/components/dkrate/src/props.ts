import { setBooleanProps, setStringNumberProps } from '../../_utils'

export const dkRateProps = {
  /**
   * @name modelValue
   * @type boolean
   * @default false
   */
  modelValue: setBooleanProps(),
  /**
   * @name numberValue
   * @description Number of stars
   * @type number | string
   */
  numberValue: setStringNumberProps(5)
}
