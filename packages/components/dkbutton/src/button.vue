<template>
  <button class="dk-button" :class="[
    typeClass, disabledClass,
    roundClass, circleClass,
    largeClass, loadingClass]" type="button">
    <div v-if="circle === ''">
      <dkIcon :class="icon" :size="iconSize" :color="iconColor"></dkIcon>
    </div>
    <div class="dk-button-conten" v-else>
      <div v-if="icon">
        <dkIcon :class="icon" :size="iconSize" class="dk-button-conten-magin"></dkIcon>
        <slot></slot>
      </div>
      <div v-else-if="loading" class="dk-button-rotationLoading">
        <div class="dk-button-loading">
          <dkIcon :class="loadingIconClass" :size="loadingIconSize" :color="'#fff'"></dkIcon>
        </div>
        <slot></slot>
      </div>
      <slot v-else></slot>
    </div>
  </button>
</template>
<script lang="ts">
/**
 * @name dk-button
 * @author fanKai16
 * @Time 2023/01/06
 * @property {string} icon  图表class
 * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
 * @property {booler} disable -是否禁用
 * @property {string} circle  -圆形按钮不可放文字
 * @property {string} round   - 半圆按钮
 * @property {string} size    - 按钮大小
 * @property {booler} loading -加载种状态
 * @property {string} loadingIcon   图标加载中的图标
 * @property {string,number} loadingSize  图标加载中的自定义大小
 * @function typeClass  基础使用type
 * @function disabledClass  禁止使用状态disable
 * @function roundClass     半圆按钮逻辑处理round
 * @function circleClass    圆形按钮逻辑处理circle
 * @function largeClass     按钮大小处理size
 * @function iconSize       icon图标大号
 * @function iconColor      icon图标颜色
 * @function loadingClass   加载中的蒙层处理
 * @function loadingIconClass  加载中的ICON设置
 * @function loadingIconSize   加载中ICON 大小设置
 * @description 自定义按钮组件
 **/
import { computed, defineComponent } from "vue"
import { DKbutton } from "./button"
export default defineComponent({
  name: "DkButton",
              asd props: DKbutton,
  setup(props) {
    let {
      icon = "",
      type = "default",
      disable = false,
      round = "none",
      circle = "none",
      size = "default",
      loading = false,
      loadingIcon = '',
      loadingSize=''
    } = props
    const typeClass = computed(() => {
      type === "" ? (type = "default") : ""
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
      retClassList.push(retClass)
      return retClassList
    })
    const disabledClass = computed(() => {
      type === "" ? (type = "default") : ""
      let forbidClassList: Array<string> = []
      if (disable) {
        type objDisabled = keyof disabledClassObj
        type disabledClassObj = typeof disabledClassType
        const disabledClassType = {
          default: "dk-button-default-disabled",
          primary: "dk-button-primary-disabled",
          success: "dk-button-success-disabled",
          info: "dk-button-info-disabled",
          warning: "dk-button-warning-disabled",
          danger: "dk-button-danger-disabled",
        }
        let retDisabled: disabledClassObj[objDisabled] = disabledClassType[type]
        forbidClassList.push(retDisabled)
        return forbidClassList
      }
    })
    const roundClass = computed(() => {
      if (round !== "none") {
        return "dk-button-round"
      }
    })
    const circleClass = computed(() => {
      if (circle !== "none") {
        return "dk-button-circle"
      }
    })
    const largeClass = computed(() => {
      type objType = keyof classTypeObj
      type classTypeObj = typeof classType
      let retClassList: Array<string> = []
      const classType = {
        large: "dk-button-large",
        default: "dk-button-default",
        small: "dk-button-small",
      }
      let retClass: classTypeObj[objType] = classType[size]
      retClassList.push(retClass)
      if (circle !== "none" && size === "small") {
        retClassList.push("dk-button-round-small")
      }
      return retClassList
    })
    const iconSize = computed(() => {
      const classType = {
        large: 16,
        default: 14,
        small: 11,
      }
      return classType[size] ? classType[size] : 14
    })
    const iconColor = computed(() => {
      let Color = "#ffffff"
      if (type === "default") {
        Color = "#c8c9cc"
      } else {
        if (disable) {
          Color = "#c8c9cc"
        } else {
          Color = "#ffffff"
        }
      }
      return Color
    })
    const loadingClass = computed(() => {
      if (loading) {
        return 'dk-button-rotationLoading-mask'
      }
    })
    const loadingIconClass = computed(() => {
      if (loading) {
        if (loadingIcon==='') {
          return 'dk-icon-arrows_rotate'
        } else {
          return loadingIcon
        }
      }
    })
    const loadingIconSize = computed(() => {
      const classType = {
        large: 16,
        default: 14,
        small: 12,
      }
      return loadingSize === '' ?classType[size]?classType[size]:14: loadingSize
    })
    return {
      typeClass,
      disabledClass,
      roundClass,
      circleClass,
      largeClass,
      iconSize,
      iconColor,
      icon,
      disable,
      loading,
      loadingClass,
      loadingIconClass,
      loadingIconSize
    }
  },
})
</script>
