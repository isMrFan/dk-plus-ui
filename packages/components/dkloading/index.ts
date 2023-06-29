import { DirectiveLoading } from '../_hooks/_directive/loading/index'
import { installDirective, withInstall } from '@dk-plus/utils/with-install'

export const dkloading = withInstall({
  directive: installDirective(DirectiveLoading(), 'dk-loading')
})
export default dkloading
