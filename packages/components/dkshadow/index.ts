import shadow from './src/dkshadow.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkshadow = withInstall(shadow)
export type shadowInstance = InstanceType<typeof shadow>
export { dkshadow }
export default dkshadow
