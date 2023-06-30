<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Number',
  emits: ['update:modelValue'],
  setup() {
    let value = ref<number>(0)
    return {
      value
    }
  }
})
</script>
<template>
  <dk-input size="small"></dk-input>
  <dk-input-number v-model="value" :step="10" :min="0" size="large"></dk-input-number>
  <dk-input-number v-model="value" :step="10" :min="0" size="medium"></dk-input-number>
  <dk-input-number v-model="value" :step="10" :min="0" size="small"></dk-input-number>
  <dk-input-number v-model="value" :step="10" :min="0"></dk-input-number>
  <dk-input-number v-model="value" :step="10" :min="0" size="mini"></dk-input-number>
  父组件{{ value }}
</template>
