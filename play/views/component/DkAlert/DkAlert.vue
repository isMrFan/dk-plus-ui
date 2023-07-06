<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Alert',
    setup() {
      return {}
    }
  })
</script>
<template>
  <div class="alert">
    <h2>Dk-Alert 组件</h2>
    <p>基础用法</p>
    <dk-alert></dk-alert>
  </div>
</template>
<style lang="scss" scoped>
  .alert {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
