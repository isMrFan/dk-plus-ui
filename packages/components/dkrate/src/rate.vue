<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  import { dkRateProps } from './props'
  export default defineComponent({
    name: 'DkRate',
    props: dkRateProps,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const data = reactive({
        modelValue: props.modelValue,
        numberValue: props.numberValue,
        icon: 'IconStar',
        isMouseEnter: false
      })
      console.log('data.numberValue', data.numberValue)
      const methods = {
        handleMouseEnter: (): void => {
          data.isMouseEnter = true
          methods.handleState()
        },
        handleMouseLeave: (): void => {
          if (data.modelValue) return
          data.isMouseEnter = false
          data.icon = 'IconStar'
        },
        handleClick: (): void => {
          data.icon = 'IconStar'
          emit('update:modelValue', !data.modelValue)
        },
        handleState: (): void => {
          data.icon = data.modelValue || data.isMouseEnter ? 'IconStared' : 'IconStar'
        }
      }

      watch(
        () => props.modelValue,
        val => {
          if (!val) {
            data.isMouseEnter = false
            // data.icon = 'IconStar'
          }
          console.log('props.modelValue', val)
          data.modelValue = val
          methods.handleState()
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
  <div
    class="dk-rate"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <dk-icon v-for="(item, ind) in numberValue" :key="ind" :icon="icon"></dk-icon>
  </div>
</template>
