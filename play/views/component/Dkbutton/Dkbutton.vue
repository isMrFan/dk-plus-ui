<template>
  <div class="Dkbutton">
    <div class="Dkbutton_DK_jcsy">
      <h4 class="Dkbutton_DK_jcsy_title">
        1.基础使用
      </h4>
      <div class="Dkbutton_DK_jcsy_div">
        <Dk-Button  type="default">查询</Dk-Button>
        <Dk-Button  >查询</Dk-Button>
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
.Dkbutton{
  width:100%;
  .Dkbutton_DK_jcsy{
    width: 100%;
    margin: 0 auto;
    .Dkbutton_DK_jcsy_title{
      padding: 0 0 10px 0;
      box-sizing: border-box;
    }
    .Dkbutton_DK_jcsy_div{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>