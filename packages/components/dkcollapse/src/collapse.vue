<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板nextTick
   **/
  import { defineComponent, toRefs } from 'vue'
  import type { ComponentOptions } from 'vue'
  import { dkcollapse } from './props'
  export default defineComponent({
    name: 'DkCollapse',
    props: dkcollapse,
    setup(Props, { slots }) {
      const { modelValue } = toRefs(Props)
      console.log('modelValue', modelValue.value)
      /**
       * @name slot
       * @description 获取当前组件的插槽
       */
      const foldList = [] as ComponentOptions[]
      const getFoldList = (): void => {
        if (slots.default) {
          const slot = slots.default() as ComponentOptions[]
          for (const index in slot) {
            const children = slot[index].children as ComponentOptions[]
            for (const twoIndex in children) {
              if (typeof children[twoIndex].type !== 'object') {
                return
              }
              if (children[twoIndex].type.name !== 'DkCollapseItem') {
                console.warn(
                  'The sub component of the dk-collapse component should be a dk-collapse-item'
                )
                return
              }
              foldList.push(children[twoIndex].props.name)
            }
          }
        }
      }
      getFoldList()
      console.log('foldList', foldList)
      if (slots.default) {
        const slot = slots.default() as ComponentOptions[]
        console.log('slot', slot)
      }

      return {}
    }
  })
</script>
<template>
  <div class="dk-collapse" role="tablist" aria-multiselectable="true">
    <slot />
  </div>
</template>
