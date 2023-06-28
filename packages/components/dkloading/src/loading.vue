<script lang="ts">
  /**-
   * @name dk-loading
   * @author fankai16
   * @Time 2023/06/28
   * @description 加载状态组件指令
   **/
  import { defineComponent } from 'vue'
  import { loadingProps } from './props'
  import { getStyleList } from '../../_hooks'

  export default defineComponent({
    name: 'DkLoading',
    props: loadingProps,
    setup(props) {
      const { classes, styles } = getStyleList(props, 'loading')
      const classList = classes(['loading'], 'dk-loading')
      const styleList = styles(['background', 'color'])
      return {
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <div v-if="visible" :class="classList" :style="styleList">
    <dk-button type="success">成功按钮</dk-button>
    <dk-icon :icon="icon ? icon : 'IconRefresh'" size="24"></dk-icon>
    {{ text ? text : '123' }}
  </div>
</template>
