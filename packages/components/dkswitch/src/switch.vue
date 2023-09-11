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
        disabled: props.disabled,
        checkedText: props.checkedText,
        uncheckedText: props.uncheckedText,
        checkText: props.uncheckedText,
        checkIcon: props.uncheckedIcon
      })

      const methods = {
        handleChange: (e: Event): void => {
          if (data.disabled) return
          const target = e.target as HTMLInputElement

          emit('update:modelValue', target.checked)
          emit('change', target.checked)
        }
      }

      const switchRef = ref<HTMLInputElement>()

      watch(
        () => props.modelValue,
        val => {
          if (data.disabled) return
          data.modelValue = val
          data.checkText = val ? data.checkedText : data.uncheckedText

          if (switchRef.value) {
            switchRef.value.checked = val
          }

          data.checkIcon = val ? props.checkedIcon : props.uncheckedIcon
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
      <input ref="switchRef" type="checkbox" class="dk-switch_inner" v-bind="$attrs" />
      <div class="dk-switch_slider">
        <span class="dk-switch_title">
          <dk-icon v-if="checkIcon" :icon="checkIcon" size="14"></dk-icon>
          {{ checkText }}
          <slot></slot>
        </span>
      </div>
    </label>
  </div>
</template>
