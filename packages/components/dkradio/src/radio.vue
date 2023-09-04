<script lang='ts'>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'DkRadio',
    setup() {
      return {};
    }
  });
</script>
<template>
  <div class="dk-radio">
    <label class="dk-radio-wrapper">
      <input class="dk-radio_inner" type="radio" />
      <slot></slot>
    </label>
  </div>
</template>
