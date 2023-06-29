import { computed, reactive, toRaw, useSlots } from 'vue'
import type { CSSProperties, ComputedRef, Slots } from 'vue'
import { getColor, setSize, getStyleList } from '..'
import type { DkInputProps } from './../../dkinput/src/props'
import { DK_INPUT_TYPE } from '../../_tokens'
import type { dkInputType, ClassListName } from '../../_interface'

/**
 * @name getInputGlobalType
 * @Time 2023年05月05日
 * @param { dkInputType | null | undefined } [type] 组件的类型
 * @returns getInputGlobalType 所需要的 props 参数类型接口
 */

export interface getInputGlobalType {
  type?: dkInputType | null
}

export interface getInputType {
  getInputType: (value?: dkInputType) => ComputedRef<dkInputType>
}

/**
 * @name getInput
 * @Time 2023年05月05日
 * @function getInputType 获取input组件的类型
 * @returns input组件hooks
 */
export const getInputGlobal = (props?: getInputGlobalType): getInputType => {
  /**
   * @name getInputType
   * @returns 获取input组件的类型
   */
  const getInputType = (
    value: string | dkInputType = 'text'
  ): ComputedRef<dkInputType> => {
    return computed((): dkInputType => {
      if (!props) {
        return value as dkInputType
      }
      if (props.type && !DK_INPUT_TYPE.includes(props.type as dkInputType)) {
        return value as dkInputType
      }
      return (props.type || value) as dkInputType
    })
  }
  return {
    getInputType
  }
}

export interface iSGetInputType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
  wrapperClassList: ComputedRef<ClassListName>
  wrapperStyleList: ComputedRef<CSSProperties>
  innerClassList: ComputedRef<ClassListName>
  clearableClassList: ComputedRef<ClassListName>
  pendStyleList: ComputedRef<CSSProperties>
}

/**
 * @name getInput
 * @param props
 * @description 获取input组件的类名和样式
 * @returns
 */
export const getInput = (props: DkInputProps): iSGetInputType => {
  // const { namespace, commonSeparator, elementSeparator, modifierSeparator } =
  //   getSassConfig()

  /**
   * @name defaultClassList
   * @description 期望转换的类名
   */
  let defaultClassList = ['type', 'size']

  /**
   * @name cloneProps
   * @description 创建一个新的props对象 用于修改props
   */
  const cloneProps = { ...toRaw(props) }

  const slot: Slots = useSlots()

  const prepend = props.prependText || props.prependIcon || slot.prepend
  const append = props.appendText || props.appendIcon || slot.append

  if (append && prepend) {
    cloneProps.appendText = 'wrapper-pend_text'
    cloneProps.prependText = ''
  } else {
    if (append) {
      cloneProps.appendText = 'wrapper-append_text'
    }
    if (prepend) {
      cloneProps.prependText = 'wrapper-prepend_text'
    }
  }

  /**
   * @name params
   * @description 组件传来的props和准备特殊类名合并的处理
   */
  const params = reactive({
    ...cloneProps
  })

  /**
   * @name isDisabled
   * @description 是否禁用
   */
  const isDisabled = computed((): boolean => {
    return cloneProps.disabled
  })
  if (isDisabled.value) {
    defaultClassList = [...defaultClassList, 'disabled']
  }

  const { classes } = getStyleList(params, 'input')

  const classList = classes([...defaultClassList], 'dk-input')

  const styleList = computed((): CSSProperties => {
    const { width, height, fontSize, borderRadius, textColor, iconSize, align } = cloneProps

    const defaultStyle = {
      '--input-width': width ? setSize(width) : null,
      '--input-height': height ? setSize(height) : null,
      '--input-font-size': fontSize ? setSize(fontSize) : null,
      '--input-border-radius': borderRadius ? setSize(borderRadius) : null,
      '--input-text-color': textColor ? getColor(textColor).getDeepen(0) : null,
      '--input-icon-size': iconSize ? setSize(iconSize) : null,
      '--input-align': align || 'left'
    } as CSSProperties

    return defaultStyle
  })

  const wrapperStyleList = computed((): CSSProperties => {
    const { borderColor, focusBorderColor } = cloneProps
    const defaultStyle = {
      '--input-border': borderColor ? getColor(borderColor).getDeepen(0) : null,
      '--input-hover-border': borderColor ? getColor(borderColor).getDeepen(0.4) : null,
      '--input-focus-border': focusBorderColor
        ? getColor(focusBorderColor).getDeepen(0)
        : null
    } as CSSProperties
    return defaultStyle
  })

  /**
   * @name defaultWrapperClassList
   * @description 期望被转换的wrapper类名
   */
  const defaultWrapperClassList = ['appendText', 'prependText', 'readonly']
  const wrapperClassList = classes([...defaultWrapperClassList], 'dk-input-wrapper')

  /**
   * @name defaultInnerClassList
   * @description 期望被转换的inner类名
   */
  const innerClasses = getStyleList(params, 'input').classes
  const defaultInnerClassList = []
  const innerClassList = innerClasses([...defaultInnerClassList], 'dk-input_inner')

  /**
   * @name defaultClearableStyleList
   * @description 期望被转换的clearable类名
   */
  const defaultClearableStyleList = ['clearable']
  const clearableClass = getStyleList(params, 'input').classes
  const clearableClassList = clearableClass([...defaultClearableStyleList], 'dk-input')

  const pendStyleList = computed((): CSSProperties => {
    const { appendBackground, appendColor } = cloneProps
    const defaultStyle = {
      '--pend-background': appendBackground
        ? getColor(appendBackground).getDeepen(0)
        : null,
      '--pend-hover-background': appendBackground
        ? getColor(appendBackground).getDeepen(0.4)
        : null,
      '--pend-color': appendColor ? getColor(appendColor).getDeepen(0) : null
    } as CSSProperties
    return defaultStyle
  })

  return {
    classList,
    styleList,
    wrapperClassList,
    wrapperStyleList,
    innerClassList,
    clearableClassList,
    pendStyleList
  }
}

/**
 * @name getBooleanAnd 获取布尔值 与
 * @param {boolean[]} target
 * @returns {boolean}
 */
export const getBooleanAnd = (target: boolean[]): boolean => {
  if (target.length == 0) return false
  const result = target.find((item) => !item)
  return result === undefined
}

/**
 * @name getBooleanOr 获取或
 * @param {boolean[]} target
 * @returns {boolean}
 */
export const getBooleanOr = (target: boolean[]): boolean => {
  if (target.length == 0) return false
  const result = target.find((item) => item)
  return result !== undefined
}

/**
 * @name getNull 获取字符串、数组长度
 * @param {string | array} target
 * @returns {boolean}
 */
export const getNull = (target: string | [] | number): boolean => {
  if (!target) return false
  if (Array.isArray(target)) {
    if (target.length === 0) return false
  } else {
    target = target.toString().trim()
    if (typeof target === 'string') {
      if (target.length === 0) return false
    }
  }
  return true
}
