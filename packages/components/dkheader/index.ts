import Header from './src/dkheader.vue'
import { withInstall } from '../_utils/index'
const dkHeader = withInstall(Header)
export type HeaderInstance = InstanceType<typeof Header>
export { dkHeader }
export default dkHeader
