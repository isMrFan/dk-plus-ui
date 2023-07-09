import Container from './src/container.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkContainer = withInstall(Container)
export type ContainerInstance = InstanceType<typeof Container>
export { dkContainer }
export default dkContainer
