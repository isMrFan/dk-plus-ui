import { setBooleanProps, setStringProp } from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { dkPlusSize } from '../../_interface'

export const DkProps = {
  /**
   * @default vertical
   * @returns { boolean } 默认值为 false 是否竖直排列
   */
  vertical: setBooleanProps(),
  /**
   * @default nowrap
   * @returns { boolean } 默认值为 false 是否禁止换行
   */
  nowrap: setBooleanProps(),
  /**
   * @default spacingType
   * @returns  默认值为 null 间距尺寸
   */
  spacingType: setStringProp<dkPlusSize>(null, (val: dkPlusSize): boolean => {
    return DK_SIZE.includes(val)
  }),
  /**
   * @default portRait
   * @returns  自定义纵向间距
   */
  portRait: setStringProp(),
  /**
   * @default Landscape
   * @returns  自定义横向间距
   */
  landScape: setStringProp()
} as const

export type SpaceProps = ExtractPropTypes<typeof DkProps>
