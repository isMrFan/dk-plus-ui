import { buildPackages } from '../../build/packages'
import type { TaskFunction } from 'gulp';
const isBuildPackages:TaskFunction=buildPackages(__dirname, 'utils')
export default isBuildPackages
