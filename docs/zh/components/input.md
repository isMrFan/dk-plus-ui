# input 输入框

简易且不简单的输入框组件

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkinput)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/components/input.md)

## <a id='基础输入框'>基础输入框</a>

`type` 输入框类型 type 设置 text | password | email | number | tel | url 默认:text

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容"></dk-input>
</template>

```html
<dk-input placeholder="请输入内容"></dk-input>
```

:::

## <a id='禁用状态'>禁用状态</a>

`disabled` 属性可以将输入框设置为禁用状态

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" disabled></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" disabled></dk-input>
```

:::

## <a id='前后缀'>前后缀</a>

`prefix-icon` 和 `suffix-icon` 属性可以在输入框前后添加图标，
`prefix` 和 `suffix` 插槽可以在输入框前后添加自定义内容。

::: module
<template #code>
<dk-input class='docs-input' placeholder="prefix-icon" prefix-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="suffix-icon" suffix-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="slot">
    <template #prefix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
</dk-input>
</template>

```html
<dk-input placeholder="prefix-icon" prefix-icon="IconSearch"></dk-input>
<dk-input placeholder="suffix-icon" suffix-icon="IconSearch"></dk-input>
<dk-input placeholder="slot">
    <template #prefix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
</dk-input>
```

:::

## <a id='前后置标签'>前后置标签</a>

`prepend` 和 `append` 插槽可以在输入框前后添加标签，
`prepend-icon` 和 `append-icon` 属性可以在输入框前后添加图标，
`prepend-text` 和 `append-text` 属性可以在输入框前后添加文本，
> 注意⚠️：优先级顺序为：prepend > prepend-icon > prepend-text

::: module
<template #code>
<dk-input class='docs-input' placeholder="prepend" prepend>
    <template #prepend>
        <div>https://</div>
    </template>
</dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append" append>
    <template #append>
        <div>.com</div>
    </template>
</dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="prepend-icon" prepend-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append-icon" append-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="prepend-text" prepend-text="https://"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append-text" append-text=".com"></dk-input>
</template>

```html
<dk-input placeholder="prepend" prepend>
    <template #prepend>
        <div>https://</div>
    </template>
</dk-input>
<dk-input placeholder="append" append>
    <template #append>
        <div>.com</div>
    </template>
</dk-input>
<dk-input placeholder="prepend-icon" prepend-icon="IconSearch"></dk-input>
<dk-input placeholder="append-icon" append-icon="IconSearch"></dk-input>
<dk-input placeholder="prepend-text" prepend-text="https://"></dk-input>
<dk-input placeholder="append-text" append-text=".com"></dk-input>
```

:::

## <a id='文本域'>文本域</a>

`type` 属性设置为 `textarea` 可以将输入框设置为文本域， `autosize` 属性可以自适应高度。

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" type="textarea"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="请输入内容" type="textarea" autosize></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" type="textarea"></dk-input>
<dk-input placeholder="请输入内容" type="textarea" autosize></dk-input>
```

:::

## <a id='数字输入框'>数字输入框</a>

`type` 属性设置为 `number` 可以将输入框设置为数字输入框。

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" type="number"></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" type="number"></dk-input>
```

:::

## <a id='密码输入框'>密码输入框</a>

`type` 属性设置为 `password` 可以将输入框设置为密码输入框，`show-password` 属性可以显示密码切换按钮。

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" type="password"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="请输入内容" type="password" show-password></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" type="password"></dk-input>
<dk-input placeholder="请输入内容" type="password" show-password></dk-input>
```

:::

## <a id='长度限制'>长度限制</a>

`maxlength` 和 `minlength` 属性可以限制输入框的最大长度和最小长度, `show-length` 属性可以显示输入框的长度。

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" show-length maxlength="10"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="请输入内容" minlength="10"></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" show-length maxlength="10"></dk-input>
<dk-input placeholder="请输入内容" minlength="10"></dk-input>
```

:::

## <a id='个性化'>个性化</a>

`personality` 开启个性化，`personality-type` 支持个性化类型。

::: module
<template #code>
<dk-input class='docs-input' placeholder="请输入内容" personality personality-type="underline"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="请输入内容" personality personality-type="borderRadius"></dk-input>
</template>

```html
<dk-input placeholder="请输入内容" personality personality-type="underline"></dk-input>
<dk-input placeholder="请输入内容" personality personality-type="borderRadius"></dk-input>
```

:::


## <a id='属性'>属性</a>

| 属性 | 说明 | 类型 | 可选值 | 默认值 | 
| --- | --- | --- | --- | --- |
| `type` | [类型](#基础输入框) | `string` | `text` `textarea` `number` `password` `text` | `text` |
| `placeholder` | 占位符 | `string` | - | - |
| `disabled` | [禁用](#禁用状态) | `boolean` | - | `false` |
| `readonly` | 只读 | `boolean` | - | `false` |
| `clearable` | 可清空 | `boolean` | - | `false` |
| `show-password` | 显示密码切换按钮 | `boolean` | - | `false` |
| `prefix-icon` | [输入框头部图标](#前后缀) | `string` | - | - |
| `suffix-icon` | [输入框尾部图标](#前后缀) | `string` | - | - |
| `prepend-icon` | [输入框前部图标](#前后置标签) | `string` | - | - |
| `append-icon` | [输入框后部图标](#前后置标签) | `string` | - | - |
| `prepend-text` | [输入框前部文本](#前后置标签) | `string` | - | - |
| `append-text` | [输入框后部文本](#前后置标签) | `string` | - | - |
| `autosize` | [自适应高度（只对textarea生效）](#文本域) | `boolean` | - | `false` |
| `rows` | [输入框行数（只对textarea生效）](#文本域) | `number` | - | `1` |
| `maxlength` | [输入框最大长度](#长度限制) | `number` | - | - |
| `minlength` | [输入框最小长度](#长度限制) | `number` | - | - | 
| `show-length` | [是否显示输入框长度](#长度限制) | `boolean` | - | `false` |
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
| `border` | 输入框边框 | `string` | `auto` `none` | `auto` |
<!-- | `max-rows` | 输入框最大行数（只对textarea生效） | `number` | - | `6` | -->
<!-- | `max` | 输入框最大值（只对number生效） | `number` | - | - | -->
<!-- | `min` | 输入框最小值（只对number生效） | `number` | - | - | -->
<!-- | `step` | 输入框步长（只对number生效） | `number` | - | `1` | -->
<!-- | `name` | 原生属性 | `string` | - | - | -->
<!-- | `form` | 原生属性 | `string` | - | - | -->
<!-- | `label` | 输入框标签 | `string` | - | - | -->
<!-- | `label-width` | 输入框标签宽度 | `string` | - | - | -->

## <a id='事件'>事件</a>

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| `focus` | 输入框聚焦时触发 | `(event: FocusEvent) => void` |
| `blur` | 输入框失焦时触发 | `(event: FocusEvent) => void` |
| `clear` | 点击清空按钮时触发 | - |
| `enter` | 按下回车键时触发 | `(value: string | number) => void` |
<!-- | `change` | 输入框内容变化时触发 | `value: string` | -->

## <a id='插槽'>插槽</a>

| 插槽名称 | 说明 |
| --- | --- |
| `prepend` | 输入框前部内容 |
| `append` | 输入框后部内容 |
| `prefix` | 输入框头部内容 |
| `suffix` | 输入框尾部内容 |

## <a id='Contributors'>Contributors</a>

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/dk-plus-ui" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>