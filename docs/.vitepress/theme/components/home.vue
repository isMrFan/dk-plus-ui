<template>
  <div class="home">
    <div class="main">
      <p class="text">dk-plus</p>
      <p class="text">一套基于 Vue3.0 <br />的 UI 组件库</p>
      <p class="text">轻量便捷，打造高效界面，<br />简洁灵活，提升用户体验。</p>
    </div>
    <div class="container"></div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const theme = ref<string | null>(
      window.localStorage.getItem('vitepress-theme-appearance')
    )
    /**
     * @name loadThemeStyle
     * @description 加载主题样式
     */
    const loadThemeStyle = (): void => {
      const isDark: boolean = theme.value === 'dark'
      const homeStyleList = reactive({
        '--theme-color': '#3eaf7c',
        '--text-color': isDark ? '#dfdfd7' : '#333',
        '--background-color': isDark ? '#1e1e20' : '#fff',
        '--sub-text-color': '#666'
      })
      const keyList: string[] = Object.keys(homeStyleList)
      const len: number = keyList.length
      for (let i = 0; i < len; i++) {
        const dom = document.documentElement as HTMLElement
        const body = dom.querySelector('body') as HTMLElement
        body.style.setProperty(keyList[i], homeStyleList[keyList[i]])
      }
    }
    onMounted(() => {
      loadThemeStyle()
    })
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../style/home.scss';
</style>
