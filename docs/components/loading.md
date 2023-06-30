# loading 加载中指令

自定义加载中指令，用于异步请求时的加载中状态。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkloading)
- [文档编辑](https://github.com/dk-plus-ui/dk-ui/blob/master/docs/components/loading.md)

## 基本使用

`loading` 的基本使用

`v-dk-loading="true"` 指令绑定一个布尔值，当值为 `true` 时，显示加载中状态，为 `false` 时，隐藏加载中状态。

::: module

<template #code>
<dk-space vertical >
<dk-button @click="onOpen" type="primary" size='mini'>点击开启加载中状态
</dk-button>

  <div 
    class="ls_loading"
    v-dk-loading="loadingType"
    >
    <img src='../assets/image/isImg.bmp' />
  </div>
</dk-space>

</template>

```html
<dk-space vertical>
  <dk-button @click="onOpen" type="primary" size="mini"> 点击开启加载中状态 </dk-button>
  <div class="ls_loading" v-dk-loading="loadingType">
    <img src="../assets/image/isImg.bmp" />
  </div>
</dk-space>
<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        loadingType: false
      })
      const methods = reactive({
        onOpen() {
          data.loadingType = !data.loadingType
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

## 自定义文字

`dk-loading-text` 可以通过`自定义属性`来设置加载文字

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="加载中...">
    <img src="../assets/image/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="自定义文案">
    <img src="../assets/image/isImg.bmp" />
  </div>
   <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="哈哈嘿嘿">
    <img src="../assets/image/isImg.bmp" />
  </div>
</dk-space>
</template>

```html
<dk-space>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="加载中...">
    <img src="../assets/image/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="自定义文案">
    <img src="../assets/image/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="哈哈嘿嘿">
    <img src="../assets/image/isImg.bmp" />
  </div>
</dk-space>
```

:::

<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        loadingType: false
      })
      const methods = reactive({
        onOpen(){
          data.loadingType=!data.loadingType
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<style scoped>
.ls_loading{
  width:150px;
  height:150px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.ls_loading img{
  width:100%;
  height:100%;
}
</style>
