/**
 * @name setStyle
 * @description 设置样式
 * @param {string} theme 主题
 * @function intercept 拦截切换主题的按钮点击事件
 * @function loadThemeStyle 加载主题样式
 * @function getSize 获取页面尺寸
 * @function handleSizeChange 页面尺寸变化时，重载按钮点击事件
 * @function loadHamburgerMenu 加载菜单点击事件
 * @function getWindowSize 获取页面尺寸
 * @function unEventListener 卸载事件监听
 */
export class setStyle {
  theme: string | null = 'auto'
  constructor(theme: 'string') {
    this.theme = theme
  }

  /**
   * @name intercept
   * @description 拦截切换主题的按钮点击事件
   */
  intercept = (): void => {
    const VPSwitchAppearanceList = document.getElementsByClassName('VPSwitchAppearance')
    const len = VPSwitchAppearanceList.length
    for (let i = 0; i < len; i++) {
      VPSwitchAppearanceList[i].addEventListener('click', () => {
        this.theme = window.localStorage.getItem('vitepress-theme-appearance')
        this.loadThemeStyle()
      })
    }
  }

  /**
   * @name loadThemeStyle
   * @description 加载主题样式
   */
  loadThemeStyle = (): void => {
    const isDark: boolean = this.theme === 'dark'
    const homeStyleList = {
      '--theme-color': '#3eaf7c',
      '--text-color': isDark ? '#dfdfd7' : '#333',
      '--background-color': isDark ? '#1e1e20' : '#fff',
      '--sub-text-color': '#666'
    }
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
  getSize = (): void => {
    window.addEventListener('resize', this.handleSizeChange)
  }

  /**
   * @name handleSizeChange
   * @description 页面尺寸变化时，重载按钮点击事件
   */
  handleSizeChange = (e: Event): void => {
    const target = e.target as Window
    if (target.innerWidth > 750 && target.innerWidth < 768) {
      this.loadHamburgerMenu()
    }
  }

  /**
   * @name loadHamburgerMenu
   * @description 加载菜单点击事件
   */
  loadHamburgerMenu = (): void => {
    const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
    VPNavBarHamburger[0].addEventListener('click', () => {
      const isLaunch = VPNavBarHamburger[0].attributes['aria-expanded'].value === 'true'
      if (isLaunch) {
        this.intercept()
      }
    })
  }

  /**
   * @name getWindowSize
   * @description 获取页面尺寸
   */
  getWindowSize = (): void => {
    const innerWidth = window.innerWidth
    if (innerWidth > 768) {
      this.intercept()
    } else {
      this.loadHamburgerMenu()
    }
  }

  /**
   * @name unEventListener
   * @description 卸载事件监听
   */
  unEventListener = (): void => {
    // 卸载拦截切换主题的按钮点击事件
    const VPSwitchAppearanceList = document.getElementsByClassName('VPSwitchAppearance')
    const len = VPSwitchAppearanceList.length
    for (let i = 0; i < len; i++) {
      VPSwitchAppearanceList[i].removeEventListener('click', () => {
        null
      })
    }

    // 卸载获取页面尺寸
    window.removeEventListener('resize', this.handleSizeChange)

    // 卸载拦截切换主题的按钮点击事件
    const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
    VPNavBarHamburger[0].removeEventListener('click', () => {
      null
    })
  }
}
