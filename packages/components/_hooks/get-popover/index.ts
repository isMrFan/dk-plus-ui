import type { ClassListName } from '../../_interface'
import { toRaw, type CSSProperties, type ComputedRef } from 'vue'
import { getStyleList, setSize } from '..'
import type { PopoverPropsType } from '../../dkpopover/src/props'

interface GetPopoverReturnType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getPopover = (props: PopoverPropsType): GetPopoverReturnType => {
  const data = toRaw(props)
  const { classes } = getStyleList(props, 'popover')
  const defaultClass = ['dk-popover']
  const classList = classes([...defaultClass], 'dk-popover')

  const styleList = (): CSSProperties => {
    const { width } = data
    const styleList = {
      '--popover-width': setSize(width || '240px')
    }
    return styleList
  }
  return {
    classList,
    styleList: styleList()
  }
}
