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

      const iconSizeTarget = {
        large: 24,
        medium: 20,
        small: 16,
        mini: 12
      }

      const data = reactive<DataType>({
        step: Number(props.step),
        min: props.min,
        max: props.max,
        size: props.size,
        iconSize: iconSizeTarget[props.size],
        strict: props.strict,
        precision: Number(props.precision)
      })

      const getModelValue = (): number => {
        if (props.modelValue === undefined) {
          return 0
        }
        let value = Number(props.modelValue)
        if (data.precision) {
          value = Number(value.toFixed(data.precision))
        }
        return value
      }

      const modelValue = ref<number>(getModelValue())

      const disabled = ref<boolean>(props.disabled)

      const reduceDisabled = ref<boolean>(modelValue.value <= data.min)
      const plusDisabled = ref<boolean>(modelValue.value >= data.max)

      const reduce = (): void => {
        if (modelValue.value <= data.min) return
        if (modelValue.value - data.step < data.min) {
          modelValue.value = data.min
          return
        }
        modelValue.value -= data.step
      }

      const plus = (): void => {
        if (modelValue.value >= data.max) return
        if (modelValue.value + data.step > data.max) {
          modelValue.value = data.max
          return
        }
        modelValue.value += data.step
      }

      const handleInputChange = (): void => {
        if (data.strict) {
          modelValue.value = Math.ceil(modelValue.value / data.step) * data.step
        }
      }

      watch(
        (): number => modelValue.value,
        (val): void => {
          let value: number = val
          if (value <= data.min) {
            value = data.min
            reduceDisabled.value = true
          } else {
            reduceDisabled.value = false
          }

          if (value >= data.max) {
            value = data.max
            plusDisabled.value = true
          } else {
            plusDisabled.value = false
          }

          const target = input.value as HTMLInputElement
          target.value = value.toString()

          modelValue.value = value
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
        styleList,
        plusDisabled,
        reduceDisabled,
        disabled,
        handleInputChange
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <dk-button :disabled="disabled || reduceDisabled" :size="size" @click="reduce">
      <dk-icon :size="iconSize" icon="IconReduce1"></dk-icon>
    </dk-button>
    <dk-input
      ref="input"
      v-model="value"
      type="number"
      align="center"
      border="none"
      :size="size"
      :disabled="disabled"
      @change="handleInputChange"
    />
    <dk-button :disabled="disabled || plusDisabled" :size="size" @click="plus">
      <dk-icon :size="iconSize" icon="IconAdd1"></dk-icon>
    </dk-button>
  </div>
</template>
