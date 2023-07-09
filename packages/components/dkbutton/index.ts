import button from './src/button.vue'
import { withInstall } from '../_utils/index'
export const DkButton = withInstall(button)
export type ButtonInstance = InstanceType<typeof button>
export default DkButton
