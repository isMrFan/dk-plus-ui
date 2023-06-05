# input 输入框

简易且不简单的输入框组件

- [源代码](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/dkinput)
- [文档编辑](https://github.com/CadWalaDers/dk-ui/blob/master/docs/components/input.md)

## 1.基础输入框

`type` 输入框类型 type 设置 text | password | email | number | tel | url 默认:text

::: module
<template #code>
<Dk-Input placeholder="请输入内容"></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容"></Dk-Input>
```

:::

## 2.禁用状态

`disabled` 属性可以将输入框设置为禁用状态

::: module
<template #code>
<Dk-Input placeholder="请输入内容" disabled></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" disabled></Dk-Input>
```

:::

## 3.前置/后置标签

`prepend-text` 和 `append-text` 属性可以在输入框前后添加标签

::: module
<template #code>
<Dk-Input placeholder="请输入内容" prepend-text="https://" append-text=".com"></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" prepend-text="https://" append-text=".com"></Dk-Input>
```

:::

## 4.前置/后置图标

`prepend-icon` 和 `append-icon` 属性可以在输入框前后添加图标

::: module
<template #code>
<Dk-Input placeholder="请输入内容" prepend-icon="IconFile" append-icon="IconCloudSearch"></Dk-Input>
</template>

```html
<Dk-Input placeholder="请输入内容" prepend-icon="IconFile" append-icon="IconCloudSearch" ></Dk-Input>
```

:::
