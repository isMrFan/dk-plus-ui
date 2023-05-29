import type { ExtractPropTypes } from 'vue'
import { setObjectProps,setStringNumberProps,setStringProp } from '../../_utils'
import type { DkIcon } from '../../_interface'
export const iconProps = {
  icon:setObjectProps<DkIcon>(),
  size: setStringNumberProps(),
  color:setStringProp()
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>
