<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'Card',
    emits: ['update:modelValue'],
    setup() {
      let value = ref<number>(5)
      const handleChange = (value: number): void => {
        console.log(value)
      }
      const content = ref<string>('卡片内容')
      const changeMsg = (): void => {
        content.value = 'aaa'
      }
      return {
        value,
        handleChange,
        content,
        changeMsg
      }
    }
  })
</script>
<template>
  <div class="card">
    <dk-card>{{ content }}</dk-card>
  </div>
</template>

<style lang="scss">
  .number {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
