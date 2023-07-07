<script lang="ts">
  /**-
   * @name dk-alert
   * @author zdy
   * @Time 2023/07/06
   * @description 提示
   **/
  import { defineComponent, ref, toRefs } from 'vue'
  import { dkAlertProps } from './props'

  export default defineComponent({
    name: 'DkAlert',
    props: dkAlertProps,
    setup(Props) {
      const dkAlertRef = ref<HTMLElement>()
      const { type, title, description, center, closable, closeText } = toRefs(Props)
      return {
        dkAlertRef,
        type,
        title,
        description,
        center,
        closable,
        closeText
      }
    }
  })
</script>
<template>
  <div ref="dkAlertRef" class="dk-alert">3124</div>
</template>
