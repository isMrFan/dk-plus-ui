import { DirectiveLoading } from '../_hooks/_directive/loading/index'
import { installDirective, withInstall } from '../_utils/index'

import type loading from './src/loading.vue'

export const DkLoading = withInstall({
  directive: installDirective(DirectiveLoading(), 'dk-loading')
})
export type loadingInstance = InstanceType<typeof loading>
export default DkLoading
