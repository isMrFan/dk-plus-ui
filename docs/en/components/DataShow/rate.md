# rate

Scoring components, support for custom ICONS.

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkrate)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/dkrate.md)

## <a id="Basicusage">Basic usage</a>

`number-value` Property to set the maximum score value, `v-model` Property is used to set the current score value (default value).

:::module
<template #code>

<div class="dk-rate__docs">
<div><dk-rate v-model="value" number-value="5"></dk-rate></div>
<div><dk-rate v-model="value" disabled number-value="5"></dk-rate>(Disabled state)</div>
<div><dk-rate v-model="value" show-score number-value="5"></dk-rate></div>
</div>
</template>

```vue
<template>
  <div class="dk-rate">
    <dk-rate v-model="value" number-value="5" @change="handleChange"></dk-rate>
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
        alert(`The current rating is:${value}`)
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

## attribute

| argument                  | explain                | type      | Optional values | Default value    |
| ------------------------- | ---------------------- | --------- | --------------- | ---------------- |
| [modelValue](#Basicusage) | Rating value           | `number`  | -               | `0`              |
| `disabled`                | Optional status        | `Boolean` | -               | ` true` `false ` |
| `show-score`              | Display current rating | `Boolean` | -               | ` true` `false ` |

## Callback

| Event Name | explain                                | Callback Arguments |
| ---------- | -------------------------------------- | ------------------ |
| `change`   | Depart when rating changes are clicked | `() => number`     |
