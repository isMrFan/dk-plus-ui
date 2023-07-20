<script lang="ts">
  /**
   * @name DkScrollBar
   * @description ScrollBar
   * @date July 20, 2023
   * @user WangYingJay <https://github.com/WangYingJay>
   */
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  import type { CSSProperties, Ref } from 'vue'
  import { dkScrollBar } from './props'
  import { getDkLink } from '../../_hooks'
  export default defineComponent({
    name: 'DkScrollBar',
    props: dkScrollBar,
    setup(props) {
      const { classList, styleList, wrapperClassList } = getDkLink(props)
      const data = props
      const scrollBarStyle = ref(styleList) as Ref<CSSProperties>
      const color: string = scrollBarStyle.value['--scroll-bar-thumb-color'] as string
      const thumbColor =
        color && color.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/, '$1, $2, $3')

      const methods = reactive({
        transition(step: number, init: number) {
          let opacity = init
          const setOpacity = (): void => {
            scrollBarStyle.value['--scroll-bar-thumb-color'] = `rgba(${thumbColor}, ${opacity})`
          }
          const animate = (): void => {
            opacity += step
            if(opacity < 1 && opacity > 0) {
              setOpacity()
              requestAnimationFrame(animate)
            }
          }
          animate()
        }
      })
      return {
        ...data,
        classList,
        styleList,
        wrapperClassList,
        ...toRefs(methods),
        scrollBarStyle
      }
    }
  })
</script>

<template>
  <div
    :class="classList"
    :style="scrollBarStyle"
    @mouseenter="transition(0.1, 0)"
    @mouseleave="transition(-0.1, 1)"
  >
    <div :class="wrapperClassList">
      <slot></slot>
    </div>
  </div>
</template>
