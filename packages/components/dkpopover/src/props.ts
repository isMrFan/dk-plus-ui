import { setStringProp } from '../../_utils';

export const popoverProps = {
  /**
   * @name width
   * @type string
   * @default 100%
   * @description
   */
  width: setStringProp('100%')
}

export type PopoverPropsType = Partial<typeof popoverProps>
