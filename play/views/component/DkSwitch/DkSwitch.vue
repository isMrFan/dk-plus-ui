<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkSwitchComp',
    setup() {
      const checked = ref(false)
      return {
        checked
      }
    }
  })
</script>
<template>
  <div class="box">
    <h4>基础使用</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" />
    </div>
  </div>
  <div class="box">
    <h4>尺寸</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" size="large" />
      <dk-switch v-model="checked" size="medium" />
      <dk-switch v-model="checked" size="small" />
      <dk-switch v-model="checked" size="mini"></dk-switch>
    </div>
  </div>
  <div class="box">
    <h4>选中颜色</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-color="#359a35" unchecked-color="#d33f3f" />
    </div>
  </div>
  <div class="box">
    <h4>禁用</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" disabled />
    </div>
  </div>
  <div class="box">
    <h4>文案设置</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-text="是" unchecked-text="否" />
    </div>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-text="Y" unchecked-text="N" width="100px" />
      <dk-switch v-model="checked" checked-text="是是是是是是" unchecked-text="否否否否否否否否否否否否否否否否否否" width="100px" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .switch-list {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
</style>
