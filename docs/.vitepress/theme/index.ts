import { h } from 'vue'
import theme from 'vitepress/theme'
export default {
  ...theme,
   Layout() {
    return h(theme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see layout-slots https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
       */
    })
  },
  NotFound: () => "custom 404",
  
}