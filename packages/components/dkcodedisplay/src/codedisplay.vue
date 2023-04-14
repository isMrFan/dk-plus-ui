<template>
  <div class="dkcodedisplay">
    <dk-shadow>
      <slot name="code"></slot>
      <div class="dkcodedisplay_open">
        <span @click="onOpen">{{ open?'关闭':'开启' }}</span>
      </div> 
      <div class="dkcodedisplay_code" :class="{'dkcodedisplay_code_true':open}">
        <slot />
      </div>
    </dk-shadow>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent,reactive,toRefs } from 'vue'
import { CodeDisplay } from './codedisplay'
export default defineComponent({
  name: 'dkcodedisplay',
  props: CodeDisplay,
  setup(props) {
    const data = reactive({
      open: false,
      expandableDiv:document.querySelector('.dkcodedisplay_code')
    })
    const onOpen = () => {
      data.open = ! data.open
    }
    return {
      ...toRefs(data),
      onOpen,
    }
  }
})
 
</script>