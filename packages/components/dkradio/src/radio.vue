<script lang='ts'>
  import { defineComponent, reactive, toRefs, watch } from 'vue';
  import { dkRadioProps } from './props';
  export default defineComponent({
    name: 'DkRadio',
    props: dkRadioProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const data = reactive({
        name: props.name,
        check: props.modelValue,
        disabled: props.disabled,
        label: props.label
      })

      const methods = {
        handleChange: (e: Event): void => {
          const target = e.target as HTMLInputElement;
          emit('update:modelValue', target.checked);
          emit('change', data.name);
        }
      }

      watch(() => props.modelValue, (val) => {
        data.check = val;
      });
      
      return {
        ...toRefs(data),
        ...toRefs(methods)
      };
    }
  });
</script>
<template>
  <div class="dk-radio">
    <label class="dk-radio-wrapper" @change="handleChange">
      <input class="dk-radio_inner" type="radio" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
