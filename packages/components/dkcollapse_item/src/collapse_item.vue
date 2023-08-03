<script lang="ts">
  /**
   * @name dkcollapse_item
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板-父组件
   **/
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkCollapseItem',
    setup(props) {
      const title: string = '测试名字'
      const icon: string = 'IconRightArrow1'
      console.log('props', props)
      return { title, icon }
    }
  })
</script>
<template>
  <div class="dk-collapseItem">
    <div role="tab" class="dk-collapseItem_title">
      <div class="dk-collapseItem_left">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="dk-collapseItem_right">
        <dk-icon :icon="icon ? icon : 'IconRightArrow1'"></dk-icon>
      </div>
    </div>
  </div>
</template>
