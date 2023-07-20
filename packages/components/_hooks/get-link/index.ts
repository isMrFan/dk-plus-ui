import { toRaw } from 'vue';
import type { ComputedRef } from 'vue'
import type { DkLinkType } from '../../dklink/src/props'
import type { ClassListName } from '../../_interface'
import { getStyleList } from '..'

interface LinkType {
  classList: ComputedRef<ClassListName>
}

export const getDkLink = (props: DkLinkType): LinkType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'link')

  const defaultClassList: string[] = []

  const classList = classes([...defaultClassList], 'dk-link')

  return {
    classList
  }
}
