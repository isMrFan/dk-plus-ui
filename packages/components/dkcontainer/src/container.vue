<script lang="ts">
  /**
   * @name DkContainer
   * @author fanKai16
   * @Time 2023/06/12
   * @description 面布局
   **/
  import { defineComponent } from 'vue'
  import { DkContainerProps } from './props'
  import { useSlots, computed } from 'vue'
  import type { VNode, Component, Slots } from 'vue'
  export default defineComponent({
    name: 'DkContainer',
    props: DkContainerProps,
    setup(props) {
      const slot: Slots = useSlots()
      const isVertical = computed((): boolean => {
        if (props.direction === 'vertical') {
          return true
        } else if (props.direction === 'horizontal') {
          return false
        }
        if (slot && slot.default) {
          /** 获取到插槽内容 */
          const vNodes: VNode[] = slot.default()
          return vNodes.some((node: VNode): boolean => {
            /** 获取组件的 name */
            const name: string | undefined = (node.type as Component).name
            return name === 'DkHeader' || name === 'DkFooter'
          })
        }
        return false
      })
      return {
        isVertical
      }
    }
  })
</script>
<template>
  <section
    :class="[
      'dk-container',
      {
        'dk-container_vertical': isVertical
      }
    ]"
  >
    <slot />
  </section>
</template>
