/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/document/': [
    {
      text: '开发指南',
      items: [
        { text: '安装', link: '/document/install' },
        { text: '快速上手', link: '/document/import' }
      ]
    },
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
      ]
    }
  ]
}
