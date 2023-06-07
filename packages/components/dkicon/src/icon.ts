import type { ExtractPropTypes } from 'vue'
import { setStringNumberProps, setStringProp } from '../../_utils'
export const iconProps = {
  icon: setStringProp(),
  size: setStringNumberProps(),
  color: setStringProp()
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>
