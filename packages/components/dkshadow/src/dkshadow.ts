import type { ExtractPropTypes } from 'vue'
import { setBooleanProps, setStringProp } from '../../_utils'
export const DKshadowProps = {
  type: setStringProp(),
  shadowClass: setStringProp(),
  hoverType: setBooleanProps(),
  hoverClass: setStringProp(),
  borderColor: setStringProp()
}
export type dkshadowProps = ExtractPropTypes<typeof DKshadowProps>
