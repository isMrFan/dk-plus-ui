/**
 * @name get-StyleList
 * @Time 2023年05月04日
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 * @returns getStyleList 用于生成样式名称的hooks简洁代码
 */
import { computed, ref } from 'vue'
import { getProps } from '../..'
import { isBoolean, humpConversion } from '../../../_utils'
import type { ComputedRef } from 'vue'
import type { FilterParams } from '../..'
import type { ClassListName } from '../../../_interface'

export interface UseListReturn {
  classes: (list: FilterParams, className?: string) => ComputedRef<ClassListName>
}

export const getStyleList = <T extends object>(props: T, name: string) => {
  const { filter } = getProps(props)
  const classes = (
    list: FilterParams,
    className?: string
  ): ComputedRef<ClassListName> => {
    return computed((): ClassListName => {
      const classList = ref<ClassListName>([])
      const propList: Record<string, unknown> = filter(list)
      /**
       * @description 如果有className则添加className
       */
      className && classList.value.push(className)
      for (const key in propList) {
        if (propList[key]) {
          /**
           * @name classList
           * @description 利用props的key成样式名称
           */
          classList.value.push(
            `dk-${name}_${isBoolean(propList[key]) ? humpConversion(key) : propList[key]}`
          )
        }
      }
      return classList.value
    })
  }
  return {
    classes
  }
}
