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
  showLengthLimit: {
    type: Boolean,
    default: false
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
  nameSpace = 'dk-'
  block = 'input'
  globalName = this.nameSpace + this.block
  state = 'is-'
  /**
   * @description: 生成类名
   * @param name {string} 块名 - 可选
   * @returns {string} dk-input
   */
  b = (name?: string) => (name ? this.nameSpace + name : this.globalName)
  /**
   * @description: 生成块类名
   * @param name {string} 块名
   * @returns {string} dk-input__name
   */
  e = (name: string) => (name ? this.globalName + '__' + name : '')
  /**
   * @description: 生成元素类名
   * @param name {string} 元素名
   * @returns {string} dk-input--name
   * */
  m = (name: string) => (name ? this.globalName + '--' + name : '')

  /**
   *
   * @param is 状态
   * @param name
   * @returns {string} is-name
   */
  is = (name: string) => this.state + name
  // icon
  i = (icon: string, name: string) => (icon ? 'dk-icon-' + name : '')
  /**
   * classList to string[]
   * @import {cLTS} from 'dk-ui'
   * @param {Record<string,boolean>} obj
   * @param {string[]} list
   * */
  cLTS = (obj: Record<string, boolean>, list: string[]): string[] => {
    return Object.entries(obj).reduce<Array<string | boolean>>((pre, cur) => {
      if (cur[1]) {
        pre.push(cur[0])
      }
      return pre
    }, list) as string[]
  }
}
export type dkinput = ExtractPropTypes<typeof DKinput>
