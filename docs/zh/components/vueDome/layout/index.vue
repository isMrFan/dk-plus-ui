<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'LayoutComp',
    setup(props) {
      return { props }
    }
  })
</script>

<template>
  <dk-row v-bind="props">
    <slot></slot>
  </dk-row>
</template>

<style lang="scss" scoped>
  .docs-row {
    .dk-row {
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
  }
</style>
