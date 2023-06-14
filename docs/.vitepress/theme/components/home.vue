<template>
  <div class="home">
    <div class="main">
      <p class="text">dk-plus</p>
      <p class="text">一套基于 Vue3.0 <br />的 UI 组件库</p>
      <p class="text">轻量便捷，打造高效界面，<br />简洁灵活，提升用户体验。</p>
    </div>
    <div class="container"></div>
    <div class="footer">
      <p>京ICP备2022007747号-2     https://beian.miit.gov.cn/</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { setStyle } from '../../../assets/setStyle'
export default defineComponent({
  name: 'Home',
  setup() {
    const theme = ref<string | null>(
      window.localStorage.getItem('vitepress-theme-appearance')
    )
    const setStyleClass = new setStyle(theme.value)
    
    onMounted(() => {
      setStyleClass.init()
    })

    onUnmounted(() => {
      setStyleClass.unInstall()
    })
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../style/home.scss';
</style>
