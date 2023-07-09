import footer from './src/footer.vue'
import { withInstall } from '@dk-plus/utils/with-install'
const DkFooter = withInstall(footer)
export type footerInstance = InstanceType<typeof footer>
export { DkFooter }
export default DkFooter
