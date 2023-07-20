<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ScrollBarComponent',
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="scroll-box">
    <dk-scroll-bar 
      height="200px"
      bar-width="6px"
      thumb-color="#1cb1a4"
      track-color="#fcb1a1"
    >
      <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
    </dk-scroll-bar>
  </div>
</template>

<style lang='scss' scoped>
.scrollbar-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: rgba($color: #1cb1a4, $alpha: .5);
  color: #fff;
}
</style>
