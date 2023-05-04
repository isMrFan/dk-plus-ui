# input

- [源代码](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/dkinput)
- [文档编辑](https://github.com/CadWalaDers/dk-ui/blob/master/docs/components/input.md)

## 基础用法

::: module

<template #code>
<dk-input type="text" placeholder="请输入内容"></dk-input>
</template>

```html
<dk-input type="text" placeholder="请输入内容"></dk-input>
```

:::

## 禁用状态`disabled`

`disabled` 禁用状态 `disable` 设置 `true | false` 默认: `false`

::: module

<template #code>
<dk-input type="text" placeholder="禁用状态" disabled></dk-input>
</template>

```html
<dk-input type="text" placeholder="禁用状态" disabled></dk-input>
```

:::

## 清空`clearable`

`clearable` 清空按钮 `clearable` 设置 `true | false` 默认: `false`

::: module

<template #code>
<dk-input type="text" placeholder="清空按钮" clearable></dk-input>
</template>

```html
<dk-input type="text" placeholder="清空按钮" clearable></dk-input>
```

:::

## 密码框`password`

`type` 设置 `password` 为密码框

::: module

<template #code>
<dk-input type="password" placeholder="密码框"></dk-input>
</template>

```html
<dk-input type="password" placeholder="密码框"></dk-input>
```

:::

## 数字框`number`

`type` 设置 `number` 为数字框

::: module

<template #code>
<dk-input type="number" placeholder="数字框"></dk-input>
</template>

```html
<dk-input type="number" placeholder="数字框"></dk-input>
```

:::

## 前后缀图标属性`prefix-icon` `suffix-icon`

`prefix-icon` 前缀 `suffix-icon` 后缀

::: module

<template #code>
<dk-input type="text" placeholder="前后缀" prefix-icon="addRemark" suffix-icon="search"></dk-input>
</template>

```html
<dk-input type="text" placeholder="前后缀" prefix-icon="addRemark" suffix-icon="search"></dk-input>
```

:::

## 前后缀插槽`prefix` `suffix`

`prefix` 前缀 `suffix` 后缀

::: module

<template #code>
<dk-input type="text" placeholder="前后缀">
  <template #prefix>
    <dk-icon class="dk-icon-addRemark"></dk-icon>
  </template>
  <template #suffix>
    <dk-icon class="dk-icon-search"></dk-icon>
  </template>
</dk-input>
</template>

```html
<dk-input type="text" placeholder="前后缀">
  <template #prefix>
    <dk-icon name="addRemark"></dk-icon>
  </template>
  <template #suffix>
    <dk-icon name="search"></dk-icon>
  </template>
</dk-input>
```

:::

## 文本域`textarea`

`type` 设置 `textarea` 为文本域

::: module

<template #code>
<dk-input type="textarea" placeholder="文本域"></dk-input>
</template>

```html
<dk-input type="textarea" placeholder="文本域"></dk-input>
```

:::

## 文本域自适应高度`autosize`

`autosize` 设置 `true | false` 默认: `false`

::: module

<template #code>
<dk-input type="textarea" placeholder="文本域自适应高度" autosize></dk-input>
</template>

```html
<dk-input type="textarea" placeholder="文本域自适应高度" autosize></dk-input>
```

:::

## 前后缀内容属性`prepend` `append`

`prepend` 前缀 `append` 后缀

::: module

<template #code>
<dk-input type="text" placeholder="前后缀内容" prepend="https://" append='.com'></dk-input>
</template>

```html
<dk-input type="text" placeholder="前后缀内容" prepend="https://" append='.com'></dk-input>
```

:::

## 前后缀内容插槽`prepend` `append`

`prepend` 前缀 `append` 后缀

::: module

<template #code>
<dk-input type="text" placeholder="前后缀内容">
  <template #prepend>
    <span>https://</span>
  </template>
  <template #append>
    <span>.com</span>
  </template>
</dk-input>
</template>

```html
<dk-input type="text" placeholder="前后缀内容">
  <template #prepend>
    <span>https://</span>
  </template>
  <template #append>
    <span>.com</span>
  </template>
</dk-input>
```

:::

## 尺寸`size`

`size` 设置 `large | medium | small | mini` 默认: `small`

::: module

<template #code>
<dk-input type="text" placeholder="large" size="large"></dk-input>
<br>
<dk-input type="text" placeholder="medium" size="medium"></dk-input>
<br>
<dk-input type="text" placeholder="small" size="small"></dk-input>
<br>
<dk-input type="text" placeholder="mini" size="mini"></dk-input>
</template>

```html
<dk-input type="text" placeholder="large" size="large"></dk-input>
<dk-input type="text" placeholder="medium" size="medium"></dk-input>
<dk-input type="text" placeholder="small" size="small"></dk-input>
<dk-input type="text" placeholder="mini" size="mini"></dk-input>
```

:::

## 长度限制`maxlength` `minlength`

`maxlength` 最大长度 `minlength` 最小长度，
显示长度提示 `show-word-limit` 设置 `true | false` 默认: `false`

::: module

<template #code>
<dk-input type="text" placeholder="最大长度" maxlength="10" show-length-limit></dk-input>
<br>
<dk-input type="text" placeholder="最小长度" minlength="5" show-length-limit></dk-input>
</template>

```html
<dk-input type="text" placeholder="最大长度" maxlength="10" show-length-limit></dk-input>
<dk-input type="text" placeholder="最小长度" minlength="5" show-length-limit></dk-input>
```

:::

## API

### Input Attributes V0.0.1版本

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型 | `String` | `text` `textarea` `password` `number` | `text` |
| v-model | 绑定值 | `String` | - | - |
| placeholder | 占位文本 | `String` | - | - |
| disabled | 禁用 | `Boolean` | - | `false` |
| clearable | 是否可清空 | `Boolean` | - | `false` |
| show-password | 是否显示切换密码图标 | Boolean | - | `false` |
| prefix-icon | 输入框头部图标 | `String` | - | - |
| suffix-icon | 输入框尾部图标 | `String` | - | - |
| prepend | 输入框前置内容 | `String` | - | - |
| append | 输入框后置内容 | `String` | - | - |
| size | 输入框尺寸 | `String` | `large` `medium` `small` `mini` | `small` |
| maxlength | 最大输入长度 | `Number` | - | - |
| minlength | 最小输入长度 | `Number` | - | - |
| show-word-limit | 是否显示输入字数统计，需要设置`maxlength`或`minlength` | `Boolean` | - | `false` |
| autosize | 自适应内容高度，只对type="textarea"有效，可传入对象，如，`{ minRows: 2, maxRows: 6 }` | `Boolean` | - | `false` |
| rows | 输入框行数，只对`type="textarea"`有效 | Number | - | `2` |
<!-- | resize | 控制是否能被用户缩放 | String | `none` `both` `horizontal` `vertical` | `none` |
| autofocus | 原生属性，自动获取焦点 | Boolean | - | `false` | -->