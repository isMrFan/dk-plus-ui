<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkPopoverComp',
    setup() {
      return {}
    }
  })
</script>
<template>
  <!-- <div class="container">
  </div> -->
  <div class="box" style="margin-left: 200px">
    <h4>基本使用</h4>
    <dk-popover>
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
