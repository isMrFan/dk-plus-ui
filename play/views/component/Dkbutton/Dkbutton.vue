<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <h4 class="dkButton_DK_csy_title">
        1.基础使用
      </h4>
      <div class="dkButton_DK_csy_div">
        <Dk-Button>Default</Dk-Button>
        <Dk-Button  type="default">Default</Dk-Button>
        <Dk-Button  type="primary">Primary</Dk-Button>
        <Dk-Button  type="success">Success</Dk-Button>
        <Dk-Button  type="info">Info</Dk-Button>
        <Dk-Button  type="warning">Warning</Dk-Button>
        <Dk-Button  type="danger">danger</Dk-Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, } from "vue";
export default defineComponent({
  name: "Dkbuttonsm",
  setup() {
    return {
    };
  },
})
</script>
<style lang="scss" scoped>
.dkButton{
  width:100%;
  .dkButton_DK_csy{
    width: 100%;
    margin: 0 auto;
    .dkButton_DK_csy_title{
      padding: 0 0 10px 0;
      box-sizing: border-box;
    }
    .dkButton_DK_csy_div{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>