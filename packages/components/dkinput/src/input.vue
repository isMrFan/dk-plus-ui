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
      appendIcon: props.appendIcon
    })

    /**
     * @name getNull 获取字符串、数组长度
     * @param {string | array} target 
     * @returns {boolean}
     */
    const getNull = (target: string | []): boolean => {
      if (Array.isArray(target)) {
        if (target.length === 0) 
          return false
      }
      if(typeof target === 'string') {
        if (target.length === 0) 
          return false
      }
      return true
    }

    /** 
     * @name getBoolean 获取布尔值
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

    // const 
    
    const isPrepend = computed((): boolean => {
      return getBoolean([getNull(propData.prependText), !!propData.prependIcon])
      // return getNull(propData.prependText) || !!propData.prependIcon
    })
    const prependClassList = computed((): string[] => ['dk-input_prepend', 'dk-input_pend']);
    const isPrependText = computed((): boolean => {
      return getNull(propData.prependText) && !propData.prependIcon
    })

    const isAppendTextLen = computed((): boolean => {
      return propData.appendText.toString().length > 0
    });
    const isAppend = computed((): boolean => {
      return isAppendTextLen.value || !!propData.appendIcon;
    })
    const appendClassList = computed((): string[] => ['dk-input_append', 'dk-input_pend']);
    const isAppendText = computed((): boolean => {
      return isAppendTextLen.value && !propData.appendIcon;
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

    const disabledProp = computed((): boolean => props.disabled);

    const passwordShowOrHide = ref<Boolean>(false);

    const inputType = computed((): dkInputType | ComputedRef<dkInputType> => {
      return type === 'password' ? passwordShowOrHide.value ? 'text' : 'password' : type;
    });

    const inputmode = computed((): string => {
      return type === 'number' ? 'numeric' : 'text';
    });

    const isClear = computed((): boolean => {
      let isClearable = propData.clearable;
      let isDisabled = !disabledProp.value;
      let isTextarea = inputType.value !== 'textarea';
      let isPassword = inputType.value !== 'password';
      return isClearable && isDisabled && isTextarea && isPassword
    });

    const isPrefix = computed(() => {
      return !!slots.prefix || !!props.prefixIcon;
    });

    const isShowClear = computed(() => {
      let hasValue = modelValueProp.value.toString().length > 0;
      return hasValue;
    });

    const isPrefixIcon = computed(() => !!props.prefixIcon);

    const prefixIconClass = computed(() => {
      const isDefault = typeof props.prefixIcon === 'boolean';
      return ['dk-input_prefix-icon', isDefault ? 'dk-icon-search' : props.prefixIcon];
    });

    const isSuffix = computed(() => {
      return !!slots.suffix || !!props.suffixIcon;
    });

    const isSuffixIcon = computed(() => !!props.suffixIcon);
    const suffixIconClass = computed(() => {
      const isDefault = typeof props.suffixIcon === 'boolean';
      return ['dk-input_suffix-icon', isDefault ? 'dk-icon-search' : props.suffixIcon];
    });

    const clear = (): void => {
      modelValueProp.value = '';
      emit('update:modelValue', '');
      focus();
    };

    const focus = async(): Promise<void> => {
      await nextTick()
      _ref.value?.focus();
    };

    const isShowPassword = computed((): boolean => {
      return type === 'password' && propData.showPassword;
    })

    const togglePassword = (): void => {
      passwordShowOrHide.value = !passwordShowOrHide.value;
      focus();
    }

    const showPasswordClass = computed((): string[] => {
      return ['dk-input_password-icon', passwordShowOrHide.value ? 'dk-icon-show' : 'dk-icon-hide'];
    })

    const onfocus = (): void => {
      isFocus.value = true;
    }

    const onblur = (): void => {
      isFocus.value = false;
    }

    const inputAttrs = reactive({
      class: innerClassList.value,
      type: inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: propData.placeholder,
      oninput: update,
      disabled: disabledProp.value,
      inputmode: inputmode.value,
      onfocus,
      onblur
    } as InputHTMLAttributes);

    const textareaAttrs = reactive({
      class: wrapperClassList.value,
      type: inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: propData.placeholder,
      onInput: update,
      disabled: disabledProp.value
    } as TextareaHTMLAttributes);
    return {
      classList: inputClassList.value,
      styleList,
      wrapperClassList,
      value: modelValueProp,
      inputAttrs: inputAttrs,
      isClear,
      isShowClear,
      isPrefix: isPrefix.value,
      isPrefixIcon: isPrefixIcon.value,
      prefixIconClass: prefixIconClass.value,
      isSuffix: isSuffix.value,
      isSuffixIcon: isSuffixIcon.value,
      suffixIconClass: suffixIconClass.value,
      clear,
      input: input,
      isShowPassword: isShowPassword.value,
      togglePassword,
      showPasswordClass,
      textareaAttrs,

      isPrepend: isPrepend.value,
      prependTextProp: propData.prependText,
      prependClassList: prependClassList.value,
      isPrependText: isPrependText.value,
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
