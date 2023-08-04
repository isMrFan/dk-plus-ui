<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxComp',
    setup() {
      const handleChange = (value: boolean): void => {
        value
      }
      return {
        handleChange,
        isIndeterMinate: true
      }
    }
  })
</script>
<template>
  <div class="checkbox">
    <dk-checkbox @change="handleChange">常规使用</dk-checkbox>
    <dk-checkbox :indeterminate="isIndeterMinate" @change="handleChange">中间状态</dk-checkbox>
    <dk-checkbox disabled @change="handleChange">禁用状态</dk-checkbox>
  </div>
</template>

<style lang="scss" scoped></style>
