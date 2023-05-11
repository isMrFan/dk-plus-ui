<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 输入框组件
 * @example
 */
import { defineComponent, computed, ref, nextTick, Ref, ComputedRef, watch } from "vue";
import { dkInputProps, haInputClass } from "./props";
import { getInputGlobal } from "../../_hooks";
import { getInput } from "../../_hooks";
import { log } from "console";

export default defineComponent({
  name: "DkInput",
  props: dkInputProps,
  emit: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { getInputType } = getInputGlobal(props);
    const { classList, styleList, wrapperClassList, innerClassList } = getInput(props);
    const { type = getInputType(), placeholder, disabled } = props;

    const MODEL_VALUE = ref<string | number>(props.modelValue);

    const update = (e: Event) => {
      const TARGET = e.target as HTMLInputElement;
      MODEL_VALUE.value = TARGET.value;
      emit('update:modelValue', MODEL_VALUE.value);
    };

    const IS_DISABLED = ref<boolean>(disabled)

    const PLACEHOLDER = ref<string | number>(placeholder)
    const INPUT_ATTRS = computed(() => {
      return {
        type,
        placeholder: PLACEHOLDER.value,
        onInput: update,
        class: innerClassList.value,
        disabled: IS_DISABLED.value,
      };
    });
    
    return {
      classList,
      styleList,
      wrapperClassList,
      value: MODEL_VALUE.value,
      inputAttrs: INPUT_ATTRS.value,
    };
  },
});
</script>

<template>
  <div :class="classList" :style="styleList">
    <div :class="wrapperClassList">
      <input v-model="value" v-bind="inputAttrs" />
    </div>
  </div>
  <!-- <div>
    <input type="textarea" />
  </div> -->
</template>
