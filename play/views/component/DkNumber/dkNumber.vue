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
  <dk-input-number v-model="value"></dk-input-number>
</template>
