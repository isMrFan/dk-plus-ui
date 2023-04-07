import { version } from '../../../npm/package.json'
/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
  {
    text: '文档',
    activeMatch: '^/docs/',
    link: '/docs/install'
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/button'
  },
  {
    text: version,
    link: 'https://www.npmjs.com/package/dk-plus'
  },
  {
    text: '语言',
    items: [
      { text: '简体中文', activeMatch: '^/', link: '/index' },
      { text: 'English', activeMatch: '^/en-US', link: '/en-US/index' }
    ]
  }
]