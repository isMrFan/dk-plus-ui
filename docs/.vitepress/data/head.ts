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
      href: 'https://oss.cadwaladerss.com/images/header/24ICON.png'
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
      content: 'dk-plus CadWalaDers'
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
      content: ''
    }
  ],
  /** OG 描述 */
  [
    'meta',
    {
      property: 'og:description',
      content: 'dk-ui'
    }
  ],
  /** OG 页面所在网站名 */
  [
    'meta',
    {
      property: 'og:site_name',
      content: 'cadwaladerss'
    }
  ]
] as HeadConfig[]
