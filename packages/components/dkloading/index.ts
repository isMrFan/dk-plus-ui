import { DirectiveLoading } from '../_hooks/_directive/loading/index'
import { installDirective, withInstall } from '@dk-plus/utils/with-install'
import type loading from './src/loading.vue'

export const dkloading = withInstall({
  directive: installDirective(DirectiveLoading(), 'dk-loading')
})
export type loadingInstance = InstanceType<typeof loading>
export default dkloading
