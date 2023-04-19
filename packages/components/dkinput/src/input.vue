<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @property {string} type  输入框类型
 * @property {string} placeholder  输入框占位符
 * @property {boolean} disabled  是否禁用
 * @property {boolean} clearable  是否可清空
 * @property {string} prefixIcon  前缀图标
 * @property {string} suffixIcon  后缀图标
 * @property {function} prefixClick  前缀图标点击事件
 * @property {function} suffixClick  后缀图标点击事件
 * @property {string} modelValue  输入框值
 * @property {boolean} autosize  是否自适应高度
 * @property {string} prepend  前置内容
 * @property {string} append  后置内容
 * @event {function} update:modelValue  输入框值改变事件
 * @description 输入框组件
 * @example
 */
import { defineComponent, computed, ref } from "vue";
import { DKinput, haInputClass } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const {
      type,
      disabled,
      placeholder,
      clearable,
      prefixIcon,
      prefixClick,
      prepend,
      autosize,
      append
    } = props;
    const inpClass = new haInputClass();
    const inputType = computed(() => {
      const typeList = {
        text: "text",
        password: "password",
        textarea: "textarea",
      };
      return typeList[type || "text"];
    });
    const inputModeType = computed(() => (type === "number" ? "numeric" : "text"));
    const inputClassList = computed(() => [
      "dk-input",
      inpClass.n(type),
      {
        "is-disabled": disabled,
      },
    ]);
    const inputFocus = ref(false);
    const handleFocus = () => {
      inputFocus.value = true;
    };
    const handleBlur = () => {
      inputFocus.value = false;
    };
    const wrapperClassList = computed(() => [
      type !== "textarea" ? "dk-input__wrapper" : "dk-textarea__inner",
      {
        "is-focus": inputFocus.value,
        "is-prepend": !!prepend || slots.prepend,
        "is-append": !!append || slots.append,
      },
    ]);

    const showClear = computed(
      () => clearable && modelValue.value && inputMouseenter.value && !disabled
    );
    const clear = () => {
      modelValue.value = "";
      emit("update:modelValue", "");
    };
    const modelValue = ref(props.modelValue);

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (autosize) {
        target.style.height = "auto";
        target.style.height = target.scrollHeight + "px";
      }
      modelValue.value = target.value;
      emit("update:modelValue", modelValue.value);
    };
    const innerClassList = computed(() => [
      "dk-input__inner",
      {
        "is-disabled": disabled,
      },
    ]);
    const inputMouseenter = ref(false);
    const handleMouseenter = () => {
      inputMouseenter.value = true;
    };
    const handleMouseleave = () => {
      inputMouseenter.value = false;
    };

    return {
      disabled,
      inputClassList,
      inputModeType,
      placeholder,
      wrapperClassList,
      handleFocus,
      handleBlur,
      clear,
      showClear,
      modelValue,
      handleInput,
      innerClassList,
      handleMouseenter,
      handleMouseleave,
      inputType,
      prefixIcon,
      inpClass,
      prefixClick,
      prepend,
      append
    };
  },
});
</script>

<template>
  <div
    :class="inputClassList"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <div v-if="$slots.prepend || prepend" :class="[inpClass.n('prepend')]">
        {{prepend}}
        <slot name="prepend"></slot>
      </div>
      <!-- input -->
      <div :class="wrapperClassList">
        <!-- prefix slot -->
        <span v-if="$slots.prefix || prefixIcon" :class="[inpClass.n('prefix')]">
          <span @click="prefixClick" :class="inpClass.n('prefix-inner')">
            <slot name="prefix"></slot>
            <dk-icon
              v-if="prefixIcon"
              :class="[inpClass.i('icon', prefixIcon)]"
            ></dk-icon>
          </span>
        </span>

        <input
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          v-model="modelValue"
          :disabled="disabled"
          :placeholder="placeholder"
          :type="inputType"
          :class="innerClassList"
          :inputmode="inputModeType"
        />
        <!-- clearable -->
        <template v-if="clearable && showClear">
          <dk-icon
            class="dk-icon-del1 dk-input__clear"
            :size="13"
            @click="clear"
          ></dk-icon>
        </template>
        <!-- suffix slot -->
        <span v-if="$slots.suffix || suffixIcon" :class="inpClass.n('suffix')">
          <span @click="suffixClick" :class="inpClass.n('suffix-inner')">
            <slot name="suffix"></slot>
            <dk-icon
              v-if="suffixIcon"
              :class="[inpClass.i('icon', suffixIcon)]"
            ></dk-icon>
          </span>
        </span>
      </div>

      <!-- append -->
      <div v-if="$slots.append || append" :class="[inpClass.n('append')]">
        {{append}}
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        :class="wrapperClassList"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
        :placeholder="placeholder"
      ></textarea>
    </template>
  </div>
</template>
