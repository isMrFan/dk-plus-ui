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
    <dk-icon name="addRemark"></dk-icon>
  </template>
  <template #suffix>
    <dk-icon name="search"></dk-icon>
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

