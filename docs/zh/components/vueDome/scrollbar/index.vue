<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'ScrollBarComp',
    setup() {
      return {}
    }
  })
</script>

<template>
  <div class="docs-scroll">
    <dk-scroll-bar v-bind="$attrs">
      <div v-for="item in 20" :key="item" class="item">{{ item }}</div>
    </dk-scroll-bar>
  </div>
</template>

<style lang="scss" scoped>
  .docs-scroll {
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: rgba($color: #1cb1a4, $alpha: 0.5);
      color: #fff;
    }
  }
</style>
