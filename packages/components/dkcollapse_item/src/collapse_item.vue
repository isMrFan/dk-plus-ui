<script lang="ts">
/**
 * @name dkcollapse_item
 * @author fanKai16
 * @Time 2023/08/02
 * @description 折叠面板-父组件
 **/
import { defineComponent, toRefs, computed } from 'vue'
import { dkCollapseItemProps } from './props'
export default defineComponent({
  name: 'DkCollapseItem',
  props: dkCollapseItemProps,
  setup(props) {
    const { name, title, icon, Active } = toRefs(props)
    let isDisabled = computed((): boolean => {
      return Active.value
    })
    console.log('isDisabled', isDisabled)
    return {
      title,
      icon,
      name,
      isDisabled
    }
  }
})
</script>
<template>
  <div class="dk-collapseItem">
    <div role="tab" class="dk-collapseItem_title" :class="{ 'dk-collapseItem_title_active': isDisabled }">
      <div class="dk-collapseItem_left">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="dk-collapseItem_right">
        <dk-icon :icon="icon ? icon : 'IconRightArrow1'"></dk-icon>
      </div>
    </div>
    <dk-transition :is-active="isDisabled">
      <div>
        <slot></slot>
      </div>
    </dk-transition>
  </div>
</template>
