# rate 评分

打分组件，支持自定义图标。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkrate)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/dkrate.md)

## <a id="基础用法">基础用法</a>

`number-value` 属性用于设置最大分值, `v-model` 属性用于设置当前分值（默认值）。

:::module
<template #code>

<div class="dk-rate__docs">
<div><dk-rate v-model="value" number-value="5"></dk-rate></div>
<div><dk-rate v-model="value" disabled number-value="5"></dk-rate>（禁用状态）</div>
<div><dk-rate v-model="value" show-score number-value="5"></dk-rate></div>
</div>
</template>

```vue
<template>
  <div class="dk-rate">
    <dk-rate v-model="value" number-value="5" @change='handleChange'></dk-rate>
    <dk-rate v-model="value" disabled number-value="5"></dk-rate>
    <dk-rate v-model="value" show-score number-value="5"></dk-rate>
  </div>
</template>

<script>
  export default defineComponent({
    name: 'component-rate',
    setup() {
      const data = reactive({
        value: 3,
        numberValue: 5
      })
      const handleChange = (value: number): void => {
        checked.value = value
        alert(`当前评分为:${value}`)
      }
      return {
        ...toRefs(data),
        handleChange
      }
    }
  })
</script>
```

:::

## 属性

| 参数                    | 说明         | 类型      | 可选值 | 默认值           |
| ----------------------- | ------------ | --------- | ------ | ---------------- |
| [modelValue](#基础使用) | 评分值       | `number`  | -      | `0`              |
| `disabled`              | 可选状态     | `Boolean` | -      | ` true` `false ` |
| `show-score`            | 展示当前评分 | `Boolean` | -      | ` true` `false ` |

## 回调

| 事件名   | 说明               | 回调参数       |
| -------- | ------------------ | -------------- |
| `change` | 点击评分变化时出发 | `() => number` |
