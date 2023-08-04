import { setBooleanProps } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
export const dkCheckboxProps = {
  modelValue: setBooleanProps(),
  indeterminate: setBooleanProps(),
  disabled: setBooleanProps()
}

export type DkCheckboxType = ExtractPropTypes<typeof dkCheckboxProps>
