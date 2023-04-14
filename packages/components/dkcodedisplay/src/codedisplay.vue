<template>
  <div class="dkcodedisplay">
    <dk-shadow>
      <slot name="code"></slot>
      <div class="dkcodedisplay_open">
        <span @click="open = !open">{{ open?'关闭':'开启' }}</span>
      </div> 
      <div class="dkcodedisplay_code" :style="{'height': codeHeight}" >
        <slot />
      </div>
    </dk-shadow>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent,reactive,toRefs, onMounted } from 'vue'
import { CodeDisplay } from './codedisplay'
export default defineComponent({
  name: 'dkcodedisplay',
  props: CodeDisplay,
  setup(props) {
    const data = reactive({
      open: false,
      codeDom: null, // 展开的元素
    })
    onMounted(() => {
      data.codeDom = document.querySelector('.dkcodedisplay_code')?.querySelector('.language-html') || { clientHeight:0}
    })
    const codeHeight = computed(() => {
      return data.open ? data.codeDom.clientHeight+20+'px' : '0px'
    })
    
    return {
      ...toRefs(data),
      codeHeight
    }
  }
})
</script>