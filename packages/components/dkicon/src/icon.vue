<script lang="ts">
  /**-
   * @name dk-icon
   * @author fankai16
   * @Time 2023/01/04
   * @property {string} size  图标大小
   * @property {string} color  图标颜色
   * @function slot  -插槽
   * @description icon 图标
   **/
  import { defineComponent } from 'vue'
  import { iconProps } from './icon'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkIcon',
    props: iconProps,
    setup(props) {
      const { styles } = getStyleList(props, 'icon')
      const style=styles(['size','color'])
      return {
        style
      }
    }
  })
</script>

<template>
  <i class="dk-icon" role="img" text-indent="middle" :style="style">
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
