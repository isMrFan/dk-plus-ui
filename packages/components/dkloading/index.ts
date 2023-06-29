import LoadingModule from './src/loading.vue'
import { DirectiveLoading } from '../_directive/loading/index'
import { withInstall, installDirective } from '@dk-plus/utils/with-install'
const dkloading = withInstall(LoadingModule)
installDirective(DirectiveLoading(), 'dk-loading')

export { dkloading }
export default dkloading
