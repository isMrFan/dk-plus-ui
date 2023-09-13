import type { ClassListName } from '../../_interface'
import { type CSSProperties, type ComputedRef } from 'vue'
import { getStyleList } from '..'
import type { PopoverPropsType } from '../../dkpopover/src/props'

interface GetPopoverReturnType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getPopover = (props: PopoverPropsType): GetPopoverReturnType => {
  const { classes } = getStyleList(props, 'popover')
  const defaultClass = ['dk-popover']
  const classList = classes([...defaultClass], 'dk-popover')
  const styleList = {
    width: '100%'
  }
  return {
    classList,
    styleList
  }
}
