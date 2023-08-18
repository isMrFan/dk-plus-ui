import type { ComponentOptions, Slots } from 'vue'

interface CheckBoxGroupReturns {
  getSlot: Function
  refresh: Function
}

type slotListType = ComponentOptions[]

/**
 * @name getCheckboxGroup
 * @description Gets the checkboxGroup slot contents
 */
export const getCheckboxGroup = (): CheckBoxGroupReturns => {
  /**
   * @name refresh
   * @description refresh checkboxGroup
   * @param props CheckboxGroupPropsType
   * @returns slotList
   */
  const refresh = (slots: Slots): slotListType => {
    const list = getSlot(slots)
    return list
  }

  /**
   * @name getSlot
   * @description Gets the checkboxGroup slot contents
   * @param slots CheckboxGroup slots
   * @returns slotList
   */
  const getSlot = (slots: Slots): slotListType => {
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
        domList.push(data.props)
      }
    }

    /**
     * @name targetMethod
     * @description slot type method
     */
    const targetMethod: Record<string, Function> = {
      symbol: handleSymbol,
      object: handleObject,
      string: (data: ComponentOptions): void => {
        console.warn(
          `[ReferenceError] The ${data.type} label is not supported, please use DkCheckbox.`
        )
      },
      default: (data: ComponentOptions): void => {
        console.warn(
          `[ReferenceError] The ${data.type} label is not supported, please use DkCheckbox.`
        )
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
      const defaultMethod = targetMethod['default']

      while (i < len) {
        const item = slot[i]
        const slotType: string = typeof item.type
        const method = targetMethod[slotType] || defaultMethod
        method(item)
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
        loop(slot)
      }

      return domList
    }
    const list = getCheckboxList(slots)
    return list
  }

  return {
    getSlot,
    refresh
  }
}
