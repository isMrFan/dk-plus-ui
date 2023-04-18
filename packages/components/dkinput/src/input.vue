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
 * @property {string} suffixIconType  后缀图标状态
 * @property {string} iconSuffix  后缀且清空按钮状态
 * @property {string} prefixIcon  前缀图标
 * @property {string} suffixIcon  后缀图标
 * @property {string} prefixClick  前缀点击事件
 * @property {string} hasPrefixSlot  前缀插槽状态
 * @property {string} isPrefixBind  前缀插槽状态 与 前缀图标状态 插槽优先于图标
 * @property {string} prefix  前缀插槽
 * @property {string} suffix  后缀插槽
 * @property {string} hasSuffixSlot  后缀插槽状态
 * @property {string} isSuffixBind  后缀插槽状态 与 后缀图标状态 插槽优先于图标
 * @property {number, string} rows  多行输入框行数
 * @property {boolean} autosize  自适应内容高度，只对 type="textarea" 有效
 */
import { defineComponent, computed, ref } from "vue";
import { DKinput } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    let {
      type = "default",
      placeholder = "",
      disabled,
      clearable,
      prefixIcon,
      suffixIcon,
      prefixClick,
      suffixClick,
      rows,
      autosize,
    } = props;
    const inputType = computed(() => {
      type === "" ? (type = "default") : "";
      const list: Array<string> = [];
      const classType = {
        number: "number",
        password: "password",
        textarea: "textarea",
        default: "text",
      };
      type classTypeObj = typeof classType;
      type objType = keyof classTypeObj;
      let resClass: classTypeObj[objType] = classType[type];
      list.push(resClass);
      return resClass;
    });
    const inputModeType = computed(() => (type === "number" ? "numeric" : "text"));
    const disabledType = computed(() => (disabled ? "dk-input-disabled" : ""));
    const clearableType = computed(() =>
      clearable ? (suffixIcon ? "dk-input-clearable-suffix" : "dk-input-clearable") : ""
    );
    const isClearable = computed(() => clearable && modelValue.value);
    const modelValue = ref(props.modelValue);
    const clear = () => {
      modelValue.value = "";
      emit("update:modelValue", "");
    };
    const updateValue = (event: Event) => {
      let target = event.target as HTMLInputElement;
      if (autosize) {
        target.style.height = "auto";
        target.style.height = target.scrollHeight + "px";
      }
      emit("update:modelValue", target.value);
    };
    const hasPrefixSlot = Boolean(slots.hasOwnProperty("prefix"));
    const prefixIconType = computed(() =>
      prefixIcon || hasPrefixSlot ? "dk-input-prefix" : ""
    );
    const isPrefixBind = computed(() => (hasPrefixSlot && prefixIcon ? false : true));

    const hasSuffixSlot = Boolean(slots.hasOwnProperty("suffix"));
    const suffixIconType = computed(() =>
      suffixIcon || hasSuffixSlot ? "dk-input-suffix" : ""
    );
    const isSuffixBind = computed(() => (hasSuffixSlot && suffixIcon ? false : true));
    const iconSuffix = computed(() => (suffixIcon ? "dk-icon-clearable-suffix" : ""));

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
      isPrefixBind,
      suffixIconType,
      suffixIcon,
      iconSuffix,
      prefixClick,
      hasPrefixSlot,
      hasSuffixSlot,
      isSuffixBind,
      suffixClick,
      rows,
      autosize,
    };
  },
});
</script>

<template>
  <div class="dk-input">
    <input
      v-if="inputType !== 'textarea'"
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
    <textarea
      v-else
      :class="[disabledType, clearableType, prefixIconType, suffixIconType]"
      v-model="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      autocomplete="off"
    ></textarea>

    <!-- 清空按钮 -->
    <dk-icon
      v-if="isClearable"
      @click="clear"
      :size="13"
      class="dk-icon-del1"
      :class="iconSuffix"
    ></dk-icon>
    <!-- 前缀图标 -->
    <dk-icon
      v-if="isPrefixBind"
      :size="13"
      class="dk-input-prefix-icon"
      :class="prefixIcon"
      @click="prefixClick"
    ></dk-icon>
    <template v-if="hasPrefixSlot">
      <div class="dk-input-prefix-icon-box">
        <slot name="prefix" />
      </div>
    </template>
    <!-- 后缀图标 -->
    <dk-icon
      v-if="isSuffixBind"
      :size="13"
      class="dk-input-suffix-icon"
      :class="suffixIcon"
      @click="suffixClick"
    ></dk-icon>
    <template v-if="hasSuffixSlot">
      <div class="dk-input-suffix-icon-box">
        <slot name="suffix" />
      </div>
    </template>
  </div>
</template>
