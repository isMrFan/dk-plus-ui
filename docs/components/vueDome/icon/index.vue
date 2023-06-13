<script lang="ts">
import { defineComponent, reactive, onMounted, ref, onUnmounted } from 'vue'
import svgList from '@dk-plus/components/_icon'
export default defineComponent({
  name: 'VueDomeIcon',
  setup() {
    const oncopy = (e: string): void => {
      const input = document.createElement('input')
      input.setAttribute('readonly', 'readonly')
      input.setAttribute('value', e)
      document.body.appendChild(input)
      input.setSelectionRange(0, 9999)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      alert('复制成功')
    }

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
        VPSwitchAppearanceList[i].removeEventListener('click', () => { null })
      }

      // 卸载获取页面尺寸
      window.removeEventListener('resize', handleSizeChange)

      // 卸载拦截切换主题的按钮点击事件
      const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
      VPNavBarHamburger[0].removeEventListener('click', () => { null })
    }

    onUnmounted(() => {
      unEventListener()
    })

    return {
      oncopy,
      svgList: svgList as unknown
    }
  }
})
</script>

<template>
  <div class="box-icon">
    <div v-for="(item, i) of svgList" :key="i" class="box-icon_comp" @click="oncopy(item['name'])">
      <div>
        <dk-icon :size="24">
          <component :is="item" />
        </dk-icon>
      </div>
      <div>
        <span class="icon-name">{{ item['name'] }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-icon {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .box-icon_comp {
    .icon-name {
      font-size: 10px;
    }

    cursor: pointer;
    display: flex;
    width: 110px;
    height: 110px;
    border: 1px solid #eee;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
