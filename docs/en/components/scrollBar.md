# scrollBar

Scroll bar component

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkscrollbar)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/components/scrollBar.md)

## <a id='Basic usage'>Basic usage</a>

`height` Set the height of the scrolling area

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

## <a id='Horizontal scrolling'>Horizontal scrolling</a>

When the width of the element is greater than the width of the scrolling area, the scrollbar will automatically appear as a horizontal scrollbar.

::: module
<template #code>
<ScrollBarComp class='docs-scroll-bar' transverse='true' height="80px"></ScrollBarComp>
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
  .content {
    width: fit-content;
    display: flex;
    .item {
      width: 50px;
      height: 50px;
      display: flex;
      margin: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 4px;
      background: rgba($color: #1cb1a4, $alpha: 0.5);
      color: #fff;
    }
  }
</style>
```

## <a id='属性'>属性</a>

| parameter      | explain                           | type     | Optional values | Default value |
| -------------- | --------------------------------- | -------- | --------------- | ------------- |
| `height`       | Scrolling area height             | `string` | -               | -             |
| `width`        | Scrolling area width              | `string` | -               | -             |
| `bar-width`    | Scroll bar width                  | `string` | -               | `6px`         |
| `track-color`  | Scroll bar track color            | `string` | -               | `transparent` |
| `thumb-color`  | Scroll bar slider color           | `string` | -               | `#c1c1c1`     |
| `thumb-radius` | Scroll bar slider rounded corners | `string` | -               | `4px`         |

## <a id='Slots'>Slots</a>

| name     | explain         |
| -------- | ------------ |
| `default` | Scroll Area Content |

## <a id='事件'>事件</a>

| Event Name | explain             | Callback Arguments  |
| -------- | ---------------- | -------- |
| `scroll` | Triggered when the scroll bar scrolls | `({ scrollTop: number, scrollTop: number}): => void` |

## <a id='Contributors'>Contributors</a>

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/dk-plus-ui" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>

<script lang='ts' setup>
  import ScrollBarComp from './vueDome/scrollbar/index.vue';
</script>
