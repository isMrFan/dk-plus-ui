import type { DkRadioType } from '../../dkradio/src/props'
import { toRaw, type ComputedRef, type CSSProperties } from 'vue'
import type { ClassListName } from '../../_interface'
import { getStyleList } from '..'

interface RadioReturnsType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getRadio = (props: DkRadioType): RadioReturnsType => {
  const data = toRaw(props)

  const { classes } = getStyleList(data, 'radio')

  const defaultClassList: string[] = ['disabled', 'border']

  const classList = classes([...defaultClassList], 'dk-radio')

  const styleList = (): CSSProperties => {
    const { size } = data
    const targetSize: Record<string, string> = {
      large: '18px',
      medium: '16px',
      small: '14px',
      mini: '12px'
    }
    
    const style: CSSProperties = {
      '--radio-size': targetSize[size] || targetSize['small']
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
