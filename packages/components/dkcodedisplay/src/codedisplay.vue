<script lang="ts">
  import { computed, defineComponent, reactive, toRefs, ref, nextTick } from 'vue'
  import { CodeDisplay } from './codedisplay'
  // import { SetPosition } from './setPosition'
  export default defineComponent({
    name: 'Dkcodedisplay',
    props: CodeDisplay,
    setup() {
      const data = reactive({
        open: false,
        width: 0, //
        height: 0, // Launch height
        isShow: false, // Expand or not
        dkCodeDisplayStyleList: {} // Expand Button Style
      })
      
      const codeBoxRef = ref<HTMLElement>()

      // const handlePosition = new SetPosition(codeBoxRef)
      
      const initSize = (): void => {
        nextTick(() => {
          const codeBox = codeBoxRef.value as HTMLElement
          data.height = codeBox.children[0].clientHeight
          data.width = codeBox.children[0].clientWidth
        })
      }
      initSize()
      const handleOpenCode = (): void => {
        nextTick(() => {
          initSize()
          data.open = !data.open
          setStyle()
          // setTimeout(() => {
          //   handlePosition.init(codeBoxRef, data.open)
          // }, 1000 * .21)
        })
      }

      const codeHeight = computed(() => {
        return data.open ? data.height + 20 + 'px' : '0px'
      })

      const handleMouseEnter = (): void => {
        data.isShow = true
        setStyle()
      }

      const handleMouseLeave = (): void => {
        data.isShow = false
        setStyle()
      }

      const setStyle = (): void => {
        data.dkCodeDisplayStyleList = {
          '--dkcodedisplay-text-left': data.isShow ? '50%' : '52%',
          '--dkcodedisplay-text-opacity': data.isShow ? '.5' : '0.0',
          '--dkcodedisplay-border': data.open ? 'transparent' : 'var(--vp-c-border)',
          '--dkcodedisplay-margin-top': data.open ? '0' : '10px',
          '--dkcodedisplay-width': data.width ? data.width + 'px' : '100%'
        }
      }
      setStyle()

      // const scrollChange = (): void => {
      //   window.addEventListener('scroll', (): void => {
      //     handlePosition.init(codeBoxRef, data.open)
      //     console.log('scroll');
          
      //   })
      // }
      // scrollChange()

      return {
        ...toRefs(data),
        codeHeight,
        handleOpenCode,
        handleMouseEnter,
        handleMouseLeave,
        codeBoxRef
      }
    }
  })
</script>
<template>
  <div
    class="dkcodedisplay"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <dk-shadow>
      <slot name="code"></slot>
      <div ref="codeBoxRef" class="dkcodedisplay_code" :style="{ height: codeHeight }">
        <slot />
      </div>
      <div
        class="dkcodedisplay_open"
        :style="dkCodeDisplayStyleList"
        @click="handleOpenCode"
      >
        <div class="dkcodedisplay-text">
          <dk-icon
            size="13px"
            :icon="open ? 'IconUpperTriangle' : 'IconLowerTriangle'"
          ></dk-icon>
          <span>{{ open ? '收起' : '展开' }}</span>
        </div>
      </div>
    </dk-shadow>
  </div>
</template>
