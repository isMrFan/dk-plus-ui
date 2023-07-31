<script lang="ts">
  import { defineComponent } from 'vue'
  import { dkCheckboxProps } from './props'
  import { getCheckbox } from '../../_hooks'
  export default defineComponent({
    name: 'DkCheckbox',
    props: dkCheckboxProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const change = (e: Event): void => {
        emit('update:modelValue', (e.target as HTMLInputElement).checked)
      }

      const { classList, styleList } = getCheckbox(props)

      return {
        value: props.modelValue,
        change,
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <label :class="classList" :style="styleList">
    <input v-model="value" class="checkbox_inner" type="checkbox" @change="change" />
    <span class="dk-checkbox_text">
      <slot></slot>
    </span>
  </label>
</template>
