import number from './src/inputNumber.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const dkInputNumber = withInstall(number)
export type numberInstance = InstanceType<typeof number>
export { dkInputNumber }
export default dkInputNumber
