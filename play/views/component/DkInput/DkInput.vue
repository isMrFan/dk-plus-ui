<template>
  <div class="input">
    <div>基础用法</div>
    <dk-input v-model="msg" placeholder="请输入内容" />
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "DkInputComponent",
  setup() {
    let msg = ref("Hello World");
    watch(msg, (val) => {
      console.log(val);
    });
    const a = (a) => {
      console.log(a);
      
    }
    return {
      msg,
      a
    };
  },
});
</script>

<style lang="scss" scoped>
.dk-input {
  width: 180px;
}
</style>
