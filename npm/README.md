<p align="center">
   <img height="160px"  src="https://oss.cadwaladerss.com/dk-plus/images/isicon.jpg">
</p>
<p align="center" style="margin-top:-50px">
  DK-plus 可在 vue3 的web应用中快速构建交互界面,全面的组件和便捷的工具会让您信手拈来，如鱼得水
</p>
<p align="center">
  中文 | <a href="https://github.com/CadWalaDers/dk-ui/blob/master/README.en-US.md">English</a>
</p>

<p align="center">
  <a href="https://github.com/CadWalaDers/dk-ui/stargazers">
    <img src="https://img.shields.io/github/stars/CadWalaDers/dk-ui" />
  </a>
  <a href="https://www.npmjs.com/package/dk-plus">
    <img src="https://badgen.net/npm/v/dk-plus" />
  </a>
  <a href="https://cadwaladerss.com">
    <img src="https://img.shields.io/badge/dk--plus-Docs-blue" />
  </a>
  <a href="https://github.com/CadWalaDers/dk-ui/blob/master/CUpdateLog.md">
    <img src="https://img.shields.io/badge/dk--plus-CUpdateLog-blue" />
  </a>
</p>

## ✨ 特性

- 🪐 3+ 常用组件
- 🏆 支持完整引入和按需引入
- 🤟 配置简单，上手容易
- ❤️ 根据实际需求开发
- 📃 优质详细的文档
- 👍 提出需求，不断完善
- 🛠 更多特性开发中

## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev dk-plus
```

使用 `npm` 安装

```shell
npm install --save-dev dk-plus
```

使用 `yarn` 安装

```shell
yarn add --save-dev dk-plus
```

## 🎉 快速上手

```ts
import { createApp } from 'vue'
import App from './App.vue'
import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk/src/index.scss'

createApp(App).use(FightingDesign).mount('#app')
```

## 🪂 快速体验

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/dk-plus/dist/theme-chalk/index.css"
  />
</head>

<body>
  <div id="app">
    <Dk-Button round type="default">默认</Dk-Button>
    <Dk-Button round type="primary">主要按钮</Dk-Button>
    <Dk-Button round type="success">成功</Dk-Button>
    <Dk-Button round type="info">信息</Dk-Button>
    <Dk-Button round type="warning">警告</Dk-Button>
    <Dk-Button round type="danger">danger</Dk-Button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dk-plus/dist/index.js"></script>
  <script>
    const { createApp, ref } = Vue
    const app = createApp({
      setup() {
        const visible = ref(false)
        return { visible }
      }
    })
    app.use(DKplush.default)
    app.mount('#app')
  </script>
</body>
```

## 🐳 相关链接

- [官方文档](https://cadwaladerss.com)
- [NPM](https://www.npmjs.com/package/dk-plus)
- [贡献指南](https://github.com/CadWalaDers/dk-ui/blob/master/contribution.md)
- [更新日志](https://github.com/CadWalaDers/dk-ui/blob/master/CUpdateLog.md)
