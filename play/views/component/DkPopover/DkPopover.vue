<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkPopoverComp',
    setup() {
      const data = reactive({
        visible: false,
        visible2: false,
        visible3: true,
        visible4: false,
        visible5: false,
        visible6: true,
        visible7: false,
        visible8: true
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
      <template #default>
        <p>默认</p>
        <p>打开</p>
      </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>placement</h4>
    <dk-popover v-model="visible4" placement="left" width="120px">
      <template #popup>
        <div>popup</div>
        <p>visible4 = true placement='left'</p>
      </template>
      <template #default> left </template>
    </dk-popover>
    <dk-popover v-model="visible5" placement="right" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='right'</p>
      </template>
      <template #default> right </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible6" placement="top" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='top'</p>
      </template>
      <template #default> top </template>
    </dk-popover>
    <dk-popover v-model="visible7" placement="bottom" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='bottom'</p>
      </template>
      <template #default> bottom </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible8" placement="top-left" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='top-left'</p>
      </template>
      <template #default> top-left </template>
    </dk-popover>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
