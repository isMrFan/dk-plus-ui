import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListName } from '../../_interface'
import { getStyleList } from '..'
import type { DkCheckboxType } from '../../dkcheckbox/src/props'
interface CheckboxType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getCheckbox = (prop: DkCheckboxType): CheckboxType => {
  const { classes } = getStyleList(prop, 'checkbox')
  const defaultClassList: string[] = []
  const classList = classes([...defaultClassList], 'dk-checkbox')
  const styleList = (): CSSProperties => {
    const style: CSSProperties = {
      '--checkbox-color': '#c1c1c1',
      '--checkbox-font-size': '13px',
      '--checkbox-border-radius': '4px',
      '--checkbox-border': '1px solid #BEBEBE'
    }
    return {
      ...style
    }
  }
  return {
    classList,
    styleList: styleList()
  }
}
