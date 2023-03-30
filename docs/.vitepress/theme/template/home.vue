<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const data = reactive({

    })
    console.log("asd")
    return {
      ...toRefs(data)
    }
  }
})
</script>
<template>
  <div class="Home">
    asdas
  </div>
</template>
<style lang="scss" scoped>
.Home {}
</style>