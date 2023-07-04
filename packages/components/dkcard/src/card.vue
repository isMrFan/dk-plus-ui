<script lang="ts">
  /**
   * @name Dkcard
   * @author zdy
   * @Time 2023/07/04
   * @description 卡片--通用容器
   **/
  import { defineComponent } from 'vue'
  import { cardProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkCard',
    props: cardProps,
    setup(props) {
      const { styles } = getStyleList(props, 'header')
      const style_List = styles(['height', 'padding'])
      return { style_List }
    }
  })
</script>
<template>
  <div class="dk-card" :style="style_List">
    <slot />
  </div>
</template>
