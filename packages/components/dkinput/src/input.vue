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
import type { InputHTMLAttributes, ComputedRef, TextareaHTMLAttributes } from 'vue';
import { defineComponent, computed, ref, shallowRef, nextTick, reactive } from 'vue';
import { dkInputProps } from './props';
import { getInputGlobal } from '../../_hooks';
import { getInput, getBooleanAnd, getBooleanOr, getNull,getReturn } from '../../_hooks';
import type { dkInputType } from '../../_interface';
import type { propDataModel, dataType, pendType } from './type';

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
    });
    
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
      return getBooleanAnd([isDisabled, isTextarea, isPassword, isClearable]);
    }

    const data = reactive<dataType>({
      inputType: verifyInputType(),
      isPrepend: getBooleanOr([getNull(propData.prependText), !!propData.prependIcon]),
      isPrependIcon: getBooleanAnd([getNull(propData.prependIcon), !slots.prepend]),
      isAppendIcon: getBooleanAnd([!slots.append, !!propData.appendIcon]),
      isAppend: getBooleanOr([getNull(propData.appendText), !!propData.appendIcon]),
      isPrefixIcon: getBooleanAnd([!!propData.prefixIcon]),
      isAppendTextLen: getNull(propData.appendText),
      isPrefix: getBooleanOr([!!slots.prefix, !!propData.prefixIcon]),
      isShowClear: getNull(modelValueProp.value),
      isClear: getIsClear(),
      inputmode: type === 'number' ? 'numeric' : 'text',
      isSuffix: getBooleanOr([!!slots.suffix, !!propData.suffixIcon]),
      isSuffixIcon: getBooleanAnd([!!propData.suffixIcon]),
      isShowPassword: getBooleanAnd([type === 'password', propData.showPassword])
    })
    
    const pendData = reactive<pendType>({
      isPrependText: getBooleanAnd([!slots.prepend, getNull(propData.prependText), !data.isPrependIcon]),
      isAppendText: getBooleanAnd([getNull(propData.appendText), !slots.append, !data.isAppendIcon])
    })
    
    const prependClassList = (): string[] => ['dk-input_prepend', 'dk-input_pend'];

    const appendClassList = (): string[] => ['dk-input_append', 'dk-input_pend'];

    const pendStyleLis = (): {} => getInput(props).pendStyleList;
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

    const { getRun } = getReturn()
    const AppendIconEventClick = (event: MouseEvent): void => {
      getRun(props.onAppendClick, event)
    }
    const PrependIconEventClick = (event: MouseEvent): void => {
      getRun(props.onPrependClick, event)
    }

    const onKeydownEnter = (event: KeyboardEvent): void => {
      if (event.which === 13) {
        console.log('enter');
        getRun(props.onEnter, event)
      }
      // getRun(props.onEnter, event)

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
      ...propData,
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
      togglePassword,
      showPasswordClass: showPasswordClass(),
      textareaAttrs,
      prependClassList: prependClassList(),
      isAppend: data.isAppend,
      appendClassList: appendClassList(),
      pendStyleList: pendStyleLis(),
      AppendIconEventClick,
      PrependIconEventClick,
      onKeydownEnter
    };
  }
});
</script>

<template>
  <div v-if="type !== 'textarea'" :class="classList" :style="styleList">
    <!-- append -->
    <template v-if="isPrepend">
      <div :class="prependClassList" :style="pendStyleList">
        <slot name="prepend"></slot>
        <dk-icon v-if="isPrependIcon" :icon="prependIcon" @click="PrependIconEventClick"></dk-icon>
        <span v-if="isPrependText">{{ prependText }}</span>
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
      <input v-bind="inputAttrs" ref="input" v-model="value" @keydown.enter="onKeydownEnter" />

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
        <slot name="append"></slot>
        <dk-icon v-if="isAppendIcon" :icon="appendIcon" @click="AppendIconEventClick"></dk-icon>
        <span v-if="isAppendText">{{ appendText }}</span>
      </div>
    </template>
  </div>
  <div v-else :class="classList">
    <textarea v-bind="textareaAttrs"></textarea>
  </div>
</template>
