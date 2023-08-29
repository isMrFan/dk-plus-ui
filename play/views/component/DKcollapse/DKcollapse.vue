<script lang="ts">
  /**
   * @name DKcollapseS
   * @author fanKai16
   * @Time 2023/06/30
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  export default defineComponent({
    name: 'DKcollapseS',
    setup() {
      const state = reactive({
        NackName: ['1', '2', '3'],
        list: [
          {
            id: 1,
            title: '这是名字1',
            name: '1',
            isShow: true
          },
          {
            id: 2,
            title: '这是名字2',
            name: '2',
            isShow: false
          },
          {
            id: 3,
            title: '这是名字3',
            name: '3',
            isShow: false
          }
        ]
      })
      const activeName = ref('1')
      const handleChange = (e: string): void => {
        activeName.value = e
      }
      return {
        ...toRefs(state),
        activeName,
        handleChange
      }
    }
  })
</script>
<template>
  <div>
    <!-- <div style="margin-bottom: 10px">折叠面板 {{ NackName }}</div>
    <dk-collapse v-model="NackName">
      <dk-collapse-item
        v-for="(item, ind) in 1"
        :key="ind"
        :title="'这是名字zdc' + ind"
        :name="ind + ''"
      >
        <div>今天我休息</div>
        <div>今天我休息</div>
        <div>今天我休息</div>
        <div>今天我休息</div>
        <div>今天我休息</div>
      </dk-collapse-item>
      <dk-collapse-item
        v-for="(item, ind) in 10"
        :key="ind"
        :title="'这是名字' + ind"
        :name="ind + ''"
      >
        <div>今天我休息</div>
      </dk-collapse-item>
    </dk-collapse> -->
    <div class="box">
      <h2>手风琴效果</h2>
      <dk-collapse v-model="activeName" @change="handleChange">
        <dk-collapse-item title="折叠1" name="1">
          <div>996996996996996996🤬🤬🤬</div>
        </dk-collapse-item>
        <dk-collapse-item title="折叠2" name="2">
          <div>996996996996996996🤬🤬🤬</div>
        </dk-collapse-item>
        <dk-collapse-item title="折叠3" name="3">
          <div>996996996996996996🤬🤬🤬</div>
        </dk-collapse-item>
      </dk-collapse>
    </div>
  </div>
</template>
