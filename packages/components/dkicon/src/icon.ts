import type { ExtractPropTypes } from 'vue'
export const iconProps = {
  icon:{
    type: String
  },
  size: {
    type: Number
  },
  color: {
    type: String
  }
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>
