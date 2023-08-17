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

  /**
   * @name handleSymbol
   * @description handle symbol type
   * @param data
   * @returns object
   */
  const handleSymbol = (data: Object): object => {
    console.log('symbol', data)
    return {}
  }

  /**
   * @name targetMethod
   * @description slot type method
   */
  const targetMethod: Record<string, Function> = {
    symbol: (data: Object): object => handleSymbol(data),
    object: (data: Object): void => {
      console.log('object', data)
    },
    string: (data: Object): void => {
      console.log('string', data)
    },
    default: (data: Object): void => {
      console.log('default', data)
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
      console.log(slot)
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
        // if(item.type)
        i++
      }
    }
    return []
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
