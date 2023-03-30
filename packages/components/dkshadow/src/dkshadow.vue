<script lang="ts">
/**-
 * @name dk-shadow
 * @author fankai16
 * @Time 2022/12/23
 * @property {string} type 用来判定是标题还是内容  title:标题   box:内容
 * @property {string} shadowClass 自定义样式
 * @property {boolean} hoverType 用来判定是否开启悬停效果
 * @property {string} hoverClass  自定义悬停样式
 * @function onEditor -编辑返利规则
 * @function slot  -插槽
 * @function slot-left  -左插槽
 * @function slot-right  -右插槽
 * @function slot-box  -内容插槽
 * @function onhoverType  -悬停事件进来
 * @function oncloshoverType  -悬停事件出去
 * @description 板块盒子
 **/
import { computed, defineComponent, ref } from 'vue'
import { DKshadowProps } from './dkshadow'
export default defineComponent({
  name: 'DkShadow',
  props: DKshadowProps,
  setup(props) {
    const DkShadow: any = ref(null)
    const type = computed(() => {
      if (props.type === undefined || props.type === null || props.type === '') {
        return 'box'
      } else {
        return props.type
      }
    })
    const shadowClass = computed(() => {
      if (
        props.shadowClass === undefined ||
        props.shadowClass === null ||
        props.shadowClass === ''
      ) {
        return ''
      } else {
        return props.shadowClass
      }
    })
    const hoverType = computed(() => {
      if (
        typeof props.hoverType !== 'boolean' ||
        props.hoverType === null ||
        props.hoverType === undefined
      ) {
        return false
      } else {
        return props.hoverType
      }
    })
    const hoverClass = computed(() => {
      if (
        typeof props.hoverClass !== 'string' ||
        props.hoverClass === null ||
        props.hoverClass === undefined
      ) {
        return 'dk-shadow-hoverClass'
      } else {
        return props.hoverClass
      }
    })
    const onhoverType = () => {
      if (hoverType.value) {
        DkShadow.value.classList.add('dk-shadow-hover', hoverClass.value)
      }
    }
    const oncloshoverType = () => {
      if (hoverType.value) {
        DkShadow.value.classList.remove('dk-shadow-hover', hoverClass.value)
      }
    }
    return {
      DkShadow,
      type,
      shadowClass,
      hoverType,
      onhoverType,
      oncloshoverType
    }
  }
})
</script>
<template>
  <div class="dk-shadow" ref="DkShadow" :class="[shadowClass]" @mouseenter="onhoverType" @mouseleave="oncloshoverType">
    <div class="dk-title" v-if="type === 'title'">
      <div class="dk-shadow-left">
        <slot name="left"></slot>
      </div>
      <div class="dk-shadow-right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="dk-box" v-else>
      <slot></slot>
    </div>
  </div>
</template>
