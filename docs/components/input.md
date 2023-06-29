# input 输入框

简易且不简单的输入框组件

- [源代码](https://github.com/dk-plus-ui/dk-ui/tree/master/packages/components/dkinput)
- [文档编辑](https://github.com/dk-plus-ui/dk-ui/blob/master/docs/components/input.md)

## 基础输入框

`type` 输入框类型 type 设置 text | password | email | number | tel | url 默认:text

::: module
<template #code>
<Dk-Input placeholder="请输入内容"></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容"></Dk-Input>
```

:::

## 禁用状态

`disabled` 属性可以将输入框设置为禁用状态

::: module
<template #code>
<Dk-Input placeholder="请输入内容" disabled></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" disabled></Dk-Input>
```

:::

## 前后缀

`prefix-icon` 和 `suffix-icon` 属性可以在输入框前后添加图标，
`prefix` 和 `suffix` 插槽可以在输入框前后添加自定义内容。

::: module
<template #code>
<Dk-Input placeholder="prefix-icon" prefix-icon="IconSearch"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="suffix-icon" suffix-icon="IconSearch"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="slot">
    <template #prefix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
</Dk-Input>
</template>

```html
<Dk-Input placeholder="prefix-icon" prefix-icon="IconSearch"></Dk-Input>
<Dk-Input placeholder="suffix-icon" suffix-icon="IconSearch"></Dk-Input>
<Dk-Input placeholder="slot">
    <template #prefix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
</Dk-Input>
```

:::

## 前后置标签

`prepend` 和 `append` 插槽可以在输入框前后添加标签，
`prepend-icon` 和 `append-icon` 属性可以在输入框前后添加图标，
`prepend-text` 和 `append-text` 属性可以在输入框前后添加文本，
> 注意⚠️：优先级顺序为：prepend > prepend-icon > prepend-text

::: module
<template #code>
<Dk-Input placeholder="prepend" prepend>
    <template #prepend>
        <div>https://</div>
    </template>
</Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="append" append>
    <template #append>
        <div>.com</div>
    </template>
</Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="prepend-icon" prepend-icon="IconSearch"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="append-icon" append-icon="IconSearch"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="prepend-text" prepend-text="https://"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="append-text" append-text=".com"></Dk-Input>
</template>

```html
<Dk-Input placeholder="prepend" prepend>
    <template #prepend>
        <div>https://</div>
    </template>
</Dk-Input>
<Dk-Input placeholder="append" append>
    <template #append>
        <div>.com</div>
    </template>
</Dk-Input>
<Dk-Input placeholder="prepend-icon" prepend-icon="IconSearch"></Dk-Input>
<Dk-Input placeholder="append-icon" append-icon="IconSearch"></Dk-Input>
<Dk-Input placeholder="prepend-text" prepend-text="https://"></Dk-Input>
<Dk-Input placeholder="append-text" append-text=".com"></Dk-Input>
```

:::

## 文本域

`type` 属性设置为 `textarea` 可以将输入框设置为文本域， `autosize` 属性可以自适应高度。

::: module
<template #code>
<Dk-Input placeholder="请输入内容" type="textarea"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="请输入内容" type="textarea" autosize></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" type="textarea"></Dk-Input>
<Dk-Input placeholder="请输入内容" type="textarea" autosize></Dk-Input>
```

:::

## 数字输入框

`type` 属性设置为 `number` 可以将输入框设置为数字输入框。

::: module
<template #code>
<Dk-Input placeholder="请输入内容" type="number"></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" type="number"></Dk-Input>
```

:::

## 密码输入框

`type` 属性设置为 `password` 可以将输入框设置为密码输入框，`show-password` 属性可以显示密码切换按钮。

::: module
<template #code>
<Dk-Input placeholder="请输入内容" type="password"></Dk-Input>
<div style='margin-top: 10px;'></div>
<Dk-Input placeholder="请输入内容" type="password" show-password></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" type="password"></Dk-Input>
<Dk-Input placeholder="请输入内容" type="password" show-password></Dk-Input>
```

:::

## 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 | 
| --- | --- | --- | --- | --- |
| `type` | 类型 | `string` | `text` `textarea` `number` `password` `text` | `text` |
| `placeholder` | 占位符 | `string` | - | - |
| `disabled` | 禁用 | `boolean` | - | `false` |
| `readonly` | 只读 | `boolean` | - | `false` |
| `clearable` | 可清空 | `boolean` | - | `false` |
| `show-password` | 显示密码切换按钮 | `boolean` | - | `false` |
| `prefix-icon` | 输入框头部图标 | `string` | - | - |
| `suffix-icon` | 输入框尾部图标 | `string` | - | - |
| `prepend-icon` | 输入框前部图标 | `string` | - | - |
| `append-icon` | 输入框后部图标 | `string` | - | - |
| `prepend-text` | 输入框前部文本 | `string` | - | - |
| `append-text` | 输入框后部文本 | `string` | - | - |
| `autosize` | 自适应高度（只对textarea生效） | `boolean` | - | `false` |
| `rows` | 输入框行数（只对textarea生效） | `number` | - | `1` |
| `maxlength` | 输入框最大长度 | `number` | - | - |
| `minlength` | 输入框最小长度 | `number` | - | - | 
| `show-length` | 是否显示输入框长度 | `boolean` | - | `false` |
| `width` | 输入框宽度 | `string` | - | - |
| `height` | 输入框高度 | `string` | - | - |
| `size` | 输入框尺寸 | `string` | `large` `medium` `small` | `medium` |
| `font-size` | 输入框字体大小 | `string` | - | - |
| `border-radius` | 输入框圆角 | `string` | - | - |
| `text-color` | 输入框字体颜色 | `string` | - | - |
| `icon-size` | 输入框图标大小 | `string` | - | - |
| `border-color` | 输入框边框颜色 | `string` | - | - |
| `focus-border-color` | 输入框聚焦边框颜色 | `string` | - | - |
| `append-background` | 输入框前后置内容背景颜色 | `string` | - | - |
| `append-color` | 输入框前后置内容字体颜色 | `string` | - | - |
| `align` | 输入框内容对齐方式 | `string` | `left` `center` `right` | `left` |
<!-- | `max-rows` | 输入框最大行数（只对textarea生效） | `number` | - | `6` | -->
<!-- | `max` | 输入框最大值（只对number生效） | `number` | - | - | -->
<!-- | `min` | 输入框最小值（只对number生效） | `number` | - | - | -->
<!-- | `step` | 输入框步长（只对number生效） | `number` | - | `1` | -->
<!-- | `name` | 原生属性 | `string` | - | - | -->
<!-- | `form` | 原生属性 | `string` | - | - | -->
<!-- | `label` | 输入框标签 | `string` | - | - | -->
<!-- | `label-width` | 输入框标签宽度 | `string` | - | - | -->

## 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| `focus` | 输入框聚焦时触发 | `event: Event` |
| `blur` | 输入框失焦时触发 | `event: Event` |
| `clear` | 点击清空按钮时触发 | - |
| `enter` | 按下回车键时触发 | `event: Event` |
<!-- | `change` | 输入框内容变化时触发 | `value: string` | -->

## 插槽

| 插槽名称 | 说明 |
| --- | --- |
| `prepend` | 输入框前部内容 |
| `append` | 输入框后部内容 |
| `prefix` | 输入框头部内容 |
| `suffix` | 输入框尾部内容 |


## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/dk-plus-ui" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>