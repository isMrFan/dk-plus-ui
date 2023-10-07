<script lang='ts'>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'RateComp',
    setup() {
      const checked = ref(true);
      return {
        checked
      };
    }
  });
</script>
<template>
  <div class="box">
    <dk-rate v-model="checked"></dk-rate>
  </div>
</template>
