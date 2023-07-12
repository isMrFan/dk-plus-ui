<script lang="ts">
  import { defineComponent } from 'vue'
  import { getInput } from '../../_hooks'
  export default defineComponent({
    name: 'DkInput',
    setup() {
      const { styleList } = getInput(props)
      return {
        modelValue: '123',
        styleList
      }
    }
  })
</script>

<template>
  <div :style="styleList"></div>
</template>
