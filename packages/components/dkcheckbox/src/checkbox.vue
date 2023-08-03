<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { dkCheckboxProps } from './props'
  import { getCheckbox } from '../../_hooks'
  export default defineComponent({
    name: 'DkCheckbox',
    props: dkCheckboxProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const checkedClass = ref<string>('')
      const checkbox = ref<HTMLInputElement>()
      const change = (e: Event): void => {
        const target = e.target as HTMLInputElement
        if (target.checked) {
          checkedClass.value = 'checked'
        } else {
          checkedClass.value = ''
        }
        emit('update:modelValue', target.checked)
        emit('change', target.checked)
      }

      const { classList, styleList } = getCheckbox(props)

      return {
        value: props.modelValue,
        change,
        classList,
        styleList,
        checkbox,
        checkedClass
      }
    }
  })
</script>
<template>
  <!-- <div :class="classList" class="dk-checkbox--center"> -->
  <div :class="classList">
    <label :style="styleList" :class="checkedClass" class="dk-checkbox-wrapper">
      <input
        ref="checkbox"
        v-model="value"
        class="dk-checkbox_inner center"
        type="checkbox"
        @change="change"
      />
      <slot></slot>
    </label>
  </div>
</template>
