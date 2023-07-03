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
    emits: ['update:modelValue', 'change'],
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
        precision: Number(props.precision),
        readonly: props.readonly,
        position: props.position
      })

      const setParseFloat = (value: number | string): number => {
        const targetValue = Number(value)
        const floatValue = targetValue.toFixed(data.precision)
        return parseFloat(floatValue)
      }

      const getModelValue = (): number => {
        if (props.modelValue === undefined) {
          return 0
        }
        let value = Number(props.modelValue)
        if (data.precision) {
          value = setParseFloat(value)
        }
        return value
      }

      const modelValue = ref<number>(getModelValue())

      const disabled = ref<boolean>(props.disabled)

      const reduceDisabled = ref<boolean>(modelValue.value <= data.min)
      const plusDisabled = ref<boolean>(modelValue.value >= data.max)

      const reduce = (): void => {
        if (data.readonly) return
        const newValue = modelValue.value - data.step
        if (newValue < data.min) {
          modelValue.value = data.min
        } else {
          modelValue.value = newValue
        }
      }

      const plus = (): void => {
        if (data.readonly) return
        const newValue = modelValue.value + data.step
        if (newValue > data.max) {
          modelValue.value = data.max
        } else {
          modelValue.value = newValue
        }
      }

      const handleInputChange = (event: Event): void => {
        const target = event.target as HTMLInputElement
        const value = Number(target.value)
        if (data.strict) {
          const ceilValue = Math.ceil(value / data.step) * data.step
          modelValue.value = ceilValue
        } else {
          modelValue.value = value
        }
      }

      watch(
        () => props.modelValue,
        val => {
          val = Number(val)
          modelValue.value = val
        }
      )

      watch(
        (): number => modelValue.value,
        (val): void => {
          let value: number = val

          reduceDisabled.value = value <= data.min
          plusDisabled.value = value >= data.max

          if (reduceDisabled.value) {
            value = data.min
          }

          if (plusDisabled.value) {
            value = data.max
          }

          if (data.precision) {
            value = setParseFloat(value)
          }

          emit('update:modelValue', value)
          emit('change', value)
        }
      )

      const { classList, styleList } = getInputNumber(props)

      let timer = ref<NodeJS.Timeout | undefined>()
      let timerOut = ref<NodeJS.Timeout | undefined>()
      const handleMouseDown = (event: MouseEvent, mode: Function): void => {
        mode()()
        timerOut.value = setTimeout(() => {
          if (timerOut.value) {
            clearTimeout(timerOut.value)
          }
          timer.value = setInterval(() => {
            mode()()
          }, 70)
        }, 700)
      }
      const clearTimer = (): void => {
        timer.value && clearInterval(timer.value as NodeJS.Timeout)
        timerOut.value && clearTimeout(timerOut.value as NodeJS.Timeout)
      }
      const handleMouseLeave = (): void => {
        clearTimer()
      }
      const handleMouseUp = (): void => {
        clearTimer()
      }

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
        handleInputChange,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <dk-button
      :disabled="disabled || reduceDisabled"
      :size="size"
      @click="reduce"
      @mousedown="handleMouseDown($event, () => reduce)"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
    >
      <dk-icon :size="iconSize" icon="IconReduce1"></dk-icon>
    </dk-button>
    <dk-input
      ref="input"
      :model-value="value"
      type="number"
      align="center"
      border="none"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      @change="handleInputChange"
    />
    <dk-button
      :disabled="disabled || plusDisabled"
      :size="size"
      @mousedown="handleMouseDown($event, () => plus)"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
    >
      <dk-icon :size="iconSize" icon="IconAdd1"></dk-icon>
    </dk-button>
  </div>
</template>
