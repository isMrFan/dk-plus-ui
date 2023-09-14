<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkPopoverComp',
    setup() {
      const data = reactive({
        visible: false,
        visible2: false,
        visible3: true
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<template>
  <!-- <div class="container">
  </div> -->
  <div class="box" style="margin-left: 200px">
    <h4>基本使用</h4>
    <dk-popover v-model="visible">
      <template #popup>
        <div>popup</div>
        <p>我是弹出的内容 </p>
      </template>
      <template #default> hover </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>click激活</h4>
    <dk-popover v-model="visible2" trigger="click">
      <template #popup>
        <div>popup</div>
        <p>trigger="click"</p>
      </template>
      <template #default> click </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>默认打开</h4>
    <dk-popover v-model="visible3">
      <template #popup>
        <div>popup</div>
        <p>visible3 = true</p>
      </template>
      <template #default> hover </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>位置</h4>
    <dk-popover v-model="visible3" placement="left">
      <template #popup>
        <div>popup</div>
        <p>visible3 = true</p>
      </template>
      <template #default> hover </template>
    </dk-popover>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin-bottom: 100px;
}
</style>
