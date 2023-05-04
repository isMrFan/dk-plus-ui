# Button 按钮

这是一个看起非常普通的按钮，但是它的功能却非常强大。

- [源代码](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/dkbutton)
- [文档编辑](https://github.com/CadWalaDers/dk-ui/blob/master/docs/components/button.md)

## 基础用法 `type`

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

::: module

<template #code>
<Dk-Button type="default">默认按钮</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default">默认按钮</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
```

:::

## 禁用状态 `disable`

`disable` 禁用状态 disable 设置 true | false 默认:false

::: module

<template #code>
<Dk-Button type="default" disable>默认按钮</Dk-Button>
<Dk-Button type="primary" disable>主要按钮</Dk-Button>
<Dk-Button type="success" disable>成功按钮</Dk-Button>
<Dk-Button type="info" disable>信息按钮</Dk-Button>
<Dk-Button type="warning" disable>警告警告按钮</Dk-Button>
<Dk-Button type="danger" disable>危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default" disable>默认按钮</Dk-Button>
<Dk-Button type="primary" disable>主要按钮</Dk-Button>
<Dk-Button type="success" disable>成功按钮</Dk-Button>
<Dk-Button type="info" disable>信息按钮</Dk-Button>
<Dk-Button type="warning" disable>警告警告按钮</Dk-Button>
<Dk-Button type="danger" disable>危险按钮</Dk-Button>
```

:::

## 圆角按钮 `round`

`round` 圆角按钮 round 设置 true | false 默认:false

::: module

<template #code>
<Dk-Button type="default" round>默认按钮</Dk-Button>
<Dk-Button type="primary" round>主要按钮</Dk-Button>
<Dk-Button type="success" round>成功按钮</Dk-Button>
<Dk-Button type="info" round>信息按钮</Dk-Button>
<Dk-Button type="warning" round>警告警告按钮</Dk-Button>
<Dk-Button type="danger" round>危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default" round>默认按钮</Dk-Button>
<Dk-Button type="primary" round>主要按钮</Dk-Button>
<Dk-Button type="success" round>成功按钮</Dk-Button>
<Dk-Button type="info" round>信息按钮</Dk-Button>
<Dk-Button type="warning" round>警告警告按钮</Dk-Button>
<Dk-Button type="danger" round>危险按钮</Dk-Button>
```

:::

## 圆形按钮 `circle`

`circle` 圆角按钮 circle true | false 默认:false

::: module

<template #code>
<Dk-Button type="default" circle>默认按钮</Dk-Button>
<Dk-Button type="primary" circle>主要按钮</Dk-Button>
<Dk-Button type="success" circle>成功按钮</Dk-Button>
<Dk-Button type="info" circle>信息按钮</Dk-Button>
<Dk-Button type="warning" circle>警告警告按钮</Dk-Button>
<Dk-Button type="danger" circle>危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default" circle>默认按钮</Dk-Button>
<Dk-Button type="primary" circle>主要按钮</Dk-Button>
<Dk-Button type="success" circle>成功按钮</Dk-Button>
<Dk-Button type="info" circle>信息按钮</Dk-Button>
<Dk-Button type="warning" circle>警告警告按钮</Dk-Button>
<Dk-Button type="danger" circle>危险按钮</Dk-Button>
```

:::

## 图标按钮 `icon`

`icon` 图标按钮 icon 设置 iconfont 图标

::: module

<template #code>
<Dk-Button type="default" round icon='dk-icon-search'>默认按钮</Dk-Button>
<Dk-Button type="primary" round icon='dk-icon-link'>主要按钮</Dk-Button>
<Dk-Button type="success" round icon='dk-icon-collect2'>成功按钮</Dk-Button>
<Dk-Button type="info" round icon='dk-icon-hide1'>信息按钮</Dk-Button>
<Dk-Button type="warning" round icon='dk-icon-lockClose1'>警告警告按钮</Dk-Button>
<Dk-Button type="danger" round icon='dk-icon-zhiFuBao'>危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default" round icon="dk-icon-search">默认按钮</Dk-Button>
<Dk-Button type="primary" round icon="dk-icon-link">主要按钮</Dk-Button>
<Dk-Button type="success" round icon="dk-icon-collect2">成功按钮</Dk-Button>
<Dk-Button type="info" round icon="dk-icon-hide1">信息按钮</Dk-Button>
<Dk-Button type="warning" round icon="dk-icon-lockClose1">警告警告按钮</Dk-Button>
<Dk-Button type="danger" round icon="dk-icon-zhiFuBao">危险按钮</Dk-Button>
```

:::

## 按钮大小 `size`

`size` 大按钮和小按钮的切换 size 设置 large | small 默认:large

::: module

<template #code>
<Dk-Button type="default"  icon='dk-icon-search' size='small'>默认按钮</Dk-Button>
<Dk-Button type="primary"  icon='dk-icon-link' size='small'>主要按钮</Dk-Button>
<Dk-Button type="success"  icon='dk-icon-collect2' size='small'>成功按钮</Dk-Button>
<Dk-Button type="info"  icon='dk-icon-hide1' size='small'>信息按钮</Dk-Button>
<Dk-Button type="warning"  icon='dk-icon-lockClose1'>警告警告按钮</Dk-Button>
<Dk-Button type="danger"  icon='dk-icon-zhiFuBao' size='large'>危险按钮</Dk-Button>
</template>

```html
<Dk-Button type="default" icon="dk-icon-search" size="small">默认按钮</Dk-Button>
<Dk-Button type="primary" icon="dk-icon-link" size="small">主要按钮</Dk-Button>
<Dk-Button type="success" icon="dk-icon-collect2" size="small">成功按钮</Dk-Button>
<Dk-Button type="info" icon="dk-icon-hide1" size="small">信息按钮</Dk-Button>
<Dk-Button type="warning" icon="dk-icon-lockClose1">警告警告按钮</Dk-Button>
<Dk-Button type="danger" icon="dk-icon-zhiFuBao" size="large">危险按钮</Dk-Button>
```

:::

## 加载状态 `loading`

`loading` 加载中的状态 loading false | true 默认值:false  
`loadingIcon`可自定义图标
`loadingColor` 和图标颜色
::: module

<template #code>
<Dk-Button type="default" loadingColor='red'  loading loadingIcon='dk-icon-arrowGoForwardFill'>默认按钮</Dk-Button>
<Dk-Button type="primary" loadingSize='16'  loading >主要按钮</Dk-Button>
<Dk-Button type="success"  loading>成功按钮</Dk-Button>
<Dk-Button type="info"  loading>信息按钮</Dk-Button>
<Dk-Button type="warning" loading>警告警告按钮</Dk-Button>
<Dk-Button type="danger"  loading>危险按钮</Dk-Button>
</template>

```html
<Dk-Button
  type="default"
  loadingColor="red"
  loading
  loadingIcon="dk-icon-arrowGoForwardFill"
  >默认按钮</Dk-Button
>
<Dk-Button type="primary" loadingSize="16" loading>主要按钮</Dk-Button>
<Dk-Button type="success" loading>成功按钮</Dk-Button>
<Dk-Button type="info" loading>信息按钮</Dk-Button>
<Dk-Button type="warning" loading>警告警告按钮</Dk-Button>
<Dk-Button type="danger" loading>危险按钮</Dk-Button>
```

:::

## Button Attributes V0.0.1 版本

| 类型        | 说明                                                                  | 类型    | 可选值                                        | 默认值                    |
| ----------- | --------------------------------------------------------------------- | ------- | --------------------------------------------- | ------------------------- |
| type        | 按钮的类型 (不同类型对应不同的背景和字体颜色，非自定义按钮颜色时有效) | string  | `default primary success danger warning info` | default                   |
| round       | 是否为圆角按钮                                                        | boolean | ——————                                        | false                     |
| circle      | 是否为圆形按钮                                                        | boolean | ——————                                        | false                     |
| disable     | 是否禁用按钮                                                          | boolean | ——————                                        | false                     |
| size        | 大按钮和小按钮的切换                                                  | string  | `large small`                                 | large                     |
| loading     | 是否展示 loading 状态                                                 | boolean | ——————                                        | false                     |
| loadingIcon | 按钮图标                                                              | string  | `参照DK-icon组件`                             | dk-button-rotationLoading |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/CadWalaDers" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/CadWalaDers" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4" />
  </a>
</div>
