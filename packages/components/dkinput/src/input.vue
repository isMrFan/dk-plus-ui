<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @description 输入框组件
   * @example
   */
  import {
    defineComponent,
    computed,
    ref,
    nextTick,
    Ref,
    ComputedRef,
    watch,
    reactive,
    toRefs,
    toRaw,
InputHTMLAttributes
  } from 'vue'
  import { dkInputProps, haInputClass } from './props'
  import { getInputGlobal } from '../../_hooks'
  import { getInput } from '../../_hooks'

  export default defineComponent({
    name: 'DkInput',
    props: dkInputProps,
    emit: ['update:modelValue'],
    setup(props, { slots, emit }) {
      const { getInputType } = getInputGlobal(props)
      const { type = getInputType(), placeholder, clearable } = props

      const {
        classList,
        styleList,
        wrapperClassList,
        innerClassList,
        clearableClassList
      } = getInput(props)

      const CLASS_LIST = computed(() => getInput(props).classList)

      const MODEL_VALUE = ref<string | number>(props.modelValue)

      const update = (e: Event) => {
        const TARGET = e.target as HTMLInputElement
        MODEL_VALUE.value = TARGET.value
        emit('update:modelValue', MODEL_VALUE.value)
        console.log(IS_CLEAR.value);
        
      }

      const DISABLED = computed((): boolean => props.disabled)
      const PLACEHOLDER = ref<string | number>(placeholder)
      const INPUT_ATTRS = computed((): InputHTMLAttributes => {
        return {
          class: innerClassList.value,
          type,
          placeholder: PLACEHOLDER.value,
          onInput: update,
          disabled: DISABLED.value
        } as InputHTMLAttributes
      })

      const IS_CLEAR = computed(() => {
        return !!clearable && !!MODEL_VALUE.value && !DISABLED.value
      })
      
      return {
        classList: CLASS_LIST.value,
        styleList,
        wrapperClassList,
        value: MODEL_VALUE.value,
        inputAttrs: toRaw(INPUT_ATTRS.value),
        isClear: IS_CLEAR
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <div :class="wrapperClassList">
      <input v-model="value" v-bind="inputAttrs" />
      <template v-if="isClear">
        <dk-icon
        class="dk-icon-del1 dk-input-clearable"
        />
      </template>
    </div>
  </div>
  <!-- <div>
    <input type="textarea" />
  </div> -->
</template>

<style lang="scss"></style>
