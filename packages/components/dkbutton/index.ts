import button from './src/button.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkbutton = withInstall(button)
export type ButtonInstance = InstanceType<typeof button>
export { dkbutton }
export default dkbutton
