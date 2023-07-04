import { toRaw, computed } from 'vue'
import { getStyleList } from '..'
import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListName } from '../../_interface'
import type { DkInputNumberProps } from '../../dkinputNumber/src/props'

interface inputNumberType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
}

export const getInputNumber = (props: DkInputNumberProps): inputNumberType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'input-number')
  const defaultClass = ['disabled', 'position']
  const classList = classes([...defaultClass], 'dk-input-number')

  const styleList = computed((): CSSProperties => {
    const { size, disabled } = data
    const sizeTarget = {
      large: ['240px', '45px'],
      medium: ['180px', '36px'],
      small: ['150px', '30px'],
      mini: ['120px', '30px']
    }
    const styleList = {
      '--input-number-width': sizeTarget[size][0],
      '--input-number-height': sizeTarget[size][1],
      '--input-number-background-color': disabled ? '#f5f7fa' : '#fff',
      '--input-number-border-color--hover': disabled ? '#ccc' : '#409eff'
    }
    return styleList
  })

  return {
    classList,
    styleList
  }
}
