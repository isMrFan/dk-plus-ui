<script lang="ts">
  import { computed, defineComponent, reactive, toRefs } from 'vue'
  import { CodeDisplay } from './codedisplay'
  export default defineComponent({
    name: 'Dkcodedisplay',
    props: CodeDisplay,
    setup () {
      const data = reactive({
        open: false,
        height: 0 // 展开的高度
      })
      const handleOpenCode = (e: Event):void => {
        const TARGET = e.target as HTMLElement
        const TARGET_PARENT = TARGET.parentElement as HTMLElement
        const TARGET_PARENT_PARENT = TARGET_PARENT.parentElement as HTMLElement
        const { clientHeight } = TARGET_PARENT_PARENT.querySelector(
          '.dkcodedisplay_code'
        )?.querySelector('.language-html') || { clientHeight: 0 }
        data.height = clientHeight
        data.open = !data.open
      }
      const codeHeight = computed(() => {
        return data.open ? data.height + 20 + 'px' : '0px'
      })

      return {
        ...toRefs(data),
        codeHeight,
        handleOpenCode
      }
    }
  })
</script>
<template>
  <div class="dkcodedisplay">
    <dk-shadow>
      <slot name="code"></slot>
      <div class="dkcodedisplay_code" :style="{ height: codeHeight }">
        <slot />
      </div>
      <div class="dkcodedisplay_open">
        <span @click="handleOpenCode">{{ open ? '关闭' : '开启' }}</span>
      </div>
    </dk-shadow>
  </div>
</template>
