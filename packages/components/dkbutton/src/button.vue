<template>
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
</template>
<script lang="ts">
/**
 * @name dk-button
 * @author fanKai16
 * @Time 2023/01/06
 * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
 * @property {booler} disable -是否禁用 
 * @function OnCloShoverType  -悬停事件出去
 * @description 自定义按钮组件
 **/
import { computed, defineComponent } from "vue"
import { DKbutton } from "./button"
export default defineComponent({
  name: "DkButton",
  props: DKbutton,
  setup(props) {
    const typeClass = computed(() => {
      let { type = "default", disable = false } = props
      type objType = keyof classTypeObj
      type classTypeObj = typeof classType
      let retClassList: Array<string> = []
      const classType = {
        default: "dk-button-default",
        primary: "dk-button-primary",
        success: "dk-button-success",
        info: "dk-button-info",
        warning: "dk-button-warning",
        danger: "dk-button-danger",
      }
      let retClass: classTypeObj[objType] = classType[type]
      if (disable) {
        type objDisabled = keyof disabledClassObj
        type disabledClassObj=typeof disabledClassType
        const disabledClassType = {
          default: "dk-button-default-disabled",
          primary: "dk-button-primary-disabled",
          success: "dk-button-success-disabled",
          info: "dk-button-info-disabled",
          warning: "dk-button-warning-disabled",
          danger:"dk-button-danger-disabled"
        }
        let retDisabled: disabledClassObj[objDisabled] = disabledClassType[type]
        retClassList.push(retDisabled)
      }
      retClassList.push(retClass)
      return retClassList
    })
    return {
      typeClass
    }
  },
})
</script>
