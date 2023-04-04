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
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'
export default defineComponent({
  name: 'DkIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      const style = {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { color: props.color } : {})
      }
      return style
    })
    return { style }
  }
})
</script>

<template>
  <i class="dk-icon" style={style}>
    <slot></slot>
  </i>
</template>
