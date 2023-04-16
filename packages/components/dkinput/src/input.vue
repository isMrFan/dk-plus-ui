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
 * @property {boolean} clear  清空输入框
 * @property {string} updateValue  更新输入框值
 * @property {string} inputType  输入框类型
 * @property {string} disabledType  禁用类型
 * @property {string} clearableType  清空状态样式
 * @property {string} isClearable  清空按钮状态
 * @property {string} inputModeType  清空按钮状态
 * @property {string} prefixIconType  前缀图标状态
 */
import { defineComponent, computed, ref, reactive, onMounted } from "vue";
import { DKinput } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let {
      type = "default",
      placeholder = "",
      disabled,
      clearable,
      prefixIcon,
      suffixIcon,
    } = props;
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
    const inputModeType = computed(() => type === "number" ? "numeric" : "text");
    const disabledType = computed(() => disabled ? "dk-input-disabled" : "");
    const clearableType = computed(() => clearable ? suffixIcon ? "dk-input-clearable-suffix" : 'dk-input-clearable' : "");
    const isClearable = computed(() => clearable && modelValue.value);
    const modelValue = ref(props.modelValue);
    const clear = () => {
      modelValue.value = "";
      emit("update:modelValue", "");
    };
    const updateValue = (event: Event) => {
      let target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };

    const prefixIconType = computed(() => (prefixIcon ? "dk-input-prefix" : ""));
    const suffixIconType = computed(() => (suffixIcon ? "dk-input-suffix" : ""));
    const iconSuffix = computed(() => suffixIcon ? "dk-icon-clearable-suffix" : "");
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
      inputModeType,
      prefixIconType,
      prefixIcon,
      suffixIconType,
      suffixIcon,
      iconSuffix,
    };
  },
});
</script>

<template>
  <div class="dk-input">
    <input
      :class="[disabledType, clearableType, prefixIconType, suffixIconType]"
      v-model="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :type="inputType"
      autocomplete="off"
      :disabled="disabled"
      :inputmode="inputModeType"
      ref="inputRef"
    />
    <!-- 清空按钮 -->
    <dk-icon v-if="isClearable" @click="clear" :size="13" class="dk-icon-del1" :class="iconSuffix"></dk-icon>
    <!-- 前缀图标 -->
    <dk-icon
      v-if="prefixIcon"
      :size="13"
      class="dk-input-prefix-icon"
      :class="prefixIcon"
    ></dk-icon>
    <!-- 后缀图标 -->
    <dk-icon
      v-if="suffixIcon"
      :size="13"
      class="dk-input-suffix-icon"
      :class="suffixIcon"
    ></dk-icon>
  </div>
</template>
