<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 输入框组件
 * @example
 */
import type { InputHTMLAttributes, ComputedRef, TextareaHTMLAttributes } from 'vue';
import { defineComponent, computed, ref, shallowRef, nextTick, reactive } from 'vue';
import { dkInputProps } from './props';
import { getInputGlobal } from '../../_hooks';
import { getInput } from '../../_hooks';
import type { dkInputType } from '../../_interface';

export default defineComponent({
  name: 'DkInput',
  props: dkInputProps,
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { getInputType } = getInputGlobal(props);
    const { type = getInputType(), placeholder, clearable, showPassword, append, prepend } = props;

    const input = shallowRef<HTMLInputElement>();
    const _ref = computed(() => input.value);
    const { styleList, wrapperClassList, innerClassList } = getInput(props);
    const inputClassList = computed(() => getInput(props).classList);
    const modelValueProp = ref<string | number>(props.modelValue);
    const isFocus = ref<boolean>(false);
    const prependMain = ref<string | number>(prepend);
    const appendMain = ref<string | number>(append);

    const update = (e: Event): void => {
      let updateModelValue = modelValueProp.value
      if (prependMain.value) {
        updateModelValue = `${prependMain.value}${updateModelValue}`
      }
      if (appendMain.value) {
        updateModelValue = `${updateModelValue}${appendMain.value}`
      }

      const target = e.target as HTMLInputElement;
      modelValueProp.value = target.value;
      emit('update:modelValue', updateModelValue);
    };

    const disabledProp = computed((): boolean => props.disabled);

    const placeholderProp = ref<string | number>(placeholder);

    const passwordShowOrHide = ref<Boolean>(false);

    const inputType = computed((): dkInputType | ComputedRef<dkInputType> => {
      return type === 'password' ? passwordShowOrHide.value ? 'text' : 'password' : type;
    });

    const inputmode = computed((): string => {
      return type === 'number' ? 'numeric' : 'text';
    });

    const textareaAttrs = reactive({
      class: wrapperClassList.value,
      type: inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: placeholderProp.value,
      onInput: update,
      disabled: disabledProp.value
    } as TextareaHTMLAttributes);

    const isClear = computed(() => !!clearable && !disabledProp.value);

    const isPrefix = computed(() => {
      return !!slots.prefix || !!props.prefixIcon;
    });

    const isShowClear = computed(() => {
      return !!clearable && !!modelValueProp.value && !disabledProp.value;
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
      return type === 'password' && !!showPassword;
    })

    const togglePassword = (): void => {
      passwordShowOrHide.value = !passwordShowOrHide.value;
      focus();
    }

    const showPasswordClass = computed((): string[] => {
      return ['dk-input_password-icon', passwordShowOrHide.value ? 'dk-icon-show' : 'dk-icon-hide'];
    })

    const isPrepend = computed((): boolean => {
      return !!prepend || !!slots.prepend
    })
    const isAppend = computed((): boolean => {
      return !!append || !!slots.append;
    })
    const appendClassList = computed((): string[] => ['dk-input_append', 'dk-input_pend']);
    const prependClassList = computed((): string[] => ['dk-input_prepend', 'dk-input_pend']);

    const pendStyleLis = computed(() => getInput(props).pendStyleList);

    const onfocus = (): void => {
      console.log('onfocus');
      
      isFocus.value = true;
    }

    const onblur = (): void => {
      isFocus.value = false;
    }

    const inputAttrs = reactive({
      class: innerClassList.value,
      type: inputType as dkInputType | ComputedRef<dkInputType>,
      placeholder: placeholderProp.value,
      oninput: update,
      disabled: disabledProp.value,
      inputmode: inputmode.value,
      onfocus,
      onblur
    } as InputHTMLAttributes);
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
      prependMain: prependMain.value,
      isAppend: isAppend.value,
      appendMain: appendMain.value,
      prependClassList: prependClassList.value,
      appendClassList: appendClassList.value,
      pendStyleList: pendStyleLis.value
    };
  }
});
</script>

<template>
  <div v-if="type !== 'textarea'" :class="classList" :style="styleList">
    <!-- append -->
    <template v-if="isPrepend">
      <div :class="prependClassList" :style="pendStyleList">
        <span>{{ prependMain }}</span>
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
        <span>{{ appendMain }}</span>
      </div>
    </template>
  </div>
  <div v-else :class="classList">
    <textarea v-bind="textareaAttrs"></textarea>
  </div>
</template>

<style lang="scss"></style>
