<script lang="ts">
  /**-
   * @name dk-alert
   * @author zdy
   * @Time 2023/07/06
   * @description 提示
   **/
  import { defineComponent, ref, toRefs } from 'vue'
  import { dkAlertProps } from './props'
  import { getAlert, getReturn } from '../../_hooks'
  export default defineComponent({
    name: 'DkAlert',
    props: dkAlertProps,
    setup(Props) {
      const dkAlertRef = ref<HTMLElement>()
      const alertVisible = ref<boolean>(true)
      const { type, title, description, center, closable, closeText, icon, closeIcon } =
        toRefs(Props)

      const { isSuccess, styleList } = getAlert

      const { getRun } = getReturn()
      const EventClick = (evt: MouseEvent): void => {
        getRun(Props.onClick, evt)
      }

      //关闭aler组件
      const onClose = (): void => {
        alertVisible.value = false
      }

      return {
        dkAlertRef,
        type,
        title,
        description,
        center,
        closable,
        closeText,
        icon,
        closeIcon,
        EventClick,
        alertVisible,
        onClose,
        isSuccess,
        styleList
      }
    }
  })
</script>
<template>
  <template v-if="alertVisible">
    <div ref="dkAlertRef" :class="['dk-alert']" :style="[styleList]">
      <slot v-if="icon === '' || icon === null" name="icon"></slot>
      <div>
        <dk-icon :icon="icon"></dk-icon>
      </div>
      <slot></slot>

      <div v-if="closable">
        <slot v-if="closeIcon === '' || closeIcon === null" name="closeIcon"></slot>
        <div>
          <dk-icon :icon="closeIcon" @click="onClose"></dk-icon>
        </div>
      </div>
    </div>
  </template>
</template>
