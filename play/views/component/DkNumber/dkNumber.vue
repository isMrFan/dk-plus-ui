<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Number',
  emits: ['update:modelValue'],
  setup() {
    let value = ref<number>(5)
    return {
      value
    }
  }
})
</script>
<template>
  <div class="number">
    <h4>禁用</h4>
    <dk-input-number v-model="value" disabled></dk-input-number>
    <h4>最大、最小值</h4>
    <dk-input-number v-model="value" :min="0" :max="3"></dk-input-number>
    <h4>严格模式</h4>
    <dk-input-number v-model="value" :step="2" strict></dk-input-number>
    <h4>步长</h4>
    <dk-input-number v-model="value" :step="2"></dk-input-number>
    <h4>尺寸</h4>
    <dk-input-number v-model="value" size="large"></dk-input-number>
    <dk-input-number v-model="value" size="medium"></dk-input-number>
    <dk-input-number v-model="value" size="small"></dk-input-number>
    <dk-input-number v-model="value" size="mini"></dk-input-number>
    父组件{{ value }}
  </div>
</template>

<style lang="scss">
  .number{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
