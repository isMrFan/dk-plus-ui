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
      codeDom: 0, // 展开的元素
    })
    onMounted(() => {
      const {clientHeight} = document.querySelector('.dkcodedisplay_code')?.querySelector('.language-html') || { clientHeight:0}
      data.codeDom=clientHeight
    })
    const codeHeight = computed(() => {
      return data.open ?  data.codeDom+20+'px' : '0px'
    })
    
    return {
      ...toRefs(data),
      codeHeight
    }
  }
})
</script>