import { ExtractPropTypes, PropType } from 'vue'
export const DKinput = {
  showPassword: {
    type: Boolean,
    default: false
  },
  append: {
    type: String,
    default: ''
  },
  prepend: {
    type: String,
    default: ''
  },
  suffixClick: {
    type: Function as PropType<(e: Event) => void>,
    default: () => null
  },
  prefixClick: {
    type: Function as PropType<(e: Event) => void>,
    default: () => null
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  type: {
    type: String,
    default: 'text'
  },
  size: {
    type: String,
    default: 'small'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxlength: {
    type: [Number, String],
    default: 999999
  },
  minlength: {
    type: [Number, String],
    default: 0
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  rows: {
    type: [Number, String],
    default: 2
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  autoClearSpace: {
    type: Boolean,
    default: true
  },
  name: {
    type: String,
    default: ''
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
}
export class haInputClass {
  // name: string
  // constructor(name: string) {
  //   this.name = name
  // }
  globalName = 'dk-'
  // className
  n = className =>
    className !== undefined ? this.globalName +'input' + (className ? '__' : '') + className : ''
  // is
  is = (is, name) => (is ? 'is-' + name : '')
  // icon
  i = (icon, name) => (icon ? this.globalName + 'icon-' + name : '')
}
export type dkinput = ExtractPropTypes<typeof DKinput>
