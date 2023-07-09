import number from './src/inputNumber.vue'
import { withInstall } from '../_utils/index'
export const DkInputNumber = withInstall(number)
export type numberInstance = InstanceType<typeof number>
export default DkInputNumber
