<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板nextTick
   **/
  import { defineComponent, toRefs } from 'vue'
  // import type { ComponentOptions } from 'vue'
  import { dkcollapse } from './props'
  import { getCollapseSlot } from '../../_hooks'
  export default defineComponent({
    name: 'DkCollapse',
    props: dkcollapse,
    setup(Props, { slots }) {
      const { modelValue } = toRefs(Props)
      modelValue

      const { getSlot } = getCollapseSlot(Props)
      const slotList = getSlot(slots)
      console.log(slots)

      console.log('slotList', slotList)

      // /**
      //  * @name slot
      //  * @description 获取当前组件的插槽
      //  */
      // const foldList = [] as ComponentOptions[]
      // const getFoldList = (): void => {
      //   if (slots.default) {
      //     const slot = slots.default() as ComponentOptions[]
      //     for (const index in slot) {
      //       const children = slot[index].children as ComponentOptions[]
      //       for (const twoIndex in children) {
      //         if (typeof children[twoIndex].type !== 'object') {
      //           return
      //         }
      //         if (children[twoIndex].type.name !== 'DkCollapseItem') {
      //           console.warn(
      //             'The sub component of the dk-collapse component should be a dk-collapse-item'
      //           )
      //           return
      //         }
      //         foldList.push(children[twoIndex].props.name)
      //       }
      //     }
      //   }
      // }
      // getFoldList()
      // if (slots.default) {
      //   const slot = slots.default() as ComponentOptions[]
      //   const { data } = slot[0].children[0].type.setup
      //   data
      // }

      const handleChange = (e: Event): void => {
        console.log('handleChange', e.target)
      }

      return {
        handleChange,
        slotList
      }
    }
  })
</script>
<template>
  <div
    class="dk-collapse"
    role="tablist"
    aria-multiselectable="true"
    @change="handleChange"
  >
    <!-- <slot /> -->
    <dk-collapse-item
      v-for="item in slotList"
      :key="item.key"
      v-model="item.modelValue"
      :title="item.title"
      :name="item.name"
    ></dk-collapse-item>
  </div>
</template>
