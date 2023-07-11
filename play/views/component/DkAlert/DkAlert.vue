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

    <p>默认</p>
    <dk-alert>123</dk-alert>

    <p>前置图标</p>
    <dk-alert :icon="'IconShanchu1'">123</dk-alert>

    <dk-alert :icon="'IconShanchu1'" :close-icon="'IconShanchu1'" closable>
      <p>前置图标+关闭图标</p>
    </dk-alert>

    <dk-alert :icon="'IconShanchu1'" :closable="false">
      <p>前置图标+不可关闭</p>
    </dk-alert>
  </div>
</template>
<style lang="scss" scoped>
  .alert {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
