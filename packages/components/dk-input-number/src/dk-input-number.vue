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
    <div class="dk-input-number_reduce">-</div>
    <input type="text" class="dk-input-number_inner" />
    <div class="dk-input-number_add">+</div>
  </div>
</template>
