import las from './src/laside.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const DkLaside = withInstall(las)
export type lasInstance = InstanceType<typeof las>
export { DkLaside }
export default DkLaside
