import type { ComponentOptions, Slots } from 'vue'
import type { CheckboxGroupPropsType } from '../../dkcheckbox_group/src/prop.ts'

interface CheckBoxGroupReturns {
  getSlot: Function
}

type slotListType = ComponentOptions[]

/**
 * @name getCheckboxGroup
 * @description Gets the checkboxGroup slot contents
 * @param {object} props CheckboxGroup props
 */
export const getCheckboxGroup = (props: CheckboxGroupPropsType): CheckBoxGroupReturns => {
  console.log(props)
  const domList = [] as ComponentOptions[]
  /**
   * @name handleSymbol
   * @description handle symbol type
   * @param data
   * @returns object
   */
  const handleSymbol = (data: ComponentOptions): void => {
    const list = data.children as ComponentOptions[]
    loop(list)
  }

  /**
   * @name handleObject
   * @description handle object type
   * @param data
   * @returns object
   */
  const handleObject = (data: ComponentOptions): void => {
    const type = data.type
    if (type.name === 'DkCheckbox') {
      domList.push(data)
    }
  }

  /**
   * @name targetMethod
   * @description slot type method
   */
  const targetMethod: Record<string, Function> = {
    symbol: (data: Object): void => {
      handleSymbol(data)
    },
    object: (data: Object): void => {
      handleObject(data)
    },
    string: (data: ComponentOptions): void => {
      console.warn(`The ${data.type} label is not supported, please use DkCheckbox`)
    },
    default: (data: ComponentOptions): void => {
      console.warn(`The ${data.type} label is not supported, please use DkCheckbox`)
    }
  }

  /**
   * @name loop
   * @description loop slot
   * @param slot
   */
  const loop = (slot: ComponentOptions[]): void => {
    const len = slot.length
    let i = 0
    while (i < len) {
      const item = slot[i]
      const slotType: string = typeof item.type
      const hasMethod = Object.hasOwnProperty.call(targetMethod, slotType)
      if (hasMethod) {
        targetMethod[slotType](item)
      } else {
        targetMethod['default'](item)
      }
      i++
    }
  }

  /**
   * @name getCheckboxList
   * @description Gets the checkboxGroup slot contents
   * @param slots
   */
  const getCheckboxList = (slots: Slots): slotListType => {
    if (slots.default) {
      const slot = slots.default() as ComponentOptions[]
      console.log('初始插槽', slot)
      loop(slot)
    }

    return domList
  }

  /**
   * @name getSlot
   * @description Gets the checkboxGroup slot contents
   * @param slots CheckboxGroup slots
   * @returns slotList
   */
  const getSlot = (slots: Slots): slotListType => {
    const list = getCheckboxList(slots)
    return list
  }

  return {
    getSlot
  }
}
