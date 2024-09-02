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
    <dk-rate v-model="checked" :number-value="5" :icon-size="30"></dk-rate>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .dk-shadow {
      margin-bottom: 10px;
      width: calc(50% - 10px);
    }
  }
</style>
