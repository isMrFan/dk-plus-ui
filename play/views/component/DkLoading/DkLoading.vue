<template>
  <div class="isLoading">
    加载中了v-loading="true"
    <dk-button type="success">成功按钮</dk-button>
    <div v-dk-loading="true" dk-loading-text="加载中.1.." class="isHello">你好啊是</div>
  </div>
</template>
<style lang="scss" scoped>
  .isLoading {
    .isHello {
      width: 500px;
      height: 500px;
    }
  }
</style>
