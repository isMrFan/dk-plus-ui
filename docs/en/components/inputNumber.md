# input-number 数字输入框

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkinputNumber)
- [文档编辑](https://github.com/dk-plus-ui/dk-ui/blob/master/docs/components/inputNumber.md)

## 基础用法

::: module
<template #code>
<dk-input-number class='docs-number' v-model="value"></dk-input-number>
</template>

```html
<dk-input-number v-model="value"></dk-input-number>
<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## 禁用状态

`disabled` 属性设置为 `true` 时，数字输入框为禁用状态。

::: module
<template #code>
<dk-input-number class='docs-number' v-model="value" disabled></dk-input-number>
</template>

```html
<dk-input-number v-model="value" disabled></dk-input-number>
</script>
```

:::

## 尺寸

`size` 属性用于控制数字输入框组件的尺寸，可选值为 `large`、`medium`、`small`(默认)和 `mini`。

::: module
<template #code>
<dk-input-number class='docs-number' size="large"></dk-input-number>
<div style='margin-top: 10px'></div>
<dk-input-number class='docs-number' size="medium"></dk-input-number>
<div style='margin-top: 10px'></div>
<dk-input-number class='docs-number' size="small"></dk-input-number>
<div style='margin-top: 10px'></div>
<dk-input-number class='docs-number' size="mini"></dk-input-number>
</template>

```html
<dk-input-number size="large"></dk-input-number>
<dk-input-number size="medium"></dk-input-number>
<dk-input-number size="small"></dk-input-number>
<dk-input-number size="mini"></dk-input-number>
```

:::

## 最大值与最小值

`max` 属性用于设置数字输入框的最大值，`min` 属性用于设置数字输入框的最小值。

::: module

<template #code>
<dk-input-number class='docs-number' v-model="value" :max="10" :min="0"></dk-input-number>
</template>

```html
<dk-input-number v-model="value" :max="10" :min="0"></dk-input-number>
<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## 步长

`step` 属性用于设置数字输入框的步长，默认为 `1`。

::: module
<template #code>
<dk-input-number class='docs-number' v-model="value" :step="2"></dk-input-number>
</template>

```html
<dk-input-number v-model="value" :step="2"></dk-input-number>
<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## 精度

`precision` 属性用于设置数字输入框的精度，默认为 `0`。

::: module
<template #code>
<dk-input-number class='docs-number' v-model="value" :precision="2"></dk-input-number>
</template>

```html
<dk-input-number v-model="value" :precision="2"></dk-input-number>
<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## 严格模式

`strict` 属性用于设置数字输入框的严格模式，当 `strict` 属性为 `true` 时，输入框的值只能输入设置好的步长值。

::: module
<template #code>
<dk-input-number class='docs-number' v-model="value" :step="2" strict></dk-input-number>
</template>

```html
<dk-input-number v-model="value" :step="2" strict></dk-input-number>
<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## 属性

| 参数      | 说明                                                                 | 类型    | 可选值 | 默认值 |
| --------- | -------------------------------------------------------------------- | ------- | ------ | ------ |
| `v-model`     | 绑定值                                                               | `number`  | —      | —      |
| `size`      | 输入框尺寸                                                           | `string`  | `large` `medium` `small` `mini`      | `small`  |
| `disabled`  | 是否禁用状态                                                         | `boolean` | —      | `false`  |
| `max`       | 设置最大值                                                           | `number`  | —      | `Infinity` |
| `min`       | 设置最小值                                                           | `number`  | —      | `-Infinity` |
| `step`      | 设置步长                                                             | `number`  | —      | `1`      |
| `precision` | 数值精度                                                             | `number`  | —      | `0`      |
| `strict`    | 是否严格模式，严格模式下，输入框的值只能输入设置好的步长值 | `boolean` | —      | `false`  |

## 事件

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| `change` | 绑定值变化时触发 | `value`  |



## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-left:20px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4">
  </a>
</div>
