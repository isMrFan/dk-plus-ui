import { defineConfig } from 'vitepress'
import { description } from './data/description'
import { nav } from './data/nav'
import { sidebar } from './data/sidebar'
import { head } from './data/head'

/**
 * vitepress 配置项文件
 *
 * @see Introduction https://vitepress.vuejs.org/config/introduction
 */
export default defineConfig({
  title: 'dk-plus',
  head,
  description,
  /**
   * 是否显示最后更新时间
   *
   * @see last-updated https://vitepress.vuejs.org/guide/theme-last-updated#last-updated
   */
  lastUpdated: true,
  /**
   * 语言配置
   *
   * @see separate-directory-for-each-locale https://vitepress.vuejs.org/guide/i18n#separate-directory-for-each-locale
   */
  locales: {
    '/zh-CN': {
      lang: 'zh-CN',
      label: '简体中文'
    },
    '/en-US': {
      lang: 'en-US',
      label: 'English'
    }
  },
  /**
   * 主题配置
   *
   * @see theme-config https://vitepress.vuejs.org/guide/migration-from-vitepress-0#theme-config
   */
  themeConfig: {
    /**
     * 最后更新时间的文案显示
     *
     * @see lastUpdatedText https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
     */
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    /**
     * 配置导航栏图表
     *
     * @see socialLinks https://vitepress.vuejs.org/config/theme-configs#sociallinks
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CadWalaDers/dk-ui'
      }
    ],
    /**
     * 配置 logo
     *
     * @see logo https://vitepress.vuejs.org/config/theme-configs#logo
     */
    logo: {
      src: 'https://oss.cadwaladerss.com/images/24ICON.png',
      alt: 'dk-plus'
    },
    siteTitle: 'dk-plus',

  },
})
