import Container from './src/container.vue'
import { withInstall } from '../_utils/index'
export const DkContainer = withInstall(Container)
export type ContainerInstance = InstanceType<typeof Container>
export default DkContainer
