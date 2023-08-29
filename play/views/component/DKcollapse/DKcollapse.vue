<script lang="ts">
  /**
   * @name DKcollapseS
   * @author fanKai16
   * @Time 2023/06/30
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
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
      return {
        ...toRefs(state)
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
    <dk-collapse>
      <dk-collapse-item
        v-for="item in list"
        :key="item.id"
        v-model="item.isShow"
        :title="item.title"
        :name="item.name"
      >
        <div>996996996996996996996996🤬🤬🤬🤬🤬🤬</div>
        <div>996996996996996996996996🤬🤬🤬🤬🤬🤬</div>
        <div>996996996996996996996996🤬🤬🤬🤬🤬🤬</div>
        <div>996996996996996996996996🤬🤬🤬🤬🤬🤬</div>
        <div>996996996996996996996996🤬🤬🤬🤬🤬🤬</div>
      </dk-collapse-item>
    </dk-collapse>
  </div>
</template>
