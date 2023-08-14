<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxComp',
    setup() {
      const handleChange = (value: boolean): void => {
        value
      }
      const checked = ref<boolean>(true)
      const checked1 = ref<boolean>(true)
      const checked2 = ref<boolean>(true)
      const checked3 = ref<boolean>(false)
      const handleCheckboxChange = (value: string[]): void => {
        console.log(value)
      }
      const checkList = [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2'},
        { label: '选项3', value: '3' }
      ]
      return {
        handleChange,
        isIndeterMinate: true,
        checked,
        checked1,
        checked2,
        checked3,
        handleCheckboxChange,
        checkList
      }
    }
  })
</script>
<template>
  <!-- <div class="box">
    <h4>基础样式</h4>
    <div class="checkbox">
      <dk-checkbox>常规使用</dk-checkbox>
    </div>
  </div>
  <div class="box">
    <h4>中间状态</h4>
    <dk-checkbox :indeterminate="isIndeterMinate">中间状态</dk-checkbox>
  </div>
  <div class="box">
    <h4>禁用状态</h4>
    <dk-checkbox disabled @change="handleChange">禁用状态</dk-checkbox>
  </div>
  <div class="box">
    <h4>不同尺寸</h4>
    <dk-checkbox size="large">large尺寸</dk-checkbox>
    <dk-checkbox size="medium">medium尺寸</dk-checkbox>
    <dk-checkbox>default尺寸</dk-checkbox>
    <dk-checkbox size="small">small尺寸</dk-checkbox>
    <dk-checkbox size="mini">mini尺寸</dk-checkbox>
  </div>
  <div class="box">
    <h4>选中值与为选中值</h4>
    <dk-checkbox v-model="checked" checked-label="选中了" unchecked-label="未选中">都设置</dk-checkbox>
    <dk-checkbox v-model="checked" checked-label="设置checked-label">多选框</dk-checkbox>
    <dk-checkbox v-model="checked" unchecked-label="设置unchecked-label">多选框</dk-checkbox>
  </div>
  <div class="box">
    <h4>带有边框的checkbox</h4>
    <dk-checkbox border size="large">large尺寸</dk-checkbox>
    <dk-checkbox border size="medium">medium尺寸</dk-checkbox>
    <dk-checkbox border size="small">small尺寸</dk-checkbox>
    <dk-checkbox border size="mini">mini尺寸</dk-checkbox>
  </div> -->
  <div class="box">
    <h4>group组</h4>
    <dk-checkbox-group v-model="checkList" @change="handleCheckboxChange">
      <dk-checkbox v-for="item in checkList" :key="item.value" v-model="checked1" :label="item.label" :value="item.value"></dk-checkbox>
    </dk-checkbox-group>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
