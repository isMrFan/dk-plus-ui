<script lang="ts">
  import { computed, defineComponent, reactive, toRefs, ref, nextTick } from 'vue'
  import { CodeDisplay } from './codedisplay'
  export default defineComponent({
    name: 'Dkcodedisplay',
    props: CodeDisplay,
    setup() {
      const data = reactive({
        open: false,
        height: 0, // Launch height
        isShow: false, // Expand or not
        dkCodeDisplayStyleList: {} // Expand Button Style
      })

      const codeBoxRef = ref<HTMLElement>()
      const handleOpenCode = (): void => {
        nextTick(() => {
          const codeBox = codeBoxRef.value as HTMLElement
          data.height = codeBox.children[0].clientHeight
          data.open = !data.open
          setStyle()
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
          '--dkcodedisplay-border': data.open ? 'transparent' : 'var(--vp-badge-info-border)',
          '--dkcodedisplay-margin-top': data.open ? '0' : '10px'
        }
      }
      setStyle()

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
  <div class="dkcodedisplay" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <dk-shadow>
      <slot name="code"></slot>
      <div ref="codeBoxRef" class="dkcodedisplay_code" :style="{ height: codeHeight }">
        <slot />
      </div>
      <div class="dkcodedisplay_open" :style="dkCodeDisplayStyleList" @click="handleOpenCode">
        <div class="dkcodedisplay-text">
          <dk-icon size="13px" :icon="open ? 'IconUpperTriangle' : 'IconLowerTriangle'"></dk-icon>
          <span>{{ open ? '收起' : '展开' }}</span>
        </div>
      </div>
    </dk-shadow>
  </div>
</template>
