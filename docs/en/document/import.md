# Quick Start

## Full Import

In your `main.ts`  file, import the following:

```ts
import { createApp } from 'vue'
import App from './App.vue'

import dkPlus from 'dk-plus'
import 'dk-plus/theme-chalk/index.css'

createApp(App).use(dkPlus).mount('#app')
```

## Import on Demand

To reduce bundle size and only import specific components, you can use the import-on-demand approach:

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入示例

import { DkIcon, DkShadow, DkButton } from 'dk-plus'

// 样式按需引入
import '@dk-plus/theme-chalk/dkbutton.css'
import '@dk-plus/theme-chalk/dkshadow.css'
import '@dk-plus/theme-chalk/icon.css'

createApp(App).use(DkIcon).use(DkShadow).use(DkButton).mount('#app')
```

## Using UMD

You can also use the `UMD` mode to include `dk-plus` in your `*.html` file and quickly build your application:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/dk-plus/theme-chalk/index.css"
  />
</head>

<body>
  <div id="app">
    <h1>Example</h1>
    <dk-button type="primary">Default Button</dk-button>
    <dk-button type="success">Primary Button</dk-button>
    <dk-button type="danger">Success Button</dk-button>
    <dk-button type="warning">Warning Button</dk-button>
  </div>
  <script src="https://unpkg.com/vue@next/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dk-plus"></script>
  <script type="module">
    const { createApp, ref } = Vue
    const app = createApp({
      setup() {
        const visible = ref(false)
        return { visible }
      }
    })
    app.use(dkPlus.default)
    app.mount('#app')
  </script>
</body>
```
