<script lang="ts" setup>
  import { ref } from 'vue'
  const checked = ref(3)
  const handleChange = (value: number): void => {
    checked.value = value
    alert(`当前评分为:${value}`)
  }
</script>
<template>
  <div class="box">
    <dk-shadow>
      <dk-rate v-model="checked" :number-value="9" @change="handleChange"></dk-rate><br />
    </dk-shadow>
    <dk-shadow>
      <dk-rate v-model="checked" disabled :number-value="9"></dk-rate><br />
    </dk-shadow>
    <dk-shadow>
      <dk-rate v-model="checked" show-score :number-value="9"></dk-rate><br />
    </dk-shadow>
    <dk-shadow>
      文案展示<dk-rate
        v-model="checked"
        :show-text="['非常差', '差', '一般', '好', '非常好']"
        :number-value="5"
      ></dk-rate><br />
    </dk-shadow>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .dk-shadow {
      margin-bottom: 10px;
      width: calc(50% - 10px);
    }
  }
</style>
