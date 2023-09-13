import { setBooleanProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const popoverProps = {
  /**
   * @name width
   * @type string
   * @default 100%
   * @description
   */
  width: setStringProp(),
  /**
   * @name visible
   * @description Whether to display popover
   * @type { boolean }
   * @default false
   */
  visible: setBooleanProps(false),
  /**
   * @name modelValue
   * @description Whether to display popover
   * @type { boolean }
   * @default false
   */
  modelValue: setBooleanProps(false),
  /**
   * @name trigger
   * @description Trigger method
   * @type {string} [hover, click]
   */
  trigger: setStringProp('hover')
}

export type PopoverPropsType = ExtractPropTypes<typeof popoverProps>
