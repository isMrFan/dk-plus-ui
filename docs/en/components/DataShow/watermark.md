# watermark

Watermark component, supporting custom colors, positions, etc.

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkwatermark)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/dkwatermark.md)

## <a id="Basic usage">Basic usage</a>

:::module
<template #code>

<div class="dk-watermark-box" style="width: 100%;height: 300px;">
  <dk-watermark value="dk-watermark"></dk-watermark>
</div>
</template>

```vue
<template>
  <dk-watermark value="dk-watermark"></dk-watermark>
</template>
```

:::

## Stats

| Stats            | Instructions                       | type      | Optional value | Default value |
| ---------------- | ---------------------------------- | --------- | -------------- | ------------- |
| `value`          | Watermarking content               | `string`  | -              | -             |
| `color`          | Watermark color                    | `string`  | -              | `#000`        |
| `opacity`        | Watermark transparency             | `number`  | -              | `0.15`        |
| `rotate`         | Watermark rotation Angle           | `number`  | -              | `-20`         |
| `append-to-body` | Whether to add to the body element | `boolean` | -              | `false`       |
