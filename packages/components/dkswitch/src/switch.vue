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
        checkIcon: props.uncheckedIcon,
        loading: props.loading,
        customIcon: props.checkedIcon
      })

      const methods = {
        handleChange: (e: Event): void => {
          const target = e.target as HTMLInputElement
          
          if (data.disabled) {
            target.checked = !target.checked
            // classList.value.push('dk-switch_disabled')
            methods.refreshStatus()
            return
          }

          let value = target.checked

          if (props.disabled) {
            value = !value
          }
          target.checked = value

          emit('update:modelValue', value)
          emit('change', value)
        },
        refreshStatus: (): void => {
          data.disabled = props.disabled || props.loading
          if (data.disabled) {
            classList.value.push('dk-switch_disabled')
          }else{
            classList.value.splice(classList.value.indexOf('dk-switch_disabled'), 1)
          }
        }
      }

      const switchRef = ref<HTMLInputElement>()

      watch(
        () => props.modelValue,
        val => {
          data.modelValue = val
          data.checkText = val ? data.checkedText : data.uncheckedText

          if (switchRef.value) {
            switchRef.value.checked = val
          }

          data.checkIcon = val ? props.checkedIcon : props.uncheckedIcon

          methods.refreshStatus()

          data.customIcon = val ? props.checkedCustomIcon : props.uncheckedCustomIcon
        },
        {
          immediate: true
        }
      )

      watch(
        () => props.loading,
        val => {
          data.loading = val
          methods.refreshStatus()
        },
        {
          immediate: true
        }
      )

      watch(
        () => props.disabled,
        val => {
          data.disabled = val
          methods.refreshStatus()
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
      <input
        v-show="!disabled || !loading"
        ref="switchRef"
        type="checkbox"
        class="dk-switch_inner"
        v-bind="$attrs"
      />
      <div class="dk-switch_slider">
        <dk-icon v-if="loading" icon="IconLoading"></dk-icon>
        <dk-icon v-if="!loading && customIcon" :icon="customIcon"></dk-icon>
        <span class="dk-switch_title">
          <dk-icon v-if="checkIcon" :icon="checkIcon" size="14"></dk-icon>
          {{ checkText }}
          <slot></slot>
        </span>
      </div>
    </label>
  </div>
</template>
