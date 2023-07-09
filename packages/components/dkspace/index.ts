import Space from './src/dkspace.vue'
import { withInstall } from '../_utils/index'
export const DkSpace = withInstall(Space)
export type SpaceInstance = InstanceType<typeof Space>
export default DkSpace
