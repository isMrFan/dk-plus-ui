# rate 评分

用于评分或打星

- [源代码](https://github.com/isMrFan/dk-plus-ui/blob/master/packages/components/dkrate/src/rate.vue)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/DataShow/rate.md)

## 1.基本使用

通过 `v-model` 绑定一个值

::: module
<template #code>
  <dk-rate v-model="checked"></dk-rate>
</template>

```vue
<template>
  <dk-rate v-model="checked"></dk-rate>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'RateComp',
    setup() {
      const data = reactive({
        checked: 1
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## 2.自定义颜色

`select-color` 属性可以配置星星选中时的颜色，`no-select-color`属性可以配置星星未选中时的颜色

::: module
<template #code>
  <dk-rate
    v-model="checked1"
    :select-color="'red'"
    :no-select-color="'#26BF8C'">
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked1" 
      :select-color="'red'" 
      :no-select-color="'#26BF8C'">
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked1: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 3.自定义 icon

`icon` 属性可以自定义 `icon` (目前只支持ICON图标组件库内图标)

::: module
<template #code>
  <dk-rate
    v-model="checked1"
    :icon="'IconAndroid'"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked1" 
      :icon="'IconAndroid'"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked1: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 4.图标大小

`iconSize` 属性可以定义ICON 大小

::: module
<template #code>
  <dk-rate
    v-model="checked2"
    :icon="'IconAndroid'"
    :iconSize="35"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked2" 
      :icon="'IconAndroid'"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked2: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 5.是否禁用

`readonly` 评分是否禁用  true | false

::: module
<template #code>
  <dk-rate
    v-model="checked3"
    :readonly='true'
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked3" 
      :readonly='true'
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked3: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 6.监听事件

`onchange` 监听事件

::: module
<template #code>
  <dk-rate
    v-model="checked4"
    :onchange="setFunctionProps"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked4" 
      :onchange="setFunctionProps"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked4: 2
        })
        const methods = reactive({
          setFunctionProps(item) {
           alert(item)
          }
        })
        return {
          ...toRefs(data),
          ...toRefs(methods)
        }
      }
    })
  </script>
```

:::

<script setup>
  import { ref } from 'vue'
  const checked = ref(1)
  const checked1 = ref(2)
  const checked2 = ref(2)
  const checked3 = ref(2)
  const checked4 = ref(2)
  const setFunctionProps=(item)=> {
    console.log(item)
    alert("你看英杰兄弟,还有宇轩兄弟监听事件生效了当前点击的值是"+item)
  }
</script>