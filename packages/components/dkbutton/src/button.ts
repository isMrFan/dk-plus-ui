import { ExtractPropTypes } from "vue"
export const DKbutton = {
  type: {
    type: String
  },
  disable: {
    type: Boolean
  },
  round: {
    type: String
  },
  circle: {
    type: String
  },
  icon: {
    type: String
  },
  size: {
    type: String
  }
}
export type dkbutton = ExtractPropTypes<typeof DKbutton>