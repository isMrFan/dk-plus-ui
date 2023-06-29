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
  import dkIcon from '../../dkicon/src/icon.vue'
  export default defineComponent({
    name: 'DkLoading',
    components: {
      IconRefresh,
      dkIcon
    },
    props: loadingProps,
    setup(props) {
      const nbSpinner = ref<HTMLButtonElement>()
      console.log('nbSpinner', nbSpinner)
      const { classes, styles } = getStyleList(props, 'loading')
      const classList = classes(['loading'], 'dk-loading')
      const styleList = styles(['background', 'color'])
      onMounted(() => {
        const isSvg =
          '<g fill="currentColor" stroke="currentColor"><path d="M578.752 261.376m-69.312 0a1.083 1.083 0 1 0 138.624 0 1.083 1.083 0 1 0-138.624 0Z" p-id="10731"></path><path d="M533.824 730.88c24.64-96.896 76.608-310.784 61.44-340.16C591.616 383.488 584.32 379.392 575.232 379.392c-40.448 0-168.896 102.592-194.24 123.136L375.872 506.752l0 28.224 94.72-23.744c-11.2 56.256-41.344 205.12-52.8 238.08-9.024 25.984-8 48.768 2.944 64C426.752 821.888 438.656 832 461.056 832c9.216 0 19.584-1.728 30.784-5.12 61.184-18.752 114.56-107.648 116.8-111.488l32.384-54.528-52.288 35.904C561.536 715.264 544.448 725.376 533.824 730.88z"></path><path d="M512 64C264.576 64 64 264.576 64 512c0 247.488 200.576 448 448 448 247.36 0 448-200.512 448-448C960 264.576 759.36 64 512 64zM512 889.728c-208.576 0-377.728-169.152-377.728-377.728 0-208.64 169.152-377.728 377.728-377.728 208.64 0 377.728 169.152 377.728 377.728C889.728 720.64 720.64 889.728 512 889.728z"></path></g>'
        // 获取svg代码
        const svgCode = `
          <svg viewBox="0 0 1024 1024" width="90px" height="90px">
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
    <dk-icon v-if="spinner === ''" :color="'red'" :size="90" class="dk-loading_animation">
      <icon-refresh style="transform: scale(3)"></icon-refresh>
    </dk-icon>
    <dk-icon v-else :color="'red'" :size="90" class="dk-loading_animation">
      <span ref="nbSpinner"></span>
    </dk-icon>
    <span class="dk-loading_title">
      {{ text }}
    </span>
  </div>
</template>
