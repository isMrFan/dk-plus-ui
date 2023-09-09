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
      <dk-switch v-model="checked" disabled size="large" />
      <dk-switch
        v-model="checked"
        size="medium"
        checked-color="#359a35"
        unchecked-color="#d33f3f"
      />
      <dk-switch v-model="checked" size="small" />
      <dk-switch v-model="checked" size="mini" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    padding: 20px;
    .switch-list {
      display: flex;
      align-items: center;
      .dk-switch {
        margin-right: 20px;
      }
    }
  }
</style>
