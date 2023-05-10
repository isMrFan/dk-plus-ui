<script lang="ts">
  /**
   * @name dk-button
   * @author fanKai16
   * @Time 2023/05/08
   * @description 自定义按钮组件
   **/
  import { defineComponent } from 'vue'
  import { getGlobal, getButton, getStyleList } from '../../_hooks'
  import { dkButtonProps } from './props'
  export default defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
      const { getType } = getGlobal(Props)
      const { styles } = getStyleList(Props, 'button')
      const { href, target, type = getType() } = Props
      const { classList, styleList } = getButton(Props)
      // console.log('styleList', styleList)
      return {
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <div
    class="dk-button"
    :class="[link || text ? '' : 'dk-button-box', link ? 'dk-button-link' : '']"
  >
    <template v-if="link || text">
      <div
        v-if="text"
        :class="[classList, text ? 'dk-button-text' : '']"
        :style="styleList"
      >
        <slot name="icon"></slot>
        <slot>文本按钮</slot>
        <slot name="afterIcon"></slot>
      </div>
      <div v-if="link" :class="classList" :style="styleList">
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
      <button :class="classList" :style="styleList">
        <slot name="icon" />
        <slot>纯按钮</slot>
        <slot name="afterIcon" />
      </button>
    </template>
  </div>
</template>
