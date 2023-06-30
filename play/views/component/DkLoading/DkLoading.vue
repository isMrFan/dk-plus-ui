<template>
  <div class="isLoading">
    <h3>1.指令v-dk-loading 开启加载中指令组件 默认值:false | true</h3>
    <h3>2.指令dk-loading-text 加载中文案 默认值:加载中...</h3>
    <h3>3.指令dk-loading-color 加载中文案颜色 默认值:#fff</h3>
    <h3>4.指令dk-loading-background 自定义遮罩层背景色 默认值:rgba(0, 0, 0, 0.7)</h3>
    <h3>5.指令dk-loading-textSize 加载中文案字体大小 默认值:15px</h3>
    <h3>6.指令dk-loading-spinnerSize 加载中文案图标大小 默认值:1em</h3>
    <h3>7.指令dk-loading-spinner 加载中文案图标 只要写入svg文件的内元素就OK</h3>
    <div
      v-dk-loading="true"
      dk-loading-text="加载中..."
      dk-loading-color="#262335"
      dk-loading-background="rgba(26, 115, 232, 0.7)"
      dk-loading-textSize="60px"
      dk-loading-spinnerSize="90px"
      class="isHello"
    ></div>
  </div>
</template>
<!--<g fill=&quot;currentColor&quot; stroke=&quot;currentColor&quot;><path d=&quot;M578.752 261.376m-69.312 0a1.083 1.083 0 1 0 138.624 0 1.083 1.083 0 1 0-138.624 0Z&quot; p-id=&quot;10731&quot;></path><path d=&quot;M533.824 730.88c24.64-96.896 76.608-310.784 61.44-340.16C591.616 383.488 584.32 379.392 575.232 379.392c-40.448 0-168.896 102.592-194.24 123.136L375.872 506.752l0 28.224 94.72-23.744c-11.2 56.256-41.344 205.12-52.8 238.08-9.024 25.984-8 48.768 2.944 64C426.752 821.888 438.656 832 461.056 832c9.216 0 19.584-1.728 30.784-5.12 61.184-18.752 114.56-107.648 116.8-111.488l32.384-54.528-52.288 35.904C561.536 715.264 544.448 725.376 533.824 730.88z&quot;></path><path d=&quot;M512 64C264.576 64 64 264.576 64 512c0 247.488 200.576 448 448 448 247.36 0 448-200.512 448-448C960 264.576 759.36 64 512 64zM512 889.728c-208.576 0-377.728-169.152-377.728-377.728 0-208.64 169.152-377.728 377.728-377.728 208.64 0 377.728 169.152 377.728 377.728C889.728 720.64 720.64 889.728 512 889.728z&quot;></path></g>-->
<style lang="scss" scoped>
  .isLoading {
    .isHello {
      width: 500px;
      height: 500px;
    }
  }
</style>
