<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, ref } from 'vue'
  import { dkRadioProps } from './props'
  export default defineComponent({
    name: 'DkRadio',
    props: dkRadioProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const radio = ref<HTMLInputElement>()

      const data = reactive({
        name: props.name,
        check: props.modelValue,
        disabled: props.disabled,
        label: props.label
      })

      const methods = {
        handleChange: (): void => {
          // const target = e.target as HTMLInputElement;
          emit('update:modelValue', data.name)
          emit('change', data.name)
        }
      }

      watch(
        () => props.modelValue,
        val => {
          if (radio.value) {
            radio.value.checked = val === data.name
          }
        }
      )

      return {
        radio,
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<template>
  <div class="dk-radio">
    <label class="dk-radio-wrapper" @change="handleChange">
      <input ref="radio" class="dk-radio_inner" type="radio" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
