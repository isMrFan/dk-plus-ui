<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <h4 class="dkButton_DK_csy_title">1.基础使用</h4>
      <div class="dkButton_DK_csy_div">
        <Dk-Button 
          v-for="(item,ind) in foundationList" 
          :key="ind"
          :type="item.type"
          >
          {{ item.name }}
        </Dk-Button>
      </div>
      <h4 class="dkButton_DK_csy_title">2.禁用状态</h4>
      <div class="dkButton_DK_csy_div">
        <Dk-Button 
          v-for="(item,ind) in disableList" 
          disable 
          :key="ind"
           :type="item.type"
          >{{ item.name }}</Dk-Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Dkbuttonsm",
  setup() {
    const foundationList= [
      {
        type: "default",
        name: "默认"
      },
      {
        type: "primary",
        name: "主要按钮"
      },
      {
        type: "success",
        name: "成功"
      },
      {
        type: "info",
        name: "信息"
      },
      {
        type: "warning",
        name: "警告"
      },
      {
        type: "danger",
        name: "危险"
      },
    ];
    const disableList=[
      {
        type: "default",
        name: "默认"
      },
      {
        type: "primary",
        name: "主要按钮"
      },
      {
        type: "success",
        name: "成功"
      },
      {
        type: "info",
        name: "信息"
      },
      {
        type: "warning",
        name: "警告"
      },
      {
        type: "danger",
        name: "危险"
      },
    ]
    const a = () => {
      console.log("a")
    }
    return {
      foundationList,
      disableList,
      a
    }
  },
})
</script>
<style lang="scss" scoped>
.dkButton {
  width: 100%;
  .dkButton_DK_csy {
    width: 100%;
    margin: 0 auto;
    .dkButton_DK_csy_title {
      padding: 0 0 10px 0;
      box-sizing: border-box;
    }
    .dkButton_DK_csy_div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
  }
}
</style>
