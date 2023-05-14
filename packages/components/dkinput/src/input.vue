<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 输入框组件
 * @example
 */
import { defineComponent, computed, ref, nextTick, Ref, ComputedRef, watch, reactive, toRefs, toRaw } from "vue";
import { dkInputProps, haInputClass } from "./props";
import { getInputGlobal } from "../../_hooks";
import { getInput } from "../../_hooks";




export default defineComponent({
  name: "DkInput",
  props: dkInputProps,
  emit: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { getInputType } = getInputGlobal(props);
    const { type = getInputType(), placeholder } = props;
    
    const { classList, styleList, wrapperClassList, innerClassList } = getInput(props)

    const MODEL_VALUE = ref<string | number>(props.modelValue);

    const update = (e: Event) => {
      const TARGET = e.target as HTMLInputElement;
      MODEL_VALUE.value = TARGET.value;
      emit('update:modelValue', MODEL_VALUE.value);
    };

    const DISABLED = computed((): boolean => props.disabled)
    const PLACEHOLDER = ref<string | number>(placeholder)
    const INPUT_ATTRS = computed(() => {
      return {
          class: innerClassList.value,
          type,
          placeholder: PLACEHOLDER.value,
          onInput: update,
          disabled: DISABLED.value,
      }
    })
    
    const CLASS_LIST = computed(() => getInput(props).classList)
    
    return {
      classList: CLASS_LIST.value,
      styleList,
      wrapperClassList,
      value: MODEL_VALUE.value,
      inputAttrs: toRaw(INPUT_ATTRS),
    };
  }
});
</script>

<template>
  <div :class="classList" :style="styleList">
    <div :class="wrapperClassList">
      <input v-model="value" :...="inputAttrs" />
    </div>
  </div>
  <!-- <div>
    <input type="textarea" />
  </div> -->
</template>

<style lang="scss"></style>
