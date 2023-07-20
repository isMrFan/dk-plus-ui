import type { HeadConfig } from 'vitepress'

/**
 * 头部配置
 *
 * @see head https://vitepress.vuejs.org/config/app-configs#head
 */
export const head: HeadConfig[] = [
  /** 标签栏略缩图 */
  [
    'link',
    {
      rel: 'icon',
      href: 'https://oss.cadwaladerss.com/dk-plus/images/24ICON.png'
    }
  ],
  /** 解决移动端点击输入框自动放大的问题 */
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0,user-scalable=no'
    }
  ],
  /** 网站关键词，有助于 SEO 优化 */
  [
    'meta',
    {
      name: 'Keywords',
      content:
        '前端,前端开发,组件库,vue3组件库,vue,vue.js,javascript,typescript,vite,css3,css,html,html5,js,ts,scss,sass,design,setup,eslint,es6,components,vitepress,vitest,element,element-ui,ui,element-plus,go,web-components,web,jquery,less,eslint,commitlint,cli,types,uviewui,uniapp,uni-app,uni,vue-admin-beautiful,dk-ui,dkui,dk'
    }
  ],
  /** 网站作者 */
  [
    'meta',
    {
      name: 'author',
      content: 'dk-plus dk-plus-ui'
    }
  ],
  /** OG 标题 */
  [
    'meta',
    {
      property: 'og:title',
      content: 'dk-plus 可在 vue3Web 应用快速创建。'
    }
  ],
  /** OG 类型 */
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  /** OG 略缩图 */
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://oss.cadwaladerss.com/dk-plus/images/24ICON.png'
    }
  ],
  /** OG 描述 */
  [
    'meta',
    {
      property: 'og:description',
      // content: '面向设计人员和开发人员的基于Vue 3的组件库'
      content: `
        ✨ Vue 3 组件库，专为设计师与开发者而生 ✨
        🛠️ 简单集成，开发无压力 🛠️
        🚀 加速开发，效率倍增 🚀
        立即体验，开启全新的前端之旅！🚀
      `
    }
  ],
  /** OG 页面所在网站名 */
  [
    'meta',
    {
      property: 'og:site_name',
      content: 'dk-plus-ui'
    }
  ]
] as HeadConfig[]
