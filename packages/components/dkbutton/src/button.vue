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
   * @property {string} loadingColor  图标自定义颜色
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
  import { defineComponent } from 'vue'
  import { getGlobal, getButton } from '../../_hooks'
  import { dkButtonProps } from './props'
  export default defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
      const { getType } = getGlobal(Props)
      const { href, target, type = getType() } = Props
      const { classList, styleList } = getButton(Props)
      console.log('classList', classList)
      console.log('styleList', styleList)
      return {
        classList
      }
    }
  })
</script>
<template>
  <div class="dk-button-packing">
    <template v-if="link || text">
      <div v-if="text" :class="classList">
        <span>
          <slot name="icon"></slot>
          <slot>文本按钮</slot>
          <slot name="afterIcon"></slot>
        </span>
      </div>
      <div v-if="link" :class="classList">
        <a :href="href" tabindex="0" :target="target">
          <span> 
            <slot name="icon" />
            <slot>A标签按钮</slot>
            <slot name="afterIcon" />
          </span>
        </a>
      </div>
    </template>
    <template v-else>
      <div :class="classList">
        <slot name="icon" />
        <slot>纯按钮</slot>
        <slot name="afterIcon" />
      </div>
    </template>
  </div>
</template>
