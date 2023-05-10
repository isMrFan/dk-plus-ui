<script lang="ts">
  /**
   * @name dk-button
   * @author fanKai16
   * @Time 2023/05/08
   * @description 自定义按钮组件
   **/
  import { defineComponent,toRefs } from 'vue'
  import { getButton,getReturn } from '../../_hooks'
  import { dkButtonProps } from './props'
  export default defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
      const { classList, styleList } = getButton(Props)
      const {getRun}=getReturn()
      const EventClick= (evt: MouseEvent): void => {
        const { disabled} = toRefs(Props)
        if (disabled.value) {
          evt.preventDefault()
          return
        }
        getRun(Props.onClick, evt)
      }
      // console.log('styleList', styleList)
      return {
        EventClick,
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <div
    class="dk-button"
    :style="disabled?'cursor:not-allowed':''"
    @click="EventClick"
  >
    <template v-if="link || text">
      <div
        v-if="text"
        :class="[classList,text ? 'dk-button-text' : '' ]"
        :style="[styleList]"
      >
        <slot name="icon"></slot>
        <slot></slot>
        <slot name="afterIcon"></slot>
      </div>
      <div v-if="link" :class="[classList,link ? 'dk-button-link' : '']" :style="styleList">
        <a :href="href" tabindex="0" :target="target">
          <span>
            <slot name="icon" />
            <slot></slot>
            <slot name="afterIcon" />
          </span>
        </a>
      </div>
    </template>
    <template v-else>
      <button 
        :class="['dk-button-box',classList]" 
        :style="styleList" 
        role="button"
        :disabled="disabled"
        >
        <slot name="icon" />
        <slot></slot>
        <slot name="afterIcon" />
      </button>
    </template>
  </div>
</template>
