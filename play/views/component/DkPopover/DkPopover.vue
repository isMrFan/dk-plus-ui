<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkPopoverComp',
    setup() {
      const visible = ref(true)
      return {
        visible
      }
    }
  })
</script>
<template>
  <!-- <div class="container">
  </div> -->
  <div class="box" style="margin-left: 200px">
    <h4>基本使用</h4>
    <dk-popover v-model="visible" :visible="visible" trigger="click">
      <template #popup>
        <div>popup</div>
        <p>我是弹出的内容 </p>
      </template>
      <template #default> aaa </template>
    </dk-popover>
  </div>
</template>

<style lang="scss" scoped>
</style>
