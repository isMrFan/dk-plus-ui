<script lang="ts">
/**
 * @name dk-input
 * @author WangYingJie
 * @Time 2323/4/12
 * @property {string} type  输入框类型
 */
import { defineComponent } from "vue";
import { DKinput } from "./input";

export default defineComponent({
  name: "DkInput",
  props: DKinput,
  setup(props) {
    let { type = "text" } = props;
  },
});
</script>

<template>
  <div class="dk-input">
    <input type="text" />
  </div>
</template>
