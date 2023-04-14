<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @property {string} type  输入框类型
 * @property {string} placeholder  输入框占位符
 * @property {string} size  输入框大小
 */
import { defineComponent, computed } from "vue";
import { DKinput } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  emit: ["update:value"],
  setup(props, { emit }) {
    console.log(emit);

    let {
      type = "default", 
      placeholder = "", 
      modelValue,
      disabled = false,
      clearable = false
    } = props;
    // input 类型
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
    // 禁用类型
    const disabledType = computed(() => {
      return disabled ? 'dk-input-disabled' : ''
    })
    // 清空状态
    const clearableType = computed(() => {
      return clearable ? 'dk-input-clearable' : ''
    })
    return {
      inputType,
      placeholder,
      modelValue,
      disabledType,
      disabled,
      clearableType,
      clearable
    };
  },
});
</script>

<template>
  <div class="dk-input">
    <input
      :class="[disabledType, clearableType]"
      class="dk-input"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :type="inputType"
      autocomplete="off"
      :disabled="disabled"
    />
    <dk-icon></dk-icon>
  </div>
</template>
