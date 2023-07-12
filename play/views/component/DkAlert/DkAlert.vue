<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Alert',
    setup() {
      const handleClose = (): void => {
        console.log('自定义事件')

        // eslint-disable-next-line no-alert
        alert('自定义关闭!')
      }
      return { handleClose }
    }
  })
</script>
<template>
  <div class="alert">
    <h2>Dk-Alert 组件</h2>

    <h4>基本展示</h4>
    <dk-alert>success alert</dk-alert>
    <dk-alert type="info">info alert</dk-alert>
    <dk-alert type="warning">warning alert</dk-alert>
    <dk-alert type="error">error alert</dk-alert>

    <h4>前置图标</h4>
    <dk-alert :icon="'IconShanchu1'">dk-plus-alert</dk-alert>
    <h4>前置图标+不可关闭</h4>
    <dk-alert :icon="'IconShanchu1'" closable="false">dk-plus-alert </dk-alert>

    <h4>居中显示</h4>
    <dk-alert :icon="'IconShanchu1'" center>dk-plus-alert </dk-alert>
    <h4>自定义关闭</h4>
    <dk-alert :icon="'IconShanchu1'" @close="handleClose">dk-plus-alert </dk-alert>
    <h4>描述文本</h4>
    <dk-alert
      :icon="'IconShanchu1'"
      description="dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description..."
    >
      dk-plus-alert
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
