<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板nextTick
   **/
  import { defineComponent, toRefs, ref, reactive } from 'vue'
  // import type { ComponentOptions } from 'vue'
  import { dkcollapse } from './props'
  import { getCollapseSlot } from '../../_hooks'
  export default defineComponent({
    name: 'DkCollapse',
    props: dkcollapse,
    emits: ['change', 'update:modelValue'],
    setup(props, { slots, emit }) {
      const dkCollapse = ref<Element>()
      dkCollapse.value = document.createElement('div')
      const { modelValue } = toRefs(props)
      modelValue

      const { getSlot, refresh } = getCollapseSlot(props)
      const data = reactive({
        slotList: getSlot(slots)
      })
      
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

      const handleChange = (e: string): void => {
        data.slotList = refresh(data.slotList, e)
        console.log(data.slotList);
        emit('update:modelValue', e)
      }

      return {
        handleChange,
        ...toRefs(data),
        dkCollapse
      }
    }
  })
</script>
<template>
  <div
    ref="dkCollapse"
    class="dk-collapse"
    role="tablist"
    aria-multiselectable="true"
  >
    <dk-collapse-item
      v-for="item in slotList"
      :key="item.key"
      v-model="item.modelValue"
      :title="item.title"
      :name="item.name"
      @change="handleChange"
    >
      <!-- TODO: 这里需要兼容一下 兼容数据结构 -->
      <component
        :is="component.type"
        v-for="(component, index) in item.children"
        :key="index"
      >
        <template v-if="typeof component.children === 'object'">
          <component
            :is="childComponent.type"
            v-for="(childComponent, childIndex) in component.children"
            :key="childIndex"
          >
            {{ childComponent.children }}
          </component>
        </template>
        <template v-else>
          {{ component.children }}
        </template>
      </component>
    </dk-collapse-item>
  </div>
</template>
