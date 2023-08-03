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
    name: 'DkCollapse',
    props: dkcollapse,
    setup(Props) {
      const { modelName } = toRefs(Props)
      console.log('modelName', modelName.value)
      return {}
    }
  })
</script>
<template>
  <div class="dk-collapse" role="tablist" aria-multiselectable="true">
    <slot />
  </div>
</template>
