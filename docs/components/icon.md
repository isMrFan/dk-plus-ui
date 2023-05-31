# Icon 图标

使用 svg 的图标库，可以减少项目体积，提高加载速度。

- [源代码](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/dkicon)
- [文档编辑](https://github.com/CadWalaDers/dk-ui/blob/master/docs/components/icon.md)

## 1.基本使用

::: module
 <template #code>
    <dk-icon>
      <IconWeiXin></IconWeiXin>
    </dk-icon>
    <dk-icon>
      <IconWeiXin></IconWeiXin>
    </dk-icon>
</template>

```html
  <Dk-Button> 默认</Dk-Button>
  //方法一 传统写法
  <script lang="ts">
    import {svgList} from 'dk-plus'
    components: {
      IconShanchu1:svgList.IconShanchu1
    }
  </script>
  //方法二 语法糖
  <script setup lang="ts">
    import { svgList } from '@dk-plus/components/_icon'
    const { IconWeiXin } = svgList   //解构赋值
    const expose = { IconWeiXin }   //可导出很多
  </script>
```

:::


<script setup lang="ts">
  import { svgList } from '@dk-plus/components/_icon'
  const { IconWeiXin } = svgList
  const expose = { IconWeiXin }
</script>
