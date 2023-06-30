<script lang="ts">
  /**
   * @name dk-input-number
   * @author WangYingJie
   * @Time 2323/4/12
   * @description
   * @example
   */
  import { defineComponent, ref, reactive, shallowRef, watch } from 'vue'
  import { dkInputNumberProps } from './props'
  import type { DataType } from './type'
  import { getInputNumber } from '../../_hooks'

  export default defineComponent({
    name: 'DkInputNumber',
    props: dkInputNumberProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const input = shallowRef<HTMLInputElement>()

      const modelValue = ref<number>(props.modelValue)

      const iconSizeTarget = {
        large: 24,
        medium: 20,
        small: 16,
        mini: 12
      }

      const data = reactive<DataType>({
        step: props.step,
        min: props.min,
        max: props.max,
        size: props.size,
        iconSize: iconSizeTarget[props.size]
      })

      const reduce = (): void => {
        modelValue.value -= data.step
      }

      const plus = (): void => {
        modelValue.value += data.step
      }

      watch(
        (): number => modelValue.value,
        (val): void => {
          let value: number = val;
          if (value < data.min || value > data.max) {
            value = data.min
          }

          const target = input.value as HTMLInputElement
          target.value = value.toString()

          emit('update:modelValue', Number(value))
        }
      )

      const { classList, styleList } = getInputNumber(props)

      return {
        ...data,
        reduce,
        plus,
        value: modelValue,
        input,
        classList,
        styleList
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <dk-button :size="size" @click="reduce">
      <dk-icon :size="iconSize" icon="IconReduce1"></dk-icon>
    </dk-button>
    <dk-input 
      ref="input" 
      v-model="value" 
      type="number" 
      align="center" 
      border="none" 
      :size="size"
    />
    <dk-button :size="size" @click="plus">
      <dk-icon :size="iconSize" icon="IconAdd1"></dk-icon>
    </dk-button>
  </div>
</template>
