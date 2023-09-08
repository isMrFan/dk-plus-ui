<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, ref, nextTick } from 'vue'
  import { dkRadioProps } from './props'
  export default defineComponent({
    name: 'DkRadio',
    props: dkRadioProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const radio = ref<HTMLInputElement>()

      const getClassList = (): string[] => {
        const list = ['dk-radio']
        if (props.disabled) {
          list.push('dk-radio_disabled')
        }
        return list
      }

      const data = reactive({
        name: props.name,
        check: props.modelValue,
        disabled: props.disabled,
        label: props.label,
        classList: getClassList()
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
        async val => {
          await nextTick()
          if (radio.value) {
            radio.value.checked = val === data.name
          }
        },
        {
          immediate: true
        }
      )

      return {
        radio,
        ...toRefs(data),
        ...methods
      }
    }
  })
</script>
<template>
  <div :class="classList">
    <label class="dk-radio-wrapper" @change="handleChange">
      <div class="dk-radio_circle"></div>
      <input ref="radio" class="dk-radio_inner" type="radio" :disabled="disabled" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
