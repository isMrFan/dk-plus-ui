import type { ExtractPropTypes } from 'vue'
import { setStringNumberProps } from '../../_utils'

export const dkRowProps = {
  /**
   * @name gutter
   * @description Grid spacing
   * @type { string | number }
   * @default 0
   */
  gutter: setStringNumberProps()
}

export type DkRowPropsType = ExtractPropTypes<typeof dkRowProps>
