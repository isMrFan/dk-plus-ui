<script lang="ts">
  /**
   * @name DKcollapseS
   * @author fanKai16
   * @Time 2023/06/30
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DKcollapseS',
    setup() {
      const state = reactive({
        NackName: ['1', '2', '3']
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>
<template>
  <div>
    <div style="margin-bottom: 10px">折叠面板 {{ NackName }}</div>
    <dk-collapse :model-name="NackName">
      <dk-collapse-item
        v-for="(item, ind) in 10"
        :key="ind"
        :title="'这是名字' + ind"
        :name="ind"
      >
      </dk-collapse-item>
    </dk-collapse>
  </div>
</template>
