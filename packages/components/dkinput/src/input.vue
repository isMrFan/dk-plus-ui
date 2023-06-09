<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @description 输入框组件
   * @function getNull 获取字符串、数组长度
   * @function getBooleanAnd 获取布尔值
   * @example
   */
  import type { InputHTMLAttributes, ComputedRef, TextareaHTMLAttributes } from 'vue'
  import { defineComponent, computed, ref, shallowRef, nextTick, reactive } from 'vue'
  import { dkInputProps } from './props'
  import { getInputGlobal } from '../../_hooks'
  import { getInput, getBooleanAnd, getBooleanOr, getNull, getReturn } from '../../_hooks'
  import type { dkInputType } from '../../_interface'
  import type { propDataModel, dataType, pendType } from './type'

  export default defineComponent({
    name: 'DkInput',
    props: dkInputProps,
    emits: ['update:modelValue', 'focus', 'blur'],
    setup(props, { slots, emit }) {
      const { getInputType } = getInputGlobal(props)
      const { type = getInputType() } = props

      const input = shallowRef<HTMLInputElement>()
      const textarea = shallowRef<HTMLTextAreaElement>()
      const _ref = computed(() => input.value || textarea.value)
      const { styleList, wrapperClassList, innerClassList } = getInput(props)
      const inputClassList = computed(() => getInput(props).classList)
      const modelValueProp = ref<string | number>(props.modelValue)
      const isFocus = ref<boolean>(false)

      const inputValue = ref<string | number>(props.modelValue)

      const propData = reactive<propDataModel>({
        prependText: props.prependText,
        appendText: props.appendText,
        placeholder: props.placeholder,
        clearable: props.clearable,
        showPassword: props.showPassword,
        prependIcon: props.prependIcon,
        appendIcon: props.appendIcon,
        disabledProp: props.disabled,
        inputType: props.type,
        prefixIcon: props.prefixIcon,
        suffixIcon: props.suffixIcon,
        maxlengthProp: props.maxlength,
        minlengthProp: props.minlength,
        autosizeProp: props.autosize,
        rowsProp: props.rows,
        readonlyProp: props.readonly,
        showLengthProp: props.showLength
      })

      const passwordShowOrHide = ref<Boolean>(false)

      /**
       * @name verifyInputType 获取input类型
       * @returns {dkInputType}
       */
      const verifyInputType = (): dkInputType => {
        let inputType: dkInputType = propData.inputType
        if (propData.inputType === 'password') {
          if (passwordShowOrHide.value) {
            inputType = 'text'
          } else {
            inputType = 'password'
          }
        } else {
          inputType = propData.inputType
        }
        return inputType
      }

      /**
       * @name getIsClear 获取是否显示清除按钮
       * @returns {boolean}
       */
      const getIsClear = (): boolean => {
        let isClearable = propData.clearable
        let isDisabled = !propData.disabledProp
        let isTextarea = propData.inputType !== 'textarea'
        let isPassword = propData.inputType !== 'password'
        return getBooleanAnd([isDisabled, isTextarea, isPassword, isClearable])
      }

      const isShowLength = (): boolean => {
        const isLength = getBooleanOr([
          getNull(propData.maxlengthProp),
          getNull(propData.minlengthProp)
        ])
        return getBooleanAnd([isLength, !propData.disabledProp])
      }

      const getLength = (value: string | number = ''): string => {
        let lengthLimit = ''
        if (propData.maxlengthProp && propData.minlengthProp) {
          lengthLimit = `${propData.minlengthProp}/${propData.maxlengthProp}`
        } else if (propData.maxlengthProp) {
          lengthLimit = `${value.toString().length}/${propData.maxlengthProp}`
        } else if (propData.minlengthProp) {
          lengthLimit = `${propData.minlengthProp}`
        }
        return lengthLimit
      }

      const getshowLengthProp = (): boolean => {
        let result = false
        const isTextarea = propData.inputType === 'textarea'
        const isText = propData.inputType === 'text'
        const textOrTextarea = getBooleanOr([isTextarea, isText])
        const isMaxlength = !propData.maxlengthProp
        result = getBooleanAnd([textOrTextarea, isMaxlength])
        return result
      }

      const data = reactive<dataType>({
        inputType: verifyInputType(),
        isPrepend: getBooleanOr([
          !!slots.prepend,
          getNull(propData.prependText),
          !!propData.prependIcon
        ]),
        isPrependIcon: getBooleanAnd([getNull(propData.prependIcon), !slots.prepend]),
        isAppendIcon: getBooleanAnd([!slots.append, !!propData.appendIcon]),
        isAppend: getBooleanOr([
          !!slots.append,
          getNull(propData.appendText),
          !!propData.appendIcon
        ]),
        isPrefixIcon: getBooleanAnd([!!propData.prefixIcon, !slots.prefix]),
        isAppendTextLen: getNull(propData.appendText),
        isPrefix: getBooleanOr([!!slots.prefix, !!propData.prefixIcon]),
        isClear: getIsClear(),
        inputmode: type === 'number' ? 'numeric' : 'text',
        isSuffix: getBooleanOr([!!slots.suffix, !!propData.suffixIcon]),
        isSuffixIcon: getBooleanAnd([!!propData.suffixIcon, !slots.suffix]),
        isShowPassword: getBooleanAnd([type === 'password', propData.showPassword]),
        isLength: isShowLength(),
        rows: propData.rowsProp || 2,
        showLength: getshowLengthProp()
      })

      const isShowClear = computed((): boolean => getNull(inputValue.value))

      let lengthLimit = ref<string>(getLength())

      const pendData = reactive<pendType>({
        isPrependText: getBooleanAnd([
          !slots.prepend,
          getNull(propData.prependText),
          !data.isPrependIcon
        ]),
        isAppendText: getBooleanAnd([
          getNull(propData.appendText),
          !slots.append,
          !data.isAppendIcon
        ])
      })

      const prependClassList = (): string[] => ['dk-input_prepend', 'dk-input_pend']

      const appendClassList = (): string[] => ['dk-input_append', 'dk-input_pend']

      const valueLength = ref<number>(0)

      const pendStyleLis = (): {} => getInput(props).pendStyleList
      const update = (e: Event): void => {
        const target = e.target as HTMLInputElement
        inputValue.value = target.value

        // prependText | appendText
        let updateModelValue = modelValueProp.value
        if (propData.prependText && !propData.prependIcon) {
          updateModelValue = `${propData.prependText}${updateModelValue}`
        }
        if (propData.appendText && !propData.appendIcon) {
          updateModelValue = getLength()
        }

        // maxlength
        if (propData.maxlengthProp) {
          lengthLimit.value = `${target.value.length}/${propData.maxlengthProp}`
        }

        // autoSize
        if (getTextareaRows() !== 1) {
          const textarea = _ref.value as HTMLTextAreaElement
          textarea.style.height = 'auto'
          textarea.style.height = `${textarea.scrollHeight}px`
        }

        // length-count
        if (data.showLength) {
          valueLength.value = target.value.length
        }

        modelValueProp.value = target.value
        emit('update:modelValue', updateModelValue)
      }
      
      const prefixIconClass = (): string[] => {
        const isDefault = typeof propData.prefixIcon === 'boolean'
        return [
          'dk-input_prefix-icon',
          isDefault ? 'dk-icon-search' : propData.prefixIcon
        ]
      }

      const suffixIconClass = (): string[] => {
        const isDefault = typeof propData.suffixIcon === 'boolean'
        return [
          'dk-input_suffix-icon',
          isDefault ? 'dk-icon-search' : propData.suffixIcon
        ]
      }

      const clear = (): void => {
        modelValueProp.value = ''
        emit('update:modelValue', '')
        focus()
      }

      const focus = async(): Promise<void> => {
        await nextTick()
        _ref.value?.focus()
      }

      const togglePassword = (): void => {
        passwordShowOrHide.value = !passwordShowOrHide.value
        focus()
      }

      const showPasswordClass = (): string[] => {
        return [
          'dk-input_password-icon',
          passwordShowOrHide.value ? 'dk-icon-show' : 'dk-icon-hide'
        ]
      }

      const onfocus = (event: Event): void => {
        isFocus.value = true
        emit('focus', event)
      }

      const onblur = (event: Event): void => {
        isFocus.value = false
        emit('blur', event)
      }

      const { getRun } = getReturn()
      const AppendIconEventClick = (event: MouseEvent): void => {
        getRun(props.onAppendClick, event)
      }
      const PrependIconEventClick = (event: MouseEvent): void => {
        getRun(props.onPrependClick, event)
      }

      const onKeydownEnter = (event: KeyboardEvent): void => {
        if (event.which === 13) {
          getRun(props.onEnter, event)
        }
      }

      const getTextareaRows = (): number => {
        let row = 1
        const isRows = getBooleanAnd([
          !!propData.rowsProp,
          +propData.autosizeProp > 0,
          propData.inputType === 'textarea'
        ])
        if (isRows && +propData.rowsProp > 0) {
          row = +propData.rowsProp
        }
        return row
      }

      const inputAttrs = reactive({
        class: innerClassList.value,
        type: propData.inputType as dkInputType | ComputedRef<dkInputType>,
        placeholder: propData.placeholder,
        oninput: update,
        disabled: propData.disabledProp,
        inputmode: data.inputmode,
        onfocus,
        onblur,
        maxlength: propData.maxlengthProp,
        minlength: propData.minlengthProp,
        readonly: propData.readonlyProp
      } as InputHTMLAttributes)

      const textareaAttrs = reactive({
        class: wrapperClassList.value,
        type: propData.inputType as dkInputType | ComputedRef<dkInputType>,
        placeholder: propData.placeholder,
        onInput: update,
        onfocus,
        onblur,
        disabled: propData.disabledProp,
        maxlength: propData.maxlengthProp,
        minlength: propData.minlengthProp,
        autosize: propData.autosizeProp,
        rows: getTextareaRows(),
        readonly: propData.readonlyProp
      } as TextareaHTMLAttributes)
      return {
        // ...propData,
        ...data,
        ...pendData,
        classList: inputClassList.value,
        styleList,
        wrapperClassList,
        value: modelValueProp,
        inputAttrs: inputAttrs,
        prefixIconClass: prefixIconClass(),
        suffixIconClass: suffixIconClass(),
        clear,
        input,
        textarea,
        togglePassword,
        showPasswordClass: showPasswordClass(),
        textareaAttrs,
        prependClassList: prependClassList(),
        isAppend: data.isAppend,
        appendClassList: appendClassList(),
        pendStyleList: pendStyleLis(),
        AppendIconEventClick,
        PrependIconEventClick,
        onKeydownEnter,
        lengthLimit,
        isShowClear,
        valueLength
      }
    }
  })
</script>

<template>
  <div v-if="type !== 'textarea'" :class="classList" :style="styleList">
    <!-- append -->
    <template v-if="isPrepend">
      <div :class="prependClassList" :style="pendStyleList">
        <slot name="prepend"></slot>
        <dk-icon
          v-if="isPrependIcon"
          :icon="prependIcon"
          @click="PrependIconEventClick"
        ></dk-icon>
        <span v-if="isPrependText">{{ prependText }}</span>
      </div>
    </template>

    <!-- wrapper -->
    <div :class="wrapperClassList">
      <!-- prefix -->
      <template v-if="isPrefix">
        <span class="dk-input_prefix">
          <slot name="prefix" />
          <dk-icon
            v-if="isPrefixIcon"
            :class="prefixIconClass"
            :icon="prefixIcon"
            size="19px"
          ></dk-icon>
        </span>
      </template>

      <!-- inner -->
      <input
        v-bind="inputAttrs"
        ref="input"
        v-model="value"
        @keydown.enter="onKeydownEnter"
      />

      <!-- length-limit -->
      <template v-if="isLength">
        <span class="dk-input_length">
          {{ lengthLimit }}
        </span>
      </template>

      <!-- length -->
      <template v-if="showLength">
        <span class="dk-input_length">
          {{ valueLength }}
        </span>
      </template>

      <div v-if="isSuffix" class="dk-input_suffix">
        <slot name="suffix" />
        <dk-icon
          v-if="isSuffixIcon"
          :class="suffixIconClass"
          :icon="suffixIcon"
        ></dk-icon>
      </div>

      <!-- clearable -->
      <template v-if="isClear">
        <dk-icon
          v-show="isShowClear"
          class="dk-input-clearable"
          :icon="'IconShanchu1'"
          @click="clear"
        />
      </template>

      <!-- show-password -->
      <template v-if="isShowPassword">
        <dk-icon :class="showPasswordClass" @click="togglePassword"></dk-icon>
      </template>
    </div>

    <!-- prepend -->
    <template v-if="isAppend">
      <div :class="appendClassList" :style="pendStyleList">
        <slot name="append"></slot>
        <dk-icon
          v-if="isAppendIcon"
          :icon="appendIcon"
          @click="AppendIconEventClick"
        ></dk-icon>
        <span v-if="isAppendText">{{ appendText }}</span>
      </div>
    </template>
  </div>
  <div v-else :class="classList" :style="styleList">
    <textarea ref="textarea" v-bind="textareaAttrs"></textarea>
    <!-- length -->
    <template v-if="isLength">
      <span class="dk-input_textarea_length">
        {{ lengthLimit }}
      </span>
    </template>
  </div>
</template>
