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
    default: ''
  },
  minlength: {
    type: [Number, String],
    default: ''
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
  n = (className: string) =>
    className !== undefined
      ? this.globalName + 'input' + (className ? '__' : '') + className
      : ''
  // is
  is = (is: string, name: string) => (is ? 'is-' + name : '')
  // icon
  i = (icon: string, name: string) => (icon ? this.globalName + 'icon-' + name : '')
  /** 
   * classList to string[]
   * @import {cLTS} from 'dk-ui'
   * @param {Record<string,boolean>} obj 
   * @param {string[]} list
   * */
  cLTS = (obj:Record<string,boolean>, list:string[]): string[] => {
    return Object.entries(obj).reduce<Array<string | boolean>>((pre, cur) => {
      if (cur[1]) {
        pre.push(cur[0])
      }
      return pre
    }, list) as string[]
  }
}
export type dkinput = ExtractPropTypes<typeof DKinput>
