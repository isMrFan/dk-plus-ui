<script lang="ts">
  /**-
   * @name dk-space
   * @author fankai16
   * @Time 2023/06/26
   * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
   * @function onEditor -编辑返利规则
   * @description 间距
   **/
  import { defineComponent } from 'vue'
  import { DkProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkSpace',
    props: DkProps,
    setup(props) {
      const { classes, styles } = getStyleList(props, 'space')
      const classList = classes(['spacingType', 'nowrap', 'vertical'], 'dk-space')
      const styleList = styles(['portRait', 'landScape'])
      return { classList, styleList }
    }
  })
</script>
<template>
  <div role="none" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
