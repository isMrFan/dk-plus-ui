<script lang="ts">
  /**
   * @name dk-button
   * @author fanKai16
   * @Time 2023/05/08
   * @description 自定义按钮组件
   **/
  import { defineComponent, toRefs, reactive, ref } from 'vue'
  import { getButton, getReturn, getGlobal, getRipples } from '../../_hooks'
  import type { RipplesType } from '../../_hooks'
  import { dkButtonProps } from './props'
  export default defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
      const dkBoxButton = ref<HTMLButtonElement>()
      const { classList, styleList,personaClassList,personalityStylist } = getButton(Props)
      const { getRun } = getReturn()
      const { getType } = getGlobal(Props)
      const EventClick = (evt: MouseEvent): void => {
        const { disabled, ripples } = toRefs(Props)
        if (disabled.value) {
          evt.preventDefault()
          return
        }
        if (ripples.value) {
          const { ripplesBgColor } = toRefs(Props)
          const elementObj: RipplesType = reactive({
            AnimationDuration: 1100,
            component: 'dk-button',
            className: 'dk-button_ripples',
            ripplesBgColor: ripplesBgColor.value,
            type: getType()
          })
          const { useRipples } = getRipples(
            evt,
            dkBoxButton.value as HTMLElement,
            elementObj
          )
          useRipples()
        }
        getRun(Props.onClick, evt)
      }
      return {
        EventClick,
        dkBoxButton,
        classList,
        styleList,
        personaClassList,
        personalityStylist
      }
    }
  })
</script>
<template>
  <div
    class="dk-button"
    :style="disabled ? 'cursor:not-allowed' : ''"
    @click="EventClick"
  >
    <template v-if="link || text">
      <div
        v-if="text"
        :class="[classList, text ? 'dk-button-text' : '']"
        :style="[styleList]"
      >
        <slot name="icon"></slot>
        <slot></slot>
        <slot name="afterIcon"></slot>
      </div>
      <div
        v-if="link"
        :class="[classList, link ? 'dk-button-link' : '']"
        :style="styleList"
      >
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
        v-if="!personality"
        ref="dkBoxButton"
        :class="['dk-button-box', classList]"
        :style="styleList"
        role="button"
        :disabled="disabled"
      >
        <slot name="icon" />
        <slot></slot>
        <slot name="afterIcon" />
      </button>
      <button 
        v-else ref="dkBoxButton" 
        :class="['dk-button-personality',personaClassList]" 
        :style="personalityStylist"
        role="button" 
      > 
        <slot name="icon" />
        <slot></slot>
        <slot name="afterIcon" />
      </button>
    </template>
  </div>
</template>
