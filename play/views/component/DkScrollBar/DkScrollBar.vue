<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ScrollBarComponent',
  setup() {
    interface ScrollType { 
      scrollTop: number;
      scrollLeft: number;
    }
    const handleScrollChange = (evt: ScrollType): void => {
      console.log(evt);
    };
    return {
      handleScrollChange
    }
  }
})
</script>

<template>
  <div class="scroll-box">
    <h4>基础实用</h4>
    <dk-scroll-bar 
      height="200px"
      bar-width="6px"
      thumb-color="#1cb1a4"
    >
      <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
    </dk-scroll-bar>
    <h4>横向滚动</h4>
    <dk-scroll-bar 
      height="80px"
      bar-width="6px"
      thumb-color="#1cb1a4"
    >
      <div class="item-list">
        <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
      </div>
    </dk-scroll-bar>
  </div>
</template>

<style lang='scss' scoped>
.item-list{
  width: fit-content;
  display: flex;
  .scrollbar-list-item{
    width: 50px;
  }
}
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
