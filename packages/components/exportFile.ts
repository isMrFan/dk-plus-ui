import * as components from './components'
import { version } from '../dk-plus/package.json'
import { DkLoading } from './dkloading'
import { objectEntries } from './_utils'
import type { App } from 'vue'

/**
 * 注册组件
 *
 * @param { Object } app 应用实例
 * @returns { Object } 应用实例
 */
const install = (app: App): App => {
  /**
   * 注册组件
   *
   * @see registration https://cn.vuejs.org/guide/components/registration.html
   * @see Array.prototype.forEach() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  objectEntries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })
  app.directive('loading', DkLoading.directive)

  return app
}

export default {
  version,
  install
}
