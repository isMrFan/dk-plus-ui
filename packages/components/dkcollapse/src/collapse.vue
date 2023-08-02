<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板
   **/
  import { defineComponent, toRefs } from 'vue'
  import { dkcollapse } from './props'
  export default defineComponent({
    name: 'Collapse',
    props: dkcollapse,
    setup(props) {
      const { modelName } = toRefs(props)
      console.log('modelName', modelName)
      return {}
    }
  })
</script>
<template>
  <div class="dk-collapse">
    <slot />
  </div>
</template>
