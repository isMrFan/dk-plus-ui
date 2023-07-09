/**-
 * @name index
 * @author fankai16
 * @Time 2023/01/04
 * @description  入口文件
 **/

import * as components from '@dk-plus/components'
import type { App } from 'vue' // ts中的优化只获取类型
import { DkLoading } from '@dk-plus/components/dkloading'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IsComponents: any = []
for (const key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    const component = components[key]
    IsComponents.push(component)
  }
}
const install = (app: App): void => {
  // 每个组件在编写的时候都提供了install方法
  IsComponents.forEach(component => app.use(component))
  app.directive('dk-loading', DkLoading.directive)
}
export default {
  install
}

export * from '@dk-plus/components'
