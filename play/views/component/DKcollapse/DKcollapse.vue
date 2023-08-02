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
        NackName: 'DKcollapse',
        value: 'value'
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>
<template>
  <div>
    折叠面板
    <dk-collapse :model-name="NackName">
      <dk-collapse-item> </dk-collapse-item>
    </dk-collapse>
  </div>
</template>
