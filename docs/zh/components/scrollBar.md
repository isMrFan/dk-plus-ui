# scrollBar 滚动条

滚动条组件

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkscrollbar)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/components/scrollBar.md)

## <a id='基础使用'>基础使用</a>

`height` 设置滚动区域高度

::: module
<template #code>
<ScrollBarComp class='docs-scroll-bar' height="200px"></ScrollBarComp>
</template>

```html
<template>
  <dk-scroll-bar height="200px">
    <div class="content">
      <div class="item" v-for="item in 20" :key="item">{{item}}</div>
    </div>
  </dk-scroll-bar>
</template>
<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: rgba($color: #1cb1a4, $alpha: 0.5);
    color: #fff;
  }
</style>
```

:::

<script lang='ts' setup>
  import ScrollBarComp from './vueDome/scrollbar/index.vue';
</script>
