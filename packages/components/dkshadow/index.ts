import shadow from './src/dkshadow.vue'
import { withInstall } from '../_utils/index'
export const DkShadow = withInstall(shadow)
export type shadowInstance = InstanceType<typeof shadow>
export default DkShadow
