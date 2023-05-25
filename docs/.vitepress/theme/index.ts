import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import './style/global.scss'
import dkPlus, { dkcodedisplay } from '../../../packages/dk-plus/index'
import '@dk-plus/theme-chalk/src/index.scss'
export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see layout-slots https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
       */
    })
  },
  enhanceApp({ app }) {
    app.use(dkPlus)
    app.component('custom-module', dkcodedisplay)
  }
}
