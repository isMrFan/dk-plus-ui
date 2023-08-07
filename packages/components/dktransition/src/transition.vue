<script lang="ts">
  /**
   * @name dk-transition
   * @author fanKai16
   * @Time 2023/08/07
   * @description 过渡动画
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkTransition',
    setup() {
      const data = reactive({
        isActive: false,
        with: 0,
        height: 0
      })
      const codeHeight = data.isActive ? `${data.height}px` : '0px'
      return {
        ...toRefs(data),
        codeHeight
      }
    }
  })
</script>
<template>
  <div ref="dkTransition" class="dk-Transition" :style="{ height: codeHeight }">
    <slot></slot>
  </div>
</template>
