import link from './src/link.vue';
import { withInstall } from '../_utils/index';

export const DkLink = withInstall(link);

export type linkInstance = InstanceType<typeof link>;

export default DkLink;
