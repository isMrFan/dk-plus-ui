<template>
  <div class="home">
    <div class="main">
      <p class="text">dk-plus</p>
      <p class="text">一套基于 Vue3.0 <br/>的 UI 组件库</p>
      <p class="text">轻量便捷，打造高效界面，<br/>简洁灵活，提升用户体验。</p>
    </div>
    <div class="container"></div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const theme = ref<string | null>(
      window.localStorage.getItem('vitepress-theme-appearance')
    )

    /**
     * @name intercept
     * @description 拦截切换主题的按钮点击事件
     */
    const intercept = (): void => {
      const VPSwitchAppearanceList =
        document.getElementsByClassName('VPSwitchAppearance')
      const len = VPSwitchAppearanceList.length
      for (let i = 0; i < len; i++) {
        VPSwitchAppearanceList[i].addEventListener('click', () => {
          theme.value = window.localStorage.getItem('vitepress-theme-appearance')
          loadThemeStyle()
        })
      }
    }

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

    /**
     * @name getSize
     * @description 获取页面尺寸
     */
    const getSize = (): void => {
      window.addEventListener('resize', handleSizeChange)
    }

    /**
     * @name handleSizeChange
     * @description 页面尺寸变化时，重载按钮点击事件
     */
    const handleSizeChange = (e: Event): void => {
      const target = e.target as Window
      if (target.innerWidth > 750 && target.innerWidth < 768) {
        loadHamburgerMenu()
      }
    }

    /**
     * @name loadHamburgerMenu
     * @description 加载菜单点击事件
     */
    const loadHamburgerMenu = (): void => {
      const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
      VPNavBarHamburger[0].addEventListener('click', () => {
        const isLaunch =
          VPNavBarHamburger[0].attributes['aria-expanded'].value === 'true'
        if (isLaunch) {
          intercept()
        }
      })
    }

    /**
     * @name getWindowSize
     * @description 获取页面尺寸
     */
    const getWindowSize = (): void => {
      const innerWidth = window.innerWidth
      if (innerWidth > 768) {
        intercept()
      } else {
        loadHamburgerMenu()
      }
    }

    onMounted(() => {
      getSize()
      getWindowSize()
      loadThemeStyle()
    })

    /**
     * @name unEventListener
     * @description 卸载事件监听
     */
    const unEventListener = (): void => {
      // 卸载拦截切换主题的按钮点击事件
      const VPSwitchAppearanceList =
        document.getElementsByClassName('VPSwitchAppearance')
      const len = VPSwitchAppearanceList.length
      for (let i = 0; i < len; i++) {
        VPSwitchAppearanceList[i].removeEventListener('click', () => { })
      }

      // 卸载获取页面尺寸
      window.removeEventListener('resize', handleSizeChange)

      // 卸载拦截切换主题的按钮点击事件
      const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
      VPNavBarHamburger[0].removeEventListener('click', () => { })
    }

    onUnmounted(() => {
      unEventListener()
    })

    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../style/home.scss';
</style>
