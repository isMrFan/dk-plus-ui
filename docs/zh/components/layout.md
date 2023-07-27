# Layout 布局

迅速简便的创建布局的容器。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkrow)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/layout.md)

## <a id='基础使用'></a>

通过 `row` 和 `col` 组件，就可以创建出基础的栅格布局。

::: module

<template #code>
<LayoutComp class="docs-row">
  <dk-col>
    <div class="dark"></div>
  </dk-col>
</LayoutComp>
</template>

```html
<template>
  <dk-row>
    <dk-col>
      <div class="dark"></div>
    </dk-col>
  </dk-row>
</template>
<style>
  .dark {
    height: 100%;
    height: 32px;
    border-radius: 4px;
    background-color: #ccc;
  }
</style>
```

:::

## <a id='尺寸'></a>

<script setup>
  import LayoutComp from './vueDome/layout/index.vue'
</script>
