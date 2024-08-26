<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
  import { getReturn } from '../../_hooks'
  import { dkRateProps } from './props'
  import { isNumber } from '../../_utils'
  import { model_Value } from '../../_tokens'
  export default defineComponent({
    name: 'DkRate',
    props: dkRateProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const { getRun } = getReturn()
      const { numberValue, disabled, selectColor, noSelectColor, showScore, showText } = toRefs(props)
      const data = reactive({
        modelValue: props.modelValue,
        numberValue: numberValue,
        disabled: disabled,
        selectColor: selectColor,
        noSelectColor: noSelectColor,
        IsNumberValue: 0,
        icon: 'IconStar',
        isMouseEnter: false,
        markList: computed((): number => (isNumber(numberValue.value) ? numberValue.value : 5)),
        showScore: showScore,
        showText: showText
      })
      
      const methods = {
        handleMouseEnter: (index: number): void => {
          if (props.disabled) return
          data.modelValue = index
        },
        handleMouseLeave: (): void => {
          if (props.disabled) return
          data.modelValue = props.modelValue
        },
        handleClick: (ind: number): void => {
          if (props.disabled) return
          data.modelValue = ind
          emit(model_Value, data.modelValue + 1)
          emit('change', data.modelValue + 1)
          getRun(props.onchange, ind)
        }
      }

      watch(
        () => props.modelValue, // 监听的值
        val => {
          data.modelValue = val
        },
        {
          immediate: true
        }
      )
      return {
        ...toRefs(data),
        ...methods
      }
    }
  })
</script>
<template>
  <div class="dk-rate" role="slider">
    <div class="dk-rate_list">
      <div
        v-for="(item, ind) in markList"
        :key="ind"
        :class="['dk-rate_star', { 'dk-rate_star-disabled': disabled }]"
        @mouseenter="handleMouseEnter(ind + 1)"
        @mouseleave="handleMouseLeave"
        @click="handleClick(ind)"
      >
        <dk-icon
          :icon="ind < modelValue ? 'IconStared' : 'IconStar'"
        ></dk-icon>
      </div>
    </div>
    <span v-if="showScore" class="dk-rate__text">{{ modelValue }}</span>
    <span v-if="showText" class="dk-rate__text">{{ showText[modelValue - 1] }}</span>
  </div>
</template>
