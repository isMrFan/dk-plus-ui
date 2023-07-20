import scrollBar from './src/scrollBar.vue';
import { withInstall } from '../_utils/index';

export const DkScrollBar = withInstall(scrollBar);

export type linkInstance = InstanceType<typeof scrollBar>;

export default DkScrollBar;
