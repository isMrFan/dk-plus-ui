import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export const dkScrollBar = {
  /**
   * @name width
   * @type string
   * @description Set width of the scroll bar
   */
  width: setStringProp(),
  /**
   * @name height
   * @type string
   * @description Set height of the scroll bar
   */
  height: setStringProp(),
  /**
   * @name barWidth
   * @type string
   * @default 6px
   * @description Set width of the scroll bar
   */
  barWidth: setStringProp(),
  /**
   * @name thumbRadios
   * @type string
   * @default 4px
   * @description Set radius of the scroll bar thumb
   */
  thumbRadios: setStringProp(),
  /**
   * @name trackColor
   * @type string
   * @default #f1f1f1
   * @description Set color of the scroll bar track
   */
  trackColor: setStringProp(),
  /**
   * @name thumbColor
   * @type string
   * @default transparent
   * @description Set color of the scroll bar thumb
   */
  thumbColor: setStringProp()
}

export type DkScrollBar = ExtractPropTypes<typeof dkScrollBar>
