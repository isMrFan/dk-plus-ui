<script lang='ts'>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'DkPopover',
    setup() {
      return {};
    }
  });
</script>
<template>
  <div class="dk-popover">
    <div class="dk-popover-wrapper">
      <div class="dk-popover-wrapper_arrow"></div>
      <slot name="popup"></slot>
    </div>
    <div class="dk-popover_inner">
      <slot name="default"></slot>
    </div>
  </div>
</template>
