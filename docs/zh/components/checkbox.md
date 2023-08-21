# Checkbox 多选框

在多个选项中进行多选。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkcheckbox)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/checkbox.md)

## 基础用法

`size` 属性用来控制多选框的大小。

::: module
<template #code>

<div class='box'>
  <div class='box-item'>
    <dk-checkbox v-model='checked' size='large' label='option1(large)'></dk-checkbox>
    <dk-checkbox size='medium' label='option2(medium)'></dk-checkbox>
    <dk-checkbox size='small' label='option3(small)'></dk-checkbox>
    <dk-checkbox size='mini' label='option4(mini)'></dk-checkbox>
  </div>
  <div class='box-item'>
    <dk-checkbox disabled label='option1'></dk-checkbox>
    <dk-checkbox disabled label='option2'></dk-checkbox>
    <dk-checkbox disabled label='option3'></dk-checkbox>
    <dk-checkbox disabled label='option4'></dk-checkbox>
  </div>
</div>
</template>

```html
<template>
  <div class="box">
    <div class="box-item">
      <dk-checkbox v-model="checked" size="large" label="option1(large)"></dk-checkbox>
      <dk-checkbox size="medium" label="option2(medium)"></dk-checkbox>
      <dk-checkbox size="small" label="option3(small)"></dk-checkbox>
      <dk-checkbox size="mini" label="option4(mini)"></dk-checkbox>
    </div>
    <div class="box-item">
      <dk-checkbox disabled label="option1"></dk-checkbox>
      <dk-checkbox disabled label="option2"></dk-checkbox>
      <dk-checkbox disabled label="option3"></dk-checkbox>
      <dk-checkbox disabled label="option4"></dk-checkbox>
    </div>
  </div>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        checked: true
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## 禁用状态

通过 `disabled` 属性来禁用多选框。

::: module
<template #code>
<dk-checkbox disabled label='已禁用'></dk-checkbox>
<dk-checkbox label='未禁用'></dk-checkbox>
</template>

```html
<template>
  <dk-checkbox disabled label="已禁用"></dk-checkbox>
  <dk-checkbox label="未禁用"></dk-checkbox>
</template>
```

:::

## 组合

`dk-checkbox-group` 用于多选框组，将多个 `dk-checkbox` 放在 `dk-checkbox-group` 中即可。

::: module
<template #code>
<dk-checkbox-group v-model='checkList'>
<dk-checkbox label='option1'></dk-checkbox>
<dk-checkbox label='option2'></dk-checkbox>
<dk-checkbox label='option3'></dk-checkbox>
<dk-checkbox label='option4'></dk-checkbox>
</dk-checkbox-group>
</template>

```html
<template>
  <dk-checkbox-group v-model="checkList">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## 中间状态

通过 `indeterminate` 属性来设置多选框的中间状态。

::: module
<template #code>
<VueDomeCheckbox></VueDomeCheckbox>
</template>

```html
<template>
  <dk-checkbox indeterminate label="全选"></dk-checkbox>
  <dk-checkbox-group>
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## 带有边框

通过 `border` 属性来设置多选框的边框。

::: module
<template #code>
<dk-checkbox-group v-model='checkList' border>
<dk-checkbox label='option1'></dk-checkbox>
<dk-checkbox label='option2'></dk-checkbox>
<dk-checkbox label='option3'></dk-checkbox>
<dk-checkbox label='option4'></dk-checkbox>
</dk-checkbox-group>
</template>

```html
<template>
  <dk-checkbox-group v-model="checkList" border>
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box-item{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}
</style>

<script setup>
  import VueDomeCheckbox from './vueDome/checkbox/index.vue';
  import { ref } from 'vue'
  const checked = ref(true)
  const checkList = ref([
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' }
  ])
</script>
