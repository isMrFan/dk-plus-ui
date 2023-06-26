<template>
  <div class="DkInterval">
    <h6>1.基本使用</h6>
    <dk-space>
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> medium(中) </dk-button>
      <dk-button type="primary" size="large"> small(小) </dk-button>
      <dk-button type="primary" size="large"> mini(迷你) </dk-button>
    </dk-space>
    <h6>2.是否竖直排列</h6>
    <dk-space vertical>
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大) </dk-button>
    </dk-space>
    <h6>3.间距大</h6>
    <dk-space spacing-type="large">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
    <h6>4.间距中</h6>
    <dk-space spacing-type="medium">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
    <h6>5.间距小</h6>
    <dk-space spacing-type="small">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
    <h6>6.间距迷你</h6>
    <dk-space spacing-type="mini">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
    <h6>7.自定义纵向间距</h6>
    <dk-space vertical port-rait="55px">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
    <h6>7.自定义横向间距</h6>
    <dk-space land-scape="55px">
      <dk-button type="primary" size="large"> large(大) </dk-button>
      <dk-button type="primary" size="large"> large(大)</dk-button>
    </dk-space>
  </div>
</template>
<style lang="scss" scoped>
  .DkInterval {
    width: 100%;
    h6 {
      margin-bottom: 10px;
    }
  }
</style>
