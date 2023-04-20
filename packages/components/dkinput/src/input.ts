import { ExtractPropTypes, PropType } from 'vue'
export const DKinput = {
  append: {
    type: String
  },
  prepend: {
    type: String
  },
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
