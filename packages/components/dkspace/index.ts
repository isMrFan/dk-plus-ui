import Space from './src/dkspace.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkSpace = withInstall(Space)
export type SpaceInstance = InstanceType<typeof Space>
export { dkSpace }
export default dkSpace
