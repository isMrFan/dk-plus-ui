/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
import { expansionNav } from '../../data/expansionNav'
export const sidebar = {
  '/zh/document/': [
    {
      text: '开发指南',
      items: [
        { text: '安装', link: '/zh/document/install' },
        { text: '快速上手', link: '/zh/document/import' }
      ]
    },
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/zh/document/introduce' },
        { text: '贡献指南', link: '/zh/document/contributing' },
        { text: '加入我们', link: '/zh/document/join' }
      ]
    },
    {
      text: '发展历程',
      items: [
        { text: '更新日志', link: '/zh/document/update' },
        { text: '里程碑', link: '/zh/document/mileage' }
      ]
    }
  ],
  '/zh/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Icon 图标', link: '/zh/components/icon' },
        { text: 'Container 页面布局', link: '/zh/components/container' },
        { text: 'Space 间距', link: '/zh/components/space' },
        { text: 'Button 按钮', link: '/zh/components/button' },
        { text: 'Shadow 盒子', link: '/zh/components/shadow' },
        { text: 'Alert 警示', link: '/zh/components/alert' },
        { text: 'ScrollBar 滚动条', link: '/zh/components/scrollBar' },
        { text: 'Layout 布局', link: '/zh/components/layout' }
      ]
    },
    {
      text: '表单组件',
      items: [
        { text: 'Input 输入框', link: '/zh/components/input' },
        { text: 'InputNumber 数字输入框', link: '/zh/components/inputNumber' }
      ]
    },
    {
      text: '反馈组件',
      items: [{ text: 'Loading 加载', link: '/zh/components/loading' }]
    }
  ],
  '/expansion/': expansionNav
}
