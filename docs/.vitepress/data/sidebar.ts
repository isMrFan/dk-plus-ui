/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
import { expansionNav } from './expansionNav'
export const sidebar = {
  '/document/': [
    {
      text: '开发指南',
      items: [
        { text: '安装', link: '/document/install' },
        { text: '快速上手', link: '/document/import' }
      ]
    },
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/document/introduce' },
        { text: '贡献指南', link: '/document/contributing' },
        { text: '加入我们', link: '/document/join' }
      ]
    },
    {
      text: '发展历程',
      items: [
        { text: '更新日志', link: '/document/update' },
        { text: '里程碑', link: '/document/mileage' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'icon 图标', link: '/components/icon' },
        { text: 'container 页面布局', link: '/components/container' },
        { text: 'space 间距', link: '/components/space' },
        { text: 'Button 按钮', link: '/components/button' }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Input输入框', link: '/components/input' },
        { text: 'InputNumber数字输入框', link: '/components/inputNumber' },
      ]
    }
  ],
  '/expansion/': expansionNav
}
