<script lang="ts">
  /**
   * @name DKcollapse
   * @author fanKai16
   * @Time 2023/06/30
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DKcollapse',
    setup() {
      const state = reactive({
        name: 'DKcollapse'
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>
<template>
  <div>折叠面板</div>
</template>
