<script lang="ts">
/**
 * @name dk-input-number
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 
 * @example
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DkInputNumber',
  emits: ['update:modelValue'],
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="dk-input-number">
    <dk-button size="mini">-</dk-button>
    <input type="text" />
    <dk-button size="mini">+</dk-button>
  </div>
</template>
