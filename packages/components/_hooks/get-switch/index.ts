import { toRaw, type CSSProperties, type ComputedRef } from 'vue'
import type { SwitchPropsType } from '../../dkswitch/src/props'
import { getStyleList } from '..'
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
    const {
      size
    } = data

    const targetSize: Record<string, string> = {
      large: '56px',
      medium: '48px',
      small: '40px',
      mini: '36px'
    }

    const style = {
      '--switch-size': targetSize[size] || targetSize['small']
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
