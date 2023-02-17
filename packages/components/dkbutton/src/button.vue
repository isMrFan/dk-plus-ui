<template>
  <div>
    <button 
      class="dk-button"
      :class="typeClass"
      type="button"
    >
      <span class="dk-button-conten">
        <slot></slot>
      </span>
    </button>
    <!-- <dkIcon class="dk-icon-shujuxitong" :size="24" :color="'red'"></dkIcon>     -->
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
import {  computed, defineComponent } from "vue";
import { DKbutton } from "./button";
export default defineComponent({
  name: "DkButton",
  props: DKbutton,
  setup(props) {
    const typeClass = computed(() => {
      let type:string|undefined=props.type
      const classType = {
        0: "单位/元",
        1: "单位/盒",
        2: "单位/元",
        3: "单位/盒",
      };
      console.log("props",classType[type])
      return ['dk-button-default']
    })
    return {
      typeClass,
    };
  },
});
</script>