import type { Ref } from 'vue'
/**
 * @name setPosition
 * @description Sets the position of the code button display
 */
export class SetPosition {
  dom: Ref<HTMLElement | undefined>
  open: boolean = false

  constructor(dom: Ref<HTMLElement | undefined>) {
    this.dom = dom
  }

  getClientHeight = (): number => {
    return document.documentElement.clientHeight
  }

  getScrollTop = (): number => {
    return document.documentElement.scrollTop
  }

  setStyle = (): void => {
    const box = this.dom.value as HTMLElement
    const boxBottom = box.clientHeight + box.offsetTop - this.getScrollTop() + 36

    // console.log(boxBottom, this.dom)
    
    const clientHeight = this.getClientHeight()

    const styleElementId = 'dynamic-media-query'
    if (boxBottom > clientHeight && this.open) {
      const mediaQuery = `
      body {
        .dkcodedisplay {
          .dkcodedisplay_open {
            position: fixed;
            bottom: 0;
            z-index: 999;
          }
        }
      }`

      const styleElement = document.createElement('style')
      styleElement.id = styleElementId
      styleElement.innerHTML = mediaQuery
      document.head.appendChild(styleElement)
    } else {
      const dynamicStyleElement = document.getElementById(styleElementId)
      if (dynamicStyleElement) {
        dynamicStyleElement.remove()
      }
    }
  }

  init = (dom: Ref<HTMLElement | undefined>, open: boolean): void => {
    this.dom = dom
    this.open = open
    this.setStyle()
    // this.scrollChange()
  }

  resize = (): void => {
    return
    window.addEventListener('resize', () => {
      this.init(this.dom, this.open)
    })
  }

  // scrollChange = (): void => {
  //   window.addEventListener('scroll', (): void => {
  //     console.log('scroll')
  //     this.setStyle()
  //   })
  // }
}
