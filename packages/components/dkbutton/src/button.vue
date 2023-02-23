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
 * @author fanKai16
 * @Time 2023/01/06
 * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
 * @function OnCloShoverType  -悬停事件出去
 * @description 自定义按钮组件
 **/
import {  computed, defineComponent } from "vue";
import { DKbutton } from "./button";
export default defineComponent({
  name: "DkButton",
  props: DKbutton,
  setup(props) {
    const typeClass = computed(() => {
      let { type='default' }=props
      type objType = keyof classTypeObj;
      type classTypeObj = typeof classType;
      const classType = {
        'default': "dk-button-default",
        'primary': "dk-button-primary",
        'success': "dk-button-success",
        'info': "dk-button-info",
        'warning': "dk-button-warning",
        'danger': "dk-button-danger"
      };
      let retClass: (classTypeObj[objType]) = classType[type]
      const retClassList:Array<string>=[retClass]
      return retClassList
    })
    return {
      typeClass,
    };
  },
});
</script>