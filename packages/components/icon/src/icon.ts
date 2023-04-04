import { ExtractPropTypes } from 'vue'
import type { PropType } from 'vue'
export const iconProps = {
  size: {
    type: Number as PropType<Number>
  },
  color: {
    type: String as PropType<String>
  }
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>
