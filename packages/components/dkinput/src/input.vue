<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @property {string} type  输入框类型
 * @property {string} placeholder  输入框占位符
 * @property {boolean} disabled  是否禁用
 * @property {boolean} clearable  是否可清空
 * @property {string} modelValue  输入框值
 * @property {function} clear  清空输入框
 * @property {function} updateValue  更新输入框值
 * @property {function} inputType  输入框类型
 * @property {function} disabledType  禁用类型
 * @property {function} clearableType  清空状态样式
 * @property {function} isClearable  清空按钮状态
 */
import { defineComponent, computed, ref, reactive } from "vue";
import { DKinput } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let { type = "default", placeholder = "", disabled, clearable } = props;
    const inputType = computed(() => {
      type === "" ? (type = "default") : "";
      const list: Array<string> = [];
      const classType = {
        number: "number",
        password: "password",
        default: "text",
      };
      type classTypeObj = typeof classType;
      type objType = keyof classTypeObj;
      let resClass: classTypeObj[objType] = classType[type];
      list.push(resClass);
      return resClass;
    });
    const disabledType = computed(() => {
      return disabled ? "dk-input-disabled" : "";
    });
    const clearableType = computed(() => {
      return clearable ? "dk-input-clearable" : "";
    });
    const isClearable = computed(() => {
      return clearable && props.modelValue ? true : false;
    });
    const modelValue = ref(props.modelValue);
    const clear = () => {
      modelValue.value = "";
      emit("update:modelValue", "");
    };
    const updateValue = (event: Event) => {
      let target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };
    return {
      inputType,
      placeholder,
      disabledType,
      disabled,
      clearableType,
      isClearable,
      clear,
      updateValue,
      modelValue,
    };
  },
});
</script>

<template>
  <div class="dk-input">
    <input
      :class="[disabledType, clearableType]"
      v-model="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :type="inputType"
      autocomplete="off"
      :disabled="disabled"
    />
    <dk-icon v-if="isClearable" @click="clear" :size="13" class="dk-icon-del1"></dk-icon>
  </div>
</template>
