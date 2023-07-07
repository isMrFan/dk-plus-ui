import button from './src/button.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkbutton = withInstall(button)
/** button 组件实例类型 */
export type ButtonInstance = InstanceType<typeof button>
export { dkbutton }
export default dkbutton
