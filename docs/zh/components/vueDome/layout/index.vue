<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'LayoutComp',
    setup(props, { attrs, slots }) {
      console.log(attrs, slots)

      return { props }
    }
  })
</script>

<template>
  <dk-row v-bind="$attrs">
    <!-- <dk-col>
      <div class="dark"></div>
    </dk-col> -->
    <slot></slot>
  </dk-row>
</template>

<style lang="scss" scoped>
  .docs-row {
    .dark,
    .light {
      height: 100%;
      height: 32px;
      border-radius: 4px;
    }

    .dark {
      background-color: #ccc;
    }

    .light {
      background-color: #eee;
    }
  }
</style>
