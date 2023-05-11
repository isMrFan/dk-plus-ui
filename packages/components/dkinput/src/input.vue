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

export default defineComponent({
  name: "DkInput",
  props: dkInputProps,
  setup(props, { slots, emit }) {
    const { getInputType } = getInputGlobal(props);
    const { classList, styleList, wrapperClassList, innerClassList } = getInput(props);
    const { type = getInputType() } = props;
    const { prepend, append } = props;

    const inpClass = new haInputClass();

    const inputFocus = ref<Boolean>(false);
    // const wrapperClassList = computed((): string[] => {
    //   const wrapperClass: string[] = [
    //     type !== "textarea" ? "dk-input__wrapper" : "dk-textarea__inner",
    //   ];
    //   type WrapperType = Record<string, boolean>;
    //   const isClass: WrapperType = {
    //     "is-focus": !!inputFocus.value,
    //     "is-prepend":
    //       (!!prepend || !!slots.prepend) &&
    //       type !== "textarea" &&
    //       !!!append &&
    //       !!!slots.append,
    //     "is-append":
    //       (!!append || !!slots.append) &&
    //       type !== "textarea" &&
    //       !!!prepend &&
    //       !!!slots.prepend,
    //     "is-pend": (!!prepend || !!slots.prepend) && (!!append || !!slots.append),
    //   };

    //   let list: string[] = [];
    //   list = inpClass.cLTS(isClass, list);
    //   return wrapperClass.concat(list);
    // });

    return {
      classList,
      styleList,
      wrapperClassList,
      innerClassList
    };
  },
});
</script>

<template>
  <div :class="classList" :style="styleList">
    <div :class="wrapperClassList">
      <input :class="innerClassList" type="text" />
    </div>
  </div>
  <!-- <div>
    <input type="textarea" />
  </div> -->
</template>
