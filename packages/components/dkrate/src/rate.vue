<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
  import { getReturn } from '../../_hooks'
  import { dkRateProps } from './props'
  import { isNumber } from '../../_utils'
  import { model_Value } from '../../_tokens'
  export default defineComponent({
    name: 'DkRate',
    props: dkRateProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const { getRun } = getReturn()
      const { numberValue, readonly, selectColor, noSelectColor } = toRefs(props)
      const data = reactive({
        modelValue: props.modelValue,
        numberValue: numberValue,
        readonly: readonly,
        selectColor: selectColor,
        noSelectColor: noSelectColor,
        IsNumberValue: 0,
        icon: 'IconStar',
        isMouseEnter: false,
        markList: computed((): number => (isNumber(numberValue) ? numberValue : 5))
      })
      const methods = {
        handleMouseEnter: (index: number): void => {
          if (props.readonly) return
          data.modelValue = index
          console.log(index,data.markList);
          
        },
        handleMouseLeave: (): void => {
          if (props.readonly) return
          data.modelValue = props.modelValue
        },
        handleClick: (ind: number): void => {
          if (props.readonly) return
          data.modelValue = ind
          emit(model_Value, data.modelValue)
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
      <!-- {{ modelValue }} -->
      <div
        v-for="(item, ind) in markList"
        :key="ind"
        :class="['dk-rate_star', { 'dk-rate_star-readonly': readonly }]"
        @mouseenter="handleMouseEnter(ind + 1)"
        @mouseleave="handleMouseLeave"
        @click="handleClick(ind)"
      >
        <dk-icon
          :icon="icon"
          :color="modelValue > ind ? selectColor : noSelectColor"
        ></dk-icon>
      </div>
    </div>
  </div>
</template>
