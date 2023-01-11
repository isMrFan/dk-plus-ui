<template>
  <div class="dk-button" ref="DkButton">
    12  
    <dkIcon class="dk-icon-fuwutiaokuanjiyinsi" :size="24" :color="'red'"></dkIcon>
    <!-- <slot></slot> -->
    
  </div>
</template>
<script lang="ts">
/**-
 * @name dk-button
 * @author fankai16
 * @Time 2023/01/06
 * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
 * @function oncloshoverType  -悬停事件出去
 * @description 自定义按钮组件
 **/
import {  defineComponent, ref } from "vue";
import { DKbutton } from "./button";
import { dkIcon } from '@dk-plus/components/icon'
export default defineComponent({
  name: "DkButton",
  props: DKbutton,
  setup(props) {
    console.log("dkIcon", dkIcon)
    console.log("props", props)
    const DkButton: any = ref(null);
    return {
      DkButton,
    };
  },
});
</script>