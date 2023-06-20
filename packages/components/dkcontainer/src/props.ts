import { setStringProp } from '../../_utils'
import { DirectionType } from './tokens'
import type { ExtractPropTypes } from 'vue'
import type { ContainerDirection } from './interface'

export const DkContainerProps = {
  /**
   * @name 排列方向
   * @values horizontal | vertical
   * @default null
   */
  direction: setStringProp<ContainerDirection>(
    null,
    (val: ContainerDirection): boolean => {
      return DirectionType.includes(val)
    }
  )
} as const

export type DkContainerPropsType = ExtractPropTypes<typeof DkContainerProps>
