import { toRaw, computed } from 'vue'
import { getStyleList } from '..'
import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListName, dkInputNumberPosition } from '../../_interface'
import type { DkInputNumberProps } from '../../dkinputNumber/src/props'
import { DK_INPUT_NUMBER_POSITION } from '../../_tokens'

interface inputNumberType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
}

export const getInputNumber = (props: DkInputNumberProps): inputNumberType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'input-number')
  let defaultClass: string[] = ['disabled']
  
  /**
   * @description 检测是否有 position 属性, 且是否合法, 合法则添加 position 类名
   */
  if (!!data.position && DK_INPUT_NUMBER_POSITION.includes(data.position)) {
    data.position = `${data.position} dk-input-number_position` as dkInputNumberPosition
    defaultClass = [...defaultClass, 'position']
  } else if (typeof data.position === 'string') {
    data.position = 'right dk-input-number_position' as dkInputNumberPosition
    defaultClass = [...defaultClass, 'position']
  }
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
