import { ExtractPropTypes } from "vue"
export const DKbutton = {
  type: {
    type: String
  },
  disable: {
    type: Boolean
  }
}
export type dkbutton = ExtractPropTypes<typeof DKbutton>