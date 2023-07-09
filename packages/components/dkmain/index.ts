import main from './src/main.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const DkMain = withInstall(main)
export type mainlasInstance = InstanceType<typeof main>
export { DkMain }
export default DkMain
