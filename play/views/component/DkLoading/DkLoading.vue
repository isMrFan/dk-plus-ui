<template>
  <div class="isLoading">
    加载中了v-loading="true"

    <div
      v-dk-loading="true"
      dk-loading-text="加载中..."
      dk-loading-spinner="1"
      class="isHello"
    ></div>
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
