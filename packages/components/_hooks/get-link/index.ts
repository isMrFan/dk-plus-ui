import { toRaw } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import type { DkScrollBar } from '../../dkscrollbar/src/props'
import type { ClassListName } from '../../_interface'
import { getStyleList, setSize, getColor } from '..'

interface LinkType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
  wrapperClassList: ComputedRef<ClassListName>
}

export const getDkLink = (props: DkScrollBar): LinkType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'scroll-bar')

  const defaultClassList: string[] = []
  const classList = classes([...defaultClassList], 'dk-scroll-bar')

  const styleList = (): CSSProperties => {
    const { width, height, barWidth, trackColor, thumbColor, thumbRadios } = data

    return {
      '--scroll-bar-width': width && setSize(width),
      '--scroll-bar-height': height && setSize(height),
      '--scroll-bar-bar-width': barWidth && setSize(barWidth),
      '--scroll-bar-track-color': trackColor && getColor(trackColor).getDodge(0.7),
      '--scroll-bar-thumb-radius': thumbRadios && setSize(thumbRadios),
      '--scroll-bar-thumb-color':
        thumbColor && hexToRgba(getColor(thumbColor).getDodge(0), 0)
    }
  }

  const defaultWrapperClassList: string[] = []
  const wrapperClassList = classes([...defaultWrapperClassList], 'dk-scroll-bar-wrapper')

  return {
    classList,
    styleList: styleList(),
    wrapperClassList
  }
}

/**
 * @name hexToRgba
 * @description Hex convert to rgba
 * @param { string } color Hex color
 * @param { number } opacity Opacity
 * @returns { string } rgba color
 */
export const hexToRgba = (color: string, opacity: number): string => {
  const hexColor = color.replace('#', '')
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 4), 16)
  const b = parseInt(hexColor.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
