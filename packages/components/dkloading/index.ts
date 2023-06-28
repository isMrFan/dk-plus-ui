import LoadingModule from './src/loading.vue'
//import type Loading from './src/loading.vue'
import { DirectiveLoading } from '../_directive/loading/index'
import { withInstall, installDirective } from '@dk-plus/utils/with-install'
const dkloading = withInstall(LoadingModule)
// const dkloading = withInstall({
//   directive: installDirective(DirectiveLoading(), 'dk-loading')
// })
installDirective(DirectiveLoading(), 'dk-loading')
export { dkloading }
export default dkloading
