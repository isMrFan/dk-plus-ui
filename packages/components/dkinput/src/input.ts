
import { ExtractPropTypes, PropType } from 'vue'
export const DKinput = {
  suffixClick: {
    type: Function as PropType<(e: Event) => void>
  },
  prefixClick: {
    type: Function as PropType<(e: Event) => void>
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  type: {
    type: String
  },
  size: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  clearable: {
    type: Boolean
  },
  readonly: {
    type: Boolean
  },
  placeholder: {
    type: String
  },
  maxlength: {
    type: [Number, String]
  },
  minlength: {
    type: [Number, String]
  },
  showWordLimit: {
    type: Boolean
  },
  prefixIcon: {
    type: String
  },
  suffixIcon: {
    type: String
  },
  rows: {
    type: [Number, String]
  },
  autosize: {
    type: [Boolean, Object]
  },
  autocomplete: {
    type: String
  },
  autoClearSpace: {
    type: Boolean
  },
  name: {
    type: String
  },
  validateEvent: {
    type: Boolean
  }
}
export type dkinput = ExtractPropTypes<typeof DKinput>
