<script lang="ts">
  /**
   * @name DkContainer
   * @author fanKai16
   * @Time 2023/06/12
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkContainer',
    setup() {
      const state = reactive({
        name: 'DkContainer'
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>
<template><div>asdas</div></template>
