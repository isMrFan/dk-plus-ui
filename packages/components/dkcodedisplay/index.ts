import codedisplay from './src/codedisplay.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkcodedisplay = withInstall(codedisplay)
export type codedisplayInstance = InstanceType<typeof codedisplay>
export { dkcodedisplay }
export default dkcodedisplay
