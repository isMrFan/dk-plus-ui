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
 * @function unInstall 卸载事件监听
 */
class setStyle {
  theme: string | null = window.localStorage.getItem('vitepress-theme-appearance')
  timeoutId: NodeJS.Timeout | null = null

  constructor() {
    this.init()
  }

  /**
   * @name intercept
   * @description 拦截切换主题的按钮点击事件
   */
  intercept = (): void => {
    const VPSwitchAppearanceList: HTMLCollectionOf<Element> =
      document.getElementsByClassName('VPSwitchAppearance')

    const len: number = VPSwitchAppearanceList.length

    for (let i = 0; i < len; i++) {
      VPSwitchAppearanceList[i].addEventListener('click', () => {
        this.theme = window.localStorage.getItem('vitepress-theme-appearance')
        this.loadThemeStyle()
      })
    }
  }

  /**
   * @name loadThemeStyle
   * @description 主题样式 黑白主题
   */
  loadThemeStyle = (): void => {
    const isDark: boolean = this.theme === 'dark'
    const homeStyleList: Record<string, string> = {
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

  /**title
   * @name unInstall
   * @description 卸载事件监听
   */
  unInstall = (): void => {
    // 卸载拦截切换主题的按钮点击事件
    const VPSwitchAppearanceList = document.getElementsByClassName('VPSwitchAppearance')
    const len = VPSwitchAppearanceList.length
    for (let i = 0; i < len; i++) {
      VPSwitchAppearanceList[i].removeEventListener('click', (): void => {
        null
      })
    }

    // 卸载获取页面尺寸
    window.removeEventListener('resize', this.handleSizeChange)

    // 卸载拦截切换主题的按钮点击事件
    const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
    VPNavBarHamburger[0].removeEventListener('click', (): void => {
      null
    })

    this.timeoutId && clearTimeout(this.timeoutId)
  }

  /**
   * @name init
   * @description 初始化
   */
  init = (): void => {    
    this.loadThemeStyle()

    this.timeoutId = setTimeout(() => {
      this.getSize()
      this.getWindowSize()
      this.browserBackground(this.unInstall, this.init)
    }, 100)
  }

  /**
   * @name destroy
   * @description 销毁 监听浏览器窗口变化
   */

  /**
   * @function browserBackground
   * @description 监听浏览器窗口变化
   * @param {Function} unInstall 卸载
   * @param {Function} mount 挂载
   */
  browserBackground = (unInstall: Function, mount: Function): void => {
    const event = (): void => {
      if (document.hidden) {
        unInstall && unInstall()
      } else {
        mount && mount()
      }
    }
    window.addEventListener('load', (): void => {
      document.addEventListener('visibilitychange', event)
    })
    window.addEventListener('beforeunload', (): void => {
      document.removeEventListener('visibilitychange', event)
    })
  }
}

/**
 * @name loadStyle
 * @description 加载样式 外部只能调用init方法
 */
const loadStyle = new setStyle().init

export { loadStyle }

export default loadStyle
