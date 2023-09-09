<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, ref } from 'vue'
  import { switchProps } from './props'
  import { getSwitch } from '../../_hooks'
  export default defineComponent({
    name: 'DkSwitch',
    props: switchProps,
    emits: ['change', 'update:modelValue'],
    setup(props, { emit }) {
      const { classList, styleList } = getSwitch(props)

      const data = reactive({
        modelValue: props.modelValue,
        disabled: props.disabled
      })

      const methods = {
        handleChange: (e: Event): void => {
          if (data.disabled) return
          const target = e.target as HTMLInputElement
          data.modelValue = target.checked

          emit('update:modelValue', data.modelValue)
          emit('change', data.modelValue)
        }
      }

      const switchRef = ref<HTMLInputElement>()

      watch(
        () => props.modelValue,
        val => {
          data.modelValue = val

          if (switchRef.value) {
            switchRef.value.checked = val
          }
        },
        {
          immediate: true
        }
      )

      return {
        classList,
        styleList,
        ...toRefs(data),
        ...methods,
        switchRef
      }
    }
  })
</script>
<template>
  <div :class="classList" :style="styleList">
    <label class="dk-switch-wrapper" @change="handleChange">
      <input ref="switchRef" type="checkbox" class="dk-switch_inner" />
      <span class="dk-switch_slider"></span>
      <span class="dk-switch_title">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
