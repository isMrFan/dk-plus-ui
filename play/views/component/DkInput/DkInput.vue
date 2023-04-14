<template>
  <div class="input">
    <div>基础用法</div>
    <dk-input v-model="msg" placeholder="请输入内容" clearable/>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "DkInputComponent",
  setup() {
    let msg = ref("Hello World");
    return {
      msg
    };
  },
});
</script>

<style lang="scss" scoped>
.dk-input {
  width: 180px;
}
</style>
