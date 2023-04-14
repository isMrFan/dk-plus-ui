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

    let { type = "default", placeholder = "" } = props;
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
    // input事件
    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:value", target.value);
      console.log(target.value);
    };
    return {
      inputType,
      placeholder,
      onInput,
    };
  },
});
</script>

<template>
  <div class="dk-input">
    <input
      :value="value"
      @input="onInput"
      :placeholder="placeholder"
      :type="inputType"
      autocomplete="off"
    />
  </div>
</template>
