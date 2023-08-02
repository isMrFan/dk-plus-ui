<script lang="ts">
  import { defineComponent, toRefs, ref } from 'vue'
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

      const checkbox = ref<HTMLInputElement>()
      const methods = {
        handleClick(): void {
          const value = checkbox.value as HTMLInputElement
          value.checked = !value.checked
        }
      }

      return {
        value: props.modelValue,
        change,
        classList,
        styleList,
        ...(toRefs(methods)),
        checkbox
      }
    }
  })
</script>
<template>
  <div :class="classList" :style="styleList" @click="handleClick">
    <input ref="checkbox" v-model="value" class="dk-checkbox_inner center" type="checkbox" @change="change" />
    <label>
      <span class="dk-checkbox_text">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
