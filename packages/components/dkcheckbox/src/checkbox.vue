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
        modelValue: props.modelValue,
        change,
        classList,
        styleList,
        checkbox,
        checkedClass,
        indeterminate: props.indeterminate
      }
    }
  })
</script>
<template>
  <!-- <div :class="classList" class="dk-checkbox--center"> -->
  <div :class="classList" :style="styleList">
    <label :class="checkedClass" class="dk-checkbox-wrapper">
      <input
        ref="checkbox"
        v-model="modelValue"
        class="dk-checkbox_inner"
        :indeterminate="indeterminate"
        type="checkbox"
        @change="change"
      />
      <slot></slot>
    </label>
  </div>
</template>
