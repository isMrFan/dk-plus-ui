<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Number',
  emits: ['update:modelValue'],
  setup() {
    return {}
  }
})
</script>
<template>
  <dk-input-number></dk-input-number>
</template>
