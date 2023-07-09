import Icon from './src/icon.vue'
import { withInstall } from '../_utils/index'
export const DkIcon = withInstall(Icon)
export type IconInstance = InstanceType<typeof Icon>
export default DkIcon
export * from './src/icon'
