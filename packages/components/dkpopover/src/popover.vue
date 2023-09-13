<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  import { popoverProps } from './props'
  import { getPopover } from '../../_hooks'
  export default defineComponent({
    name: 'DkPopover',
    props: popoverProps,
    emits: ['update:modelValue', 'hidden'],
    setup(props, { emit }) {
      const { classList, styleList } = getPopover(props)
      const data = reactive({
        visible: props.visible,
        trigger: props.trigger
      })

      const methods = {
        handleMouseEnter: (): void => {
          if(data.trigger !== 'hover') return
          if (!classList.value.includes('dk-popover-active')) {
            classList.value.push('dk-popover-active')
          }
          emit('update:modelValue', true)
          emit('hidden', true)
        },
        handleMouseLeave: (): void => {
          if(data.trigger !== 'hover') return
          if (classList.value.includes('dk-popover-active')) {
            classList.value.splice(classList.value.indexOf('dk-popover-active'), 1)
          }
          emit('update:modelValue', false)
          emit('hidden', false)
        },
        setClassName: (visible: boolean): void => {
          if (visible) {
            if (!classList.value.includes('dk-popover-active')) {
              classList.value.push('dk-popover-active')
            }
          }else{
            if (classList.value.includes('dk-popover-active')) {
              classList.value.splice(classList.value.indexOf('dk-popover-active'), 1)
            }
          }
        },
        handleClick: (): void => {
          emit('update:modelValue', !data.visible)
          emit('hidden', !data.visible)
        }
      }

      watch(
        () => props.visible,
        val => {
          data.visible = val
          methods.setClassName(val)
        },
        {
          immediate: true
        }
        )
        
        watch(
          () => props.modelValue,
          val => {
            data.visible = val
            methods.setClassName(val)
        },
        {
          immediate: true
        }
      )

      return {
        ...toRefs(data),
        ...toRefs(methods),
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <div
    :class="classList"
    :style="styleList"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <div class="dk-popover-wrapper">
      <div class="dk-popover-wrapper_arrow"></div>
      <slot name="popup"></slot>
    </div>
    <div class="dk-popover_inner">
      <slot name="default"></slot>
    </div>
  </div>
</template>
