<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @description 输入框组件
 * @example
 */
import { defineComponent, computed, ref, nextTick, Ref, ComputedRef, watch } from "vue";
import { DKinput, haInputClass } from "./input";
import { getInput } from "../../_hooks";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  setup(props) {
    console.log("props", props, DKinput);
    
    const { getInputType } = getInput(props);
    const { type = getInputType() } = props;
  },
});
</script>

<template>
  <div>
    <input type="text" />
  </div>
  <div>
    <input type="textarea" />
  </div>
</template>
