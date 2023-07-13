<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @description input component
   * @function getNull Get string array length
   * @function getBooleanAnd Obtaining Results from Relationships
   * @function togglePassword Show or hide password
   * @example
   */
  import {
    defineComponent,
    computed,
    ref,
    shallowRef,
    nextTick,
    reactive,
    watch
  } from 'vue'
  import type {
    InputHTMLAttributes,
    ComputedRef,
    TextareaHTMLAttributes,
    SlotsType
  } from 'vue'
  // eslint-disable-next-line
  import { dkInputProps } from './props'
  import type { DkInputProps } from './props'
  import { getInputGlobal } from '../../_hooks'
  import {
    getInput,
    getBooleanAnd,
    getNull,
    getReturn,
    verifyInputType,
    getValue,
    getPendValue,
    setData
  } from '../../_hooks'
  import type { dkInputType } from '../../_interface'
  import type { propDataModel, pendType } from './type'

  // todo 泛型入参RawBindings 应该是setup的returnProps 杰哥你自行修改下 我不太清楚你返回的数据结构 故使用Record<string, unknown>临时处理
  export default defineComponent<
    typeof dkInputProps,
    Record<string, string>,
    string,
    SlotsType
  >({
    name: 'DkInput',
    props: dkInputProps,
    emits: ['update:modelValue', 'focus', 'blur'],
    setup(props: DkInputProps, { slots, emit }) {
      const { getInputType } = getInputGlobal(props)
      const { type = getInputType() } = props
      // console.log("🚀 ~ file: input.vue:58 ~ setup ~ type:", type)

      const input = shallowRef<HTMLInputElement>()
      const textarea = shallowRef<HTMLTextAreaElement>()
      const _ref = computed(() => input.value || textarea.value)
      const { styleList, wrapperClassList, innerClassList, pendStyleList } =
        getInput(props)
      const inputClassList = computed(() => getInput(props).classList)
      const modelValueProp = ref<string | number>(props.modelValue)
      const isFocus = ref<boolean>(false)

      const propData = reactive<propDataModel>({
        prependText: props.prependText,
        appendText: props.appendText,
        placeholder: props.placeholder,
        clearable: props.clearable,
        showPassword: props.showPassword,
        prependIcon: props.prependIcon,
        appendIcon: props.appendIcon,
        disabledProp: props.disabled,
        typeProp: props.type,
        prefixIcon: props.prefixIcon,
        suffixIcon: props.suffixIcon,
        maxlengthProp: props.maxlength,
        minlengthProp: props.minlength,
        autosizeProp: props.autosize,
        rowsProp: props.rows,
        readonlyProp: props.readonly,
        showLengthProp: props.showLength
      })

      const inputValue = ref<string | number>(props.modelValue)

      let passwordShowOrHide: boolean = false

      let inputType = ref<dkInputType>(
        verifyInputType(propData.typeProp, passwordShowOrHide)
      )

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

      // TODO:
      const data = setData(propData, slots, inputType.value, type)

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

      watch(
        () => props.modelValue,
        () => {
          inputValue.value = getValue(
            props.modelValue,
            propData.prependText,
            propData.prependIcon,
            propData.appendText,
            propData.appendIcon
          )
          modelValueProp.value = inputValue.value
        }
      )

      watch(
        () => inputValue.value,
        val => {
          const len = val.toString().length

          // maxlength
          if (propData.maxlengthProp) {
            lengthLimit.value = `${len}/${propData.maxlengthProp}`
          }

          // autoSize
          if (getTextareaRows().autosize) {
            const textarea = _ref.value as HTMLTextAreaElement
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight + 2}px`
          }

          // length-count
          if (data.showLength) {
            valueLength.value = len
          }
          if (propData.typeProp === 'number') {
            emit('update:modelValue', Number(val))
          } else {
            emit(
              'update:modelValue',
              getPendValue(
                props.modelValue,
                propData.prependText,
                propData.prependIcon,
                propData.appendText,
                propData.appendIcon
              )
            )
          }
        }
      )

      const update = (e: Event): void => {
        const target = e.target as HTMLInputElement
        inputValue.value = target.value
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

      // eslint-disable-next-line
      const focus = async (): Promise<void> => {
        await nextTick()
        _ref.value?.focus()
      }
      let showPasswordIcon = ref<string>('IconPasswordSee')
      const togglePassword = (): void => {
        passwordShowOrHide = !passwordShowOrHide
        showPasswordIcon.value = passwordShowOrHide
          ? 'IconPasswordShow'
          : 'IconPasswordSee'
        inputType.value = passwordShowOrHide ? 'text' : 'password'
        if (passwordShowOrHide) {
          _ref.value?.setAttribute('type', 'text')
        } else {
          _ref.value?.setAttribute('type', 'password')
        }
        focus()
      }

      const showPasswordClass = (): string[] => {
        return ['dk-input_password-icon']
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

      const getTextareaRows = (): Record<string, boolean | number> => {
        let row = 1

        const isTextarea = inputType.value === 'textarea'
        const isAutosize = propData.autosizeProp
        const rows = +propData.rowsProp
        const isRows = rows > 0

        if (isTextarea && isRows) {
          row = rows
        }

        return {
          row,
          autosize: isTextarea && isAutosize
        }
      }

      const inputAttrs = reactive({
        class: innerClassList.value,
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
        type: inputType.value as dkInputType | ComputedRef<dkInputType>,
        placeholder: propData.placeholder,
        onInput: update,
        onfocus,
        onblur,
        disabled: propData.disabledProp,
        maxlength: propData.maxlengthProp,
        minlength: propData.minlengthProp,
        autosize: propData.autosizeProp,
        rows: getTextareaRows().row,
        readonly: propData.readonlyProp
      } as TextareaHTMLAttributes)

      return {
        // ...propData,
        ...data,
        ...pendData,
        classList: inputClassList.value,
        styleList: { ...styleList.value },
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
        pendStyleList,
        AppendIconEventClick,
        PrependIconEventClick,
        onKeydownEnter,
        lengthLimit,
        isShowClear,
        valueLength,
        showPasswordIcon,
        inputType
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
        ref="input"
        v-model="value"
        :type="inputType"
        v-bind="inputAttrs"
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
        <dk-icon
          :class="showPasswordClass"
          :icon="showPasswordIcon"
          @click="togglePassword"
        ></dk-icon>
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
    <textarea ref="textarea" :type="inputType" v-bind="textareaAttrs"></textarea>
    <!-- length limit -->
    <template v-if="isLength">
      <span class="dk-input_textarea_length">
        {{ lengthLimit }}
      </span>
    </template>
    <!-- length -->
    <template v-if="showLength">
      <span class="dk-input_length">
        {{ valueLength }}
      </span>
    </template>
  </div>
</template>
