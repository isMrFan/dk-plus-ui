import type { Plugin } from 'vue'
import * as svgList from './default'
import { withInstall } from '@dk-plus/utils/with-install'

const installedComponents: Record<string, Plugin<[]>> = {}

for (const key in svgList) {
  if (Object.prototype.hasOwnProperty.call(svgList, key)) {
    const component = svgList[key]
    const installedComponent = withInstall(component)
    installedComponents[key] = installedComponent
  }
}
export {
  installedComponents as default
}
