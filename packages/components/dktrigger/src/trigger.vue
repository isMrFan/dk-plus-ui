<script lang="ts">
/**
 * @name DkTrigger
 * @description Trigger
 * @date Oct 31, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function 组件触发器用于组件展示下拉
*/
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { dkTriggerProps } from './props'
 import { getReturn } from '../../_hooks'
export default defineComponent({
  name: 'DkTrigger',
  props:dkTriggerProps,
  setup(props) {
    const data = reactive({})
    const {getRun}=getReturn()
    /**
     * @description 是否展示主内容
   */
    const showContent = ref<boolean>(false)
    /**
     * @description 打开
   */
    const handelOpen = (): void => {
      if (props.disabled) return
      showContent.value = true
      getRun(props.onOpen, showContent.value)
      getRun(props.onChange,showContent.value)
    }
    console.log('组件触发器用于组件展示下拉')
    return {
      showContent,
      handelOpen,
      ...toRefs(data)
    }
  }
  
})
</script>
<template>
  <div class="Dk-Trigger">
    <div class="Dk-Trigger__trigger">
      <slot />
    </div>
    <transition name="Dk-trigger">
      <div
        v-show="showContent"
        :class="['Dk-Trigger__content-box']"
      >
        <div class="Dk-Trigger__content">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
