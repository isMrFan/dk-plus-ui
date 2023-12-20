<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'RateComp',
    setup() {
      const data = reactive({
        checked: 1
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<template>
  <div class="box">
    <p>checked:{{ checked }}</p>
    <dk-rate v-model="checked" :number-value="5"></dk-rate>
  </div>
</template>
