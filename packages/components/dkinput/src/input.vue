<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @description 输入框组件
   * @example
   */
  import { defineComponent, computed, ref, toRaw, InputHTMLAttributes } from 'vue'
  import { dkInputProps } from './props'
  import { getInputGlobal } from '../../_hooks'
  import { getInput } from '../../_hooks'

  export default defineComponent({
    name: 'DkInput',
    props: dkInputProps,
    emit: ['update:modelValue'],
    setup(props, { slots, emit }) {
      const { getInputType } = getInputGlobal(props)
      const { type = getInputType(), placeholder, clearable } = props

      const { styleList, wrapperClassList, innerClassList } = getInput(props)

      const CLASS_LIST = computed(() => getInput(props).classList)

      const MODEL_VALUE = ref<string | number>(props.modelValue)

      const update = (e: Event) => {
        const TARGET = e.target as HTMLInputElement
        MODEL_VALUE.value = TARGET.value
        emit('update:modelValue', MODEL_VALUE.value)
        console.log(IS_CLEAR.value)
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

      const IS_CLEAR = computed(() => !!clearable && !DISABLED.value)

      const IS_PREFIX = computed(() => {
        return !!slots.prefix || !!props.prefixIcon
      })

      const IS_SHOW_CLEAR = computed(() => {
        return !!clearable && !!MODEL_VALUE.value && !DISABLED.value
      })

      const IS_PREFIX_ICON = computed(() => !!props.prefixIcon)

      const PREFIX_ICON_CLASS = computed(() => {
        const IS_DEFAULT = typeof props.prefixIcon === 'boolean'
        return ['dk-input_prefix-icon', IS_DEFAULT ? 'dk-icon-search' : props.prefixIcon]
      })

      const IS_SUFFIX = computed(() => {
        return !!slots.suffix || !!props.suffixIcon
      })

      const IS_SUFFIX_ICON = computed(() => !!props.suffixIcon)
      // console.log("🚀 ~ file: input.vue:91 ~ setup ~ IS_SUFFIX_ICON:", IS_SUFFIX_ICON.value, props.suffixIcon)

      const SUFFIX_ICON_CLASS = computed(() => {
        const IS_DEFAULT = typeof props.suffixIcon === 'boolean'
        return ['dk-input_suffix-icon', IS_DEFAULT ? 'dk-icon-search' : props.suffixIcon]
      })

      return {
        classList: CLASS_LIST.value,
        styleList,
        wrapperClassList,
        value: MODEL_VALUE.value,
        inputAttrs: toRaw(INPUT_ATTRS.value),
        isClear: IS_CLEAR,
        isShowClear: IS_SHOW_CLEAR,
        isPrefix: IS_PREFIX.value,
        isPrefixIcon: IS_PREFIX_ICON.value,
        prefixIconClass: PREFIX_ICON_CLASS.value,
        isSuffix: IS_SUFFIX.value,
        isSuffixIcon: IS_SUFFIX_ICON.value,
                 suffixIconClass: SUFFIX_ICON_CLASS.value
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <div :class="wrapperClassList">
      <template v-if="isPrefix">
        <span class="dk-input_prefix">
          <slot name="prefix" />
          <dk-icon v-if="isPrefixIcon" :class="prefixIconClass" size="13"></dk-icon>
        </span>
      </template>
      <input v-model="value" v-bind="inputAttrs" />
      <div v-if="isSuffix" class="dk-input_suffix">
        <slot name="suffix" />
        <dk-icon v-if="isSuffixIcon" :class="suffixIconClass"></dk-icon>
      </div>
      <template v-if="isClear">
        <dk-icon v-show="isShowClear" class="dk-icon-del1 dk-input-clearable" />
      </template>
    </div>
  </div>
  <!-- <div>
    <input type="textarea" />
  </div> -->
</template>

<style lang="scss"></style>
