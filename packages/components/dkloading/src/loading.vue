<script lang="ts">
  /**-
   * @name dk-loading
   * @author fankai16
   * @Time 2023/06/28
   * @description 加载状态组件指令
   **/
  import { defineComponent, ref, onMounted } from 'vue'
  import { loadingProps } from './props'
  import { getStyleList } from '../../_hooks'
  import { IconRefresh } from '../../_icon'
  export default defineComponent({
    name: 'DkLoading',
    components: {
      IconRefresh
    },
    props: loadingProps,
    setup(props) {
      const nbSpinner = ref<HTMLButtonElement>()
      const { classes, styles } = getStyleList(props, 'loading')
      const classList = classes(['loading'], 'dk-loading')
      const styleList = styles(['background', 'color', 'textSize'])
      onMounted(() => {
        const isSvg = props.spinner
        // 获取svg代码
        const svgCode = `
          <svg viewBox="0 0 1024 1024" width="${props.spinnerSize}" height="${props.spinnerSize}">
           ${isSvg}
          </svg>
        `
        // 添加元素样式或其他操作
        if (nbSpinner.value) {
          nbSpinner.value.innerHTML = svgCode
        }
      })
      return {
        classList,
        styleList,
        nbSpinner
      }
    }
  })
</script>
<template>
  <div v-if="visible" :class="classList" :style="styleList">
    <div
      v-if="spinner === ''"
      :color="color"
      :style="[`width:${spinnerSize}; height:${spinnerSize};`]"
      class="dk-loading_animation"
    >
      <icon-refresh :width="spinnerSize" :height="spinnerSize"></icon-refresh>
    </div>
    <div
      v-else
      :style="[`width:${spinnerSize}; height:${spinnerSize};`]"
      :color="color"
      class="dk-loading_animation"
    >
      <span ref="nbSpinner"></span>
    </div>
    <span class="dk-loading_title">
      {{ text }}
    </span>
  </div>
</template>
