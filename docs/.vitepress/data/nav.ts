import { version } from '../../../packages/dk-plus/package.json'
/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
  {
    text: '文档',
    activeMatch: '^/document/',
    link: '/document/install'
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/icon'
  },
  {
    text: '技术拓展',
    items: [
      {
        text: '1.Flutter',
        activeMatch: '^/expansion/Flutter/',
        link: '/expansion/Flutter/WinInstall'
      },
      {
        text: '2.Xcode',
        activeMatch: '^/expansion/Xcode/',
        link: '/expansion/Xcode/installXcode'
      }
    ]
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
