import type { ExtractPropTypes } from 'vue';
import { setStringProp } from '../../_utils';

export const dkLinkProps = {
  /**
   * @name modelValue
   * @type string
   * @description The title of the link
   * @default ''
   */
  modelValue: setStringProp()
}

export type DkLinkType = ExtractPropTypes<typeof dkLinkProps>
