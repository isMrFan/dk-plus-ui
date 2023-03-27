import { ExtractPropTypes } from 'vue'
export const DKshadowProps = {
  type: {
    type: String
  },
  shadowClass: {
    type: String
  },
  hoverType: {
    type: Boolean
  },
  hoverClass: {
    type: String
  }
}
export type dkshadowProps = ExtractPropTypes<typeof DKshadowProps>
