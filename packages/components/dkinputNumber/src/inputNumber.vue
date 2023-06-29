<script lang="ts">
  /**
   * @name dk-input-number
   * @author WangYingJie
   * @Time 2323/4/12
   * @description
   * @example
   */
  import { defineComponent, ref, reactive } from 'vue'
  import { dkInputNumberProps } from './props'
  import type { DataType } from './type'

  export default defineComponent({
    name: 'DkInputNumber',
    props: dkInputNumberProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const modelValue = ref<number>(Number(props.modelValue))

      const update = (value: number): void => {
        modelValue.value = value
        emit('update:modelValue', value)
      }

      const data = reactive<DataType>({
        step: 1
      })

      return {
        ...data,
        modelValue,
        update
      }
    }
  })
</script>

<template>
  <div class="dk-input-number">
    <button
      class="dk-input-number_reduce dk-input-number_button"
      @click="update(modelValue - step)"
    >
      <dk-icon icon="IconReduce1"></dk-icon>
    </button>
    <dk-input v-model="modelValue" type="number" align="center" border="none" class="dk-input-number_inner" />
    <button class="dk-input-number_add dk-input-number_button" @click="update(modelValue + step)">
      <dk-icon icon="IconAdd1"></dk-icon>
    </button>
  </div>
</template>
