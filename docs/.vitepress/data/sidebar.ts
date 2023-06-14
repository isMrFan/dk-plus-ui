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
        { text: 'Button 按钮', link: '/components/button' }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [{ text: 'Input', link: '/components/input' }]
    }
  ],
  '/expansion/': [
    {
      text: 'Flutter在vsCode中快速创建项目',
      items: [
        { text: '1.基础安装', link: '/expansion/Flutter/WinInstall' },
        { text: '2.fvm安装(多版本Flutter)', link: '/expansion/Flutter/fvmInstall' },
        { text: '3.在vs code 运行 安卓环境', link: '/expansion/Flutter/AndroidInstall' }
      ]
    },
    {
      text: '在 Xcode 中快速创建项目',
      items: [
        { text: '1.基础安装', link: '/expansion/Xcode/installXcode' },
        { text: '2.创建项目', link: '/expansion/Xcode/createProject' },
      ]
    }
  ]
}
