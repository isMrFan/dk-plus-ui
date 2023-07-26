import type { ExtractPropTypes } from 'vue'
import { setStringNumberProps } from '../../_utils'

export const dkColProps = {
  /**
   * @name span
   * @description Number of columns occupied by the grid
   * @type number | string
   */
  span: setStringNumberProps()
}

export type DkColPropsType = ExtractPropTypes<typeof dkColProps>
