# Button 按钮

这是一个看起非常普通的按钮，但是它的功能却非常强大。

- [源代码](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/dkbutton)
- [文档编辑](https://github.com/CadWalaDers/dk-ui/blob/master/docs/components/button.md)

## 1.基础按钮

`type` 按钮类型 type 设置 default | primary | success | info | warning | danger 默认:default

::: module
<template #code>
<Dk-Button>默认</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
</template>

```html
<Dk-Button> 默认</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
```

:::

## 2.圆形按钮

`circle` 属性可以将按钮变成圆形按钮

::: module
<template #code>
<Dk-Button circle>范</Dk-Button>
<Dk-Button circle type="primary">先</Dk-Button>
<Dk-Button circle type="success">生</Dk-Button>
<Dk-Button circle type="info">英</Dk-Button>
<Dk-Button circle type="warning">杰</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
</template>

```html
<Dk-Button circle>范</Dk-Button>
<Dk-Button circle type="primary">先</Dk-Button>
<Dk-Button circle type="success">生</Dk-Button>
<Dk-Button circle type="info">英</Dk-Button>
<Dk-Button circle type="warning">杰</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
```

:::

## 3.圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮  `round` 和 `circle` 不能同时使用

::: module
<template #code>
<dk-button round>默认按钮</dk-button>
<dk-button round type="primary">主要按钮</dk-button>
<dk-button round type="success">成功按钮</dk-button>
<dk-button round type="info">信息按钮</dk-button>
<dk-button round type="warning">警告按钮</dk-button>
<dk-button round type="danger">危险按钮</dk-button>
</template>

```html
<dk-button round>默认按钮</dk-button>
<dk-button round type="primary">主要按钮</dk-button>
<dk-button round type="success">成功按钮</dk-button>
<dk-button round type="info">信息按钮</dk-button>
<dk-button round type="warning">警告按钮</dk-button>
<dk-button round type="danger">危险按钮</dk-button>

```

:::

## 4.带有阴影

`shadow` 可以自定义按钮的阴影样式，可传入一个原生[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

::: module
<template #code>
<dk-button shadow="0 1px 10px 0 #f0f0f0">默认按钮</dk-button>
<dk-button shadow="0 1px 10px 0 #409eff" type="primary" size="large">基础</dk-button>
<dk-button shadow="0 1px 10px 0 #67c23a" type="success" size="large">成功</dk-button>
<dk-button shadow="0 1px 10px 0 #909399" type="info" size="large">信息</dk-button>
<dk-button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">警告
</dk-button>
<dk-button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">危险
</dk-button>
</template>

```html
<dk-button 
  shadow="0 1px 10px 0 #f0f0f0"
  >
  默认按钮
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #409eff" 
  type="primary"
  >
  基础
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #67c23a" 
  type="success"
  >
  成功
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #909399" 
  type="info"
  >
  信息
  </dk-button>
<dk-button 
  shadow="0 1px 10px 0 #e6a23c" 
  type="warning"
  >
  警告
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #f56c6c" 
  type="danger"
  >
  危险
</dk-button>

```

:::

## 5.涟漪效果(不可和扩散效果联动因为太丑)

`ripples` 可以配置是否展示点击涟漪效果  false | true

`ripples-bg-color` 自定义涟漪背景色(支持16进制,支持rgb,支持rgba)

::: module
<template #code>
<dk-button ripples>默认</dk-button>
<dk-button type="primary" ripples>基础信息</dk-button>
<dk-button type="success" ripples>成功按钮</dk-button>
<dk-button type="info" ripples>信息按钮</dk-button>
<dk-button type="warning" ripples>警告按钮</dk-button>
<dk-button type="danger" ripples>危险按钮</dk-button>
<dk-button ripples type="primary" ripples-bg-color="red">
  自定义涟漪颜色
</dk-button>
</template>

```html
<dk-button ripples>默认</dk-button>
<dk-button type="primary" ripples>基础信息</dk-button>
<dk-button type="success" ripples>成功按钮</dk-button>
<dk-button type="info" ripples>信息按钮</dk-button>
<dk-button type="warning" ripples>警告按钮</dk-button>
<dk-button type="danger" ripples>危险按钮</dk-button>

```

:::

## 6.扩散效果(不可和涟漪效果联动因为太丑)

`diffusion` 可以配置是否展示点击扩散效果 false | true

`diffusion-bg-color` 自定义扩散效果背景色(支持16进制,支持rgb,支持rgba)

::: module
<template #code>
<dk-button diffusion type="primary">基础信息</dk-button>
<dk-button diffusion type="success">成功按钮</dk-button>
<dk-button diffusion type="info">信息按钮</dk-button>
<dk-button diffusion type="warning">警告按钮</dk-button>
<dk-button diffusion type="danger" >危险按钮</dk-button>
<dk-button diffusion type="success">默认按钮</dk-button>
<dk-button diffusion type="primary" diffusion-bg-color="red">自定扩散效果 颜色</dk-button>
</template>

```html
<dk-button diffusion type="primary">基础信息</dk-button>
<dk-button diffusion type="success">成功按钮</dk-button>
<dk-button diffusion type="info">信息按钮</dk-button>
<dk-button diffusion type="warning">警告按钮</dk-button>
<dk-button diffusion type="danger" >危险按钮</dk-button>
<dk-button diffusion type="success">默认按钮</dk-button>
<dk-button 
  diffusion 
  type="primary" 
  diffusion-bg-color="red"
  >
  自定扩散效果 颜色
</dk-button>

```

:::

## 7.禁用状态

`disabled` 可以配置是否禁用按钮 默认为false

::: module
<template #code>
<Dk-Button disabled>默认</Dk-Button>
<Dk-Button type="primary" disabled>主要按钮</Dk-Button>
<Dk-Button type="success" disabled>成功按钮</Dk-Button>
<Dk-Button type="info" disabled>信息按钮</Dk-Button>
<Dk-Button type="warning" disabled>警告按钮</Dk-Button>
<Dk-Button type="danger" disabled>危险按钮</Dk-Button>
</template>

```html
<Dk-Button disabled>默认</Dk-Button>
<Dk-Button type="primary" disabled>主要按钮</Dk-Button>
<Dk-Button type="success" disabled>成功按钮</Dk-Button>
<Dk-Button type="info" disabled>信息按钮</Dk-Button>
<Dk-Button type="warning" disabled>警告按钮</Dk-Button>
<Dk-Button type="danger" disabled>危险按钮</Dk-Button>

```

:::

## 8.不同尺寸

`size` 可以配置按钮的大小 large | medium | small | mini

::: module
<template #code>
<Dk-Button size="large">默认</Dk-Button>
<Dk-Button type="primary" size="large">主要按钮</Dk-Button>
<Dk-Button type="success" size="medium">成功按钮</Dk-Button>
<Dk-Button type="info" size="small">信息按钮</Dk-Button>
<Dk-Button type="warning" size="mini">警告按钮</Dk-Button>
<Dk-Button type="danger" size="mini">危险按钮</Dk-Button>
</template>

```html
<Dk-Button size="large">默认</Dk-Button>
<Dk-Button type="primary" size="large">主要按钮</Dk-Button>
<Dk-Button type="success" size="medium">成功按钮</Dk-Button>
<Dk-Button type="info" size="small">信息按钮</Dk-Button>
<Dk-Button type="warning" size="mini">警告按钮</Dk-Button>
<Dk-Button type="danger" size="mini">危险按钮</Dk-Button>

```

:::

## 9.图标按钮


## Button Attributes V0.0.1 版本



## Contributors

<div style='display: flex;'>
  <a href="https://github.com/CadWalaDers" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/CadWalaDers" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4" />
  </a>
</div>
