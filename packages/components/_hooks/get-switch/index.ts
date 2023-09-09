import { toRaw, type CSSProperties, type ComputedRef } from 'vue'
import type { SwitchPropsType } from '../../dkswitch/src/props'
import { getColor, getStyleList } from '..'
import type { ClassListName } from '../../_interface'

interface GetSwitchReturnsType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getSwitch = (props: SwitchPropsType): GetSwitchReturnsType => {
  const data = toRaw(props)
  data

  const { classes } = getStyleList(data, 'switch')

  const defaultClass = ['dk-switch', 'disabled']

  const classList = classes([...defaultClass], 'dk-switch')

  const styleList = (): CSSProperties => {
    const { size, checkedColor, uncheckedColor } = data

    const targetSize: Record<string, string> = {
      large: '56px',
      medium: '48px',
      small: '40px',
      mini: '36px'
    }

    const style = {
      '--switch-size': targetSize[size] || targetSize['small'],
      '--switch-checked-color': getColor(checkedColor || '#409EFF').getDeepen(0),
      '--switch-unchecked-color': getColor(uncheckedColor || '#C0CCDA').getDeepen(0)
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
