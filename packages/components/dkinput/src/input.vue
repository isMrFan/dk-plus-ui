<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 输入框组件
 * @function getNull 获取字符串、数组长度
 * @function getBoolean 获取布尔值
 * @example
 */
import type { InputHTMLAttributes, ComputedRef, TextareaHTMLAttributes } from 'vue';
import { defineComponent, computed, ref, shallowRef, nextTick, reactive } from 'vue';
import { dkInputProps } from './props';
import { getInputGlobal } from '../../_hooks';
import { getInput } from '../../_hooks';
import type { dkInputType } from '../../_interface';
// import type { DkInputProps } from './props'

interface propDataModel {
  /** 前缀文本 */
  prependText: string,
  /** 后缀文本 */
  appendText: string,
  placeholder: string,
  clearable: boolean,
  showPassword: boolean,
  prependIcon: string,
  appendIcon: string,
  disabledProp: boolean,
  prefixIcon: string,
  inputType: dkInputType,
  suffixIcon: string
}

interface dataType {
  isPrepend: boolean,
  isPrependText: boolean,
  isAppendTextLen: boolean,
  isPrefix: boolean,
  isShowClear: boolean,
  isClear: boolean,
  inputType: dkInputType,
  inputmode: string,
  isPrefixIcon: boolean,
  isSuffix: boolean,
  isSuffixIcon: boolean,
  isShowPassword: boolean
}

export default defineComponent({
  name: 'DkInput',
  props: dkInputProps,
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { getInputType } = getInputGlobal(props);
    const { type = getInputType() } = props;

    const input = shallowRef<HTMLInputElement>();
    const _ref = computed(() => input.value);
    const { styleList, wrapperClassList, innerClassList } = getInput(props);
    const inputClassList = computed(() => getInput(props).classList);
    const modelValueProp = ref<string | number>(props.modelValue);
    const isFocus = ref<boolean>(false);

    const propData = reactive<propDataModel>({
      prependText: props.prependText,
      appendText: props.appendText,
      placeholder: props.placeholder,
      clearable: props.clearable,
      showPassword: props.showPassword,
      prependIcon: props.prependIcon,
      appendIcon: props.appendIcon,
      disabledProp: props.disabled,
      prefixIcon: props.prefixIcon,
      inputType: props.type,
      suffixIcon: props.suffixIcon
    })

    /**
     * @name getNull 获取字符串、数组长度
     * @param {string | array} target 
     * @returns {boolean}
     */
    const getNull = (target: string | [] | number): boolean => {
      if (Array.isArray(target)) {
        if (target.length === 0) 
        return false
      } else {
        target = target.toString().trim()
        if(typeof target === 'string') {
          if (target.length === 0) 
          return false
        }
      }
      return true
    }

    /** 
     * @name getBoolean 获取布尔值 与
     * @param {boolean[]} target
     * @returns {boolean}
     */
    const getBoolean = (target: boolean[]): boolean => {
      if(target.length == 0) return false
      let i = 0;
      while (!target[i]) {
        return false
      }
      i++
      return true
    }

    /**
     * @name getBooleanOr 获取或
     * @param {boolean[]} target
     * @returns {boolean}
     */
    const getBooleanOr = (target: boolean[]): boolean => {
      if(target.length == 0) return false
      let i = 0;
      while (target[i]) {
        return true
      }
      i++
      return false
    }

    // const inputType = computed((): dkInputType | ComputedRef<dkInputType> => {
    //   return type === 'password' ? passwordShowOrHide.value ? 'text' : 'password' : type;
    // });

    /**
     * @name verifyInputType 获取input类型
     * @returns {dkInputType}
     */
    const verifyInputType = (): dkInputType => {
      let inputType: dkInputType = propData.inputType;
      if (propData.inputType === 'password') {
        if(passwordShowOrHide.value) {
          inputType = 'text'
        } else {
          inputType = 'password'
        }
      } else {
        inputType = propData.inputType
      }
      return inputType;
    }

    /**
     * @name getIsClear 获取是否显示清除按钮
     * @returns {boolean}
     */
    const getIsClear = (): boolean => {
      let isClearable = propData.clearable;
      let isDisabled = !propData.disabledProp;
      let isTextarea = propData.inputType !== 'textarea';
      let isPassword = propData.inputType !== 'password';
      return getBoolean([isDisabled, isTextarea, isPassword, isClearable]);
    }

    const data = reactive<dataType>({
      inputType: verifyInputType(),
      isPrepend: getBoolean([getNull(propData.prependText), !!propData.prependIcon]),
      isPrependText: getNull(propData.prependText) && !propData.prependIcon,
      isAppendTextLen: getNull(propData.appendText),
      isPrefix: getBooleanOr([!!slots.prefix, !!propData.prefixIcon]),
      isShowClear: getNull(modelValueProp.value),
      isClear: getIsClear(),
      inputmode: type === 'number' ? 'numeric' : 'text',
      isPrefixIcon: getBoolean([!!propData.prefixIcon]),
      isSuffix: getBooleanOr([!!slots.suffix, !!propData.suffixIcon]),
      isSuffixIcon: getBoolean([!!propData.suffixIcon]),
      isShowPassword: getBoolean([type === 'password', propData.showPassword])
    })
    
    const prependClassList = computed((): string[] => ['dk-input_prepend', 'dk-input_pend']);

    const isAppend = computed((): boolean => {
      return data.isAppendTextLen || !!propData.appendIcon;
    })
    const appendClassList = computed((): string[] => ['dk-input_append', 'dk-input_pend']);
    const isAppendText = computed((): boolean => {
      return data.isAppendTextLen && !propData.appendIcon;
    })

    const pendStyleLis = computed(() => getInput(props).pendStyleList);
    const update = (e: Event): void => {
      let updateModelValue = modelValueProp.value
      if (propData.prependText && !propData.prependIcon) {
        updateModelValue = `${propData.prependText}${updateModelValue}`
      }
      if (propData.appendText && !propData.appendIcon) {
        updateModelValue = `${updateModelValue}${propData.appendText}`
      }

      const target = e.target as HTMLInputElement;
      modelValueProp.value = target.value;
      emit('update:modelValue', updateModelValue);
    };

    const passwordShowOrHide = ref<Boolean>(false);

    const prefixIconClass = (): string[] => {
      const isDefault = typeof props.prefixIcon === 'boolean';
      return ['dk-input_prefix-icon', isDefault ? 'dk-icon-search' : props.prefixIcon];
    };

    const suffixIconClass = (): string[] => {
      const isDefault = typeof props.suffixIcon === 'boolean';
      return ['dk-input_suffix-icon', isDefault ? 'dk-icon-search' : props.suffixIcon];
    };

    const clear = (): void => {
      modelValueProp.value = '';
      emit('update:modelValue', '');
      focus();
    };

    const focus = async(): Promise<void> => {
      await nextTick()
      _ref.value?.focus();
    };

    const togglePassword = (): void => {
      passwordShowOrHide.value = !passwordShowOrHide.value;
      focus();
    }

    const showPasswordClass = (): string[] => {
      return ['dk-input_password-icon', passwordShowOrHide.value ? 'dk-icon-show' : 'dk-icon-hide'];
    }

    const onfocus = (): void => {
      isFocus.value = true;
    }

    const onblur = (): void => {
      isFocus.value = false;
    }

    const inputAttrs = reactive({
      class: innerClassList.value,
      type: propData.inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: propData.placeholder,
      oninput: update,
      disabled: propData.disabledProp,
      inputmode: data.inputmode,
      onfocus,
      onblur
    } as InputHTMLAttributes);

    const textareaAttrs = reactive({
      class: wrapperClassList.value,
      type: propData.inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: propData.placeholder,
      onInput: update,
      disabled: propData.disabledProp
    } as TextareaHTMLAttributes);
    return {
      classList: inputClassList.value,
      styleList,
      wrapperClassList,
      value: modelValueProp,
      inputAttrs: inputAttrs,
      isClear: data.isClear,
      isShowClear: data.isShowClear,
      isPrefix: data.isPrefix,
      isPrefixIcon: data.isPrefixIcon,
      prefixIconClass: prefixIconClass(),
      isSuffix: data.isSuffix,
      isSuffixIcon: data.isSuffixIcon,
      suffixIconClass: suffixIconClass(),
      clear,
      input: input,
      isShowPassword: data.isShowPassword,
      togglePassword,
      showPasswordClass: showPasswordClass(),
      textareaAttrs,

      isPrepend: data.isPrepend,
      prependTextProp: propData.prependText,
      prependClassList: prependClassList.value,
      isPrependText: data.isPrependText,
      isPrependIcon: !!propData.prependIcon,
      prependIconProp: propData.prependIcon,

      isAppend: isAppend.value,
      appendTextProp: propData.appendText,
      appendClassList: appendClassList.value,
      pendStyleList: pendStyleLis.value,
      isAppendText: isAppendText.value,
      isAppendIcon: !!propData.appendIcon,
      appendIconProp: propData.appendIcon
    };
  }
});
</script>

<template>
  <div v-if="type !== 'textarea'" :class="classList" :style="styleList">
    <!-- append -->
    <template v-if="isPrepend">
      <div :class="prependClassList" :style="pendStyleList">
        <span v-if="isPrependText">{{ prependTextProp }}</span>
        <dk-icon v-if="isPrependIcon" :class="prependIconProp"></dk-icon>
      </div>
    </template>

    <!-- wrapper -->
    <div :class="wrapperClassList">
      <!-- prefix -->
      <template v-if="isPrefix">
        <span class="dk-input_prefix">
          <slot name="prefix" />
          <dk-icon v-if="isPrefixIcon" :class="prefixIconClass" size="16"></dk-icon>
        </span>
      </template>

      <!-- inner -->
      <input v-bind="inputAttrs" ref="input" v-model="value" />

      <div v-if="isSuffix" class="dk-input_suffix">
        <slot name="suffix" />
        <dk-icon v-if="isSuffixIcon" :class="suffixIconClass"></dk-icon>
      </div>

      <!-- clearable -->
      <template v-if="isClear">
        <dk-icon v-show="isShowClear" class="dk-icon-del1 dk-input-clearable" @click="clear" />
      </template>

      <!-- show-password -->
      <template v-if="isShowPassword">
        <dk-icon :class="showPasswordClass" @click="togglePassword"></dk-icon>
      </template>
    </div>
    
    <!-- prepend -->
    <template v-if="isAppend">
      <div :class="appendClassList" :style="pendStyleList">
        <span v-if="isAppendText">{{ appendTextProp }}</span>
        <dk-icon v-if="isAppendIcon" :class="appendIconProp"></dk-icon>
      </div>
    </template>
  </div>
  <div v-else :class="classList">
    <textarea v-bind="textareaAttrs"></textarea>
  </div>
</template>

<style lang="scss"></style>
