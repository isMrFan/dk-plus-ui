<script lang="ts">
  interface markListJson {
    icon: string
    modelValue: boolean
  }
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
        IsNumberValue: 0,
        icon: 'IconStar',
        isMouseEnter: false,
        markList: [] as markListJson[]
      })
      if (typeof data.numberValue === 'string') {
        data.IsNumberValue = Number(data.numberValue)
      } else {
        data.IsNumberValue = data.numberValue
      }
      for (let index = 0; index < data.IsNumberValue; index++) {
        data.markList.push({
          icon: 'IconStar',
          modelValue: false
        })
      }
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
        handleClick: (item: markListJson, ind: number): void => {
          item.modelValue = !item.modelValue
          if (item.modelValue) {
            for (let index = 0; index < ind; index++) {
              data.markList[index].modelValue = true
              data.markList[index].icon = data.markList[index].modelValue
                ? 'IconStared'
                : 'IconStar'
            }
          } else {
            for (let index = ind; index < data.markList.length; index++) {
              data.markList[index].modelValue = false
              data.markList[index].icon = data.markList[index].modelValue
                ? 'IconStared'
                : 'IconStar'
            }
          }
          item.icon = item.modelValue ? 'IconStared' : 'IconStar'
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
  <div class="dk-rate">
    <dk-icon
      v-for="(item, ind) in markList"
      :key="ind"
      :icon="item.icon"
      @mouseenter="handleMouseEnter()"
      @mouseleave="handleMouseLeave()"
      @click="handleClick(item, ind)"
    ></dk-icon>
  </div>
</template>
