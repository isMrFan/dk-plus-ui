import type { ExtractPropTypes } from 'vue'
import { setArrayProps } from '../../_utils'

export const checkboxGroup = {
  modelValue: setArrayProps()
}

export type CheckboxGroupPropsType = ExtractPropTypes<typeof checkboxGroup>
