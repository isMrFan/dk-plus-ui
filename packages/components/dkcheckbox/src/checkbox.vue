<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { dkCheckboxProps } from './props'
  import { getCheckbox } from '../../_hooks'
  export default defineComponent({
    name: 'DkCheckbox',
    props: dkCheckboxProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit, slots }) {
      const checkedClass = ref<string>('')
      const checkbox = ref<HTMLInputElement>()

      const data = reactive({
        checkedLabel: props.checkedLabel,
        uncheckedLabel: props.uncheckedLabel,
        label: props.label,
        value: props.value,
        hasSlot: !!slots.default
      })

      const isCheckLabel = data.checkedLabel || data.uncheckedLabel
      const labelValue = ref<string>('')
      const setLabelValue = (): void => {
        labelValue.value = props.modelValue ? data.checkedLabel : data.uncheckedLabel
      }
      setLabelValue()
      const change = (e: Event): void => {
        const target = e.target as HTMLInputElement
        if (target.checked) {
          checkedClass.value = 'checked'
        } else {
          checkedClass.value = ''
        }
        if (isCheckLabel) {
          labelValue.value = target.checked ? data.checkedLabel : data.uncheckedLabel
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
        indeterminate: props.indeterminate,
        ...data,
        labelValue,
        isCheckLabel
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
      <span class="dk-checkbox-label"> {{ labelValue }} </span>
      <span v-if="!labelValue">
        <span v-if="!hasSlot">{{ label }}</span>
        <slot v-else></slot>
      </span>
    </label>
  </div>
</template>
