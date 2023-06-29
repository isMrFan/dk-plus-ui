import type { ExtractPropTypes } from 'vue';
import { setNumberProps } from '../../_utils';

export const dkInputNumberProps = {
  modelValue: setNumberProps()
}

export type DkInputNumberProps = ExtractPropTypes<typeof dkInputNumberProps>
