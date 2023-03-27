# 暂无

https://codeup.aliyun.com/61cad6014c6f7d217121d461/dkyao-ui/dkyao-ui.git

**_@author 范凯_**(研发)
**_@email 1038886097@qq.com_**

## 原型地址

## 总览

这是一个基于 vue3 开发的前端组件库

## 应用框架

## 功能

## 组件

## 目录结构

```bash
├── README.md       // help
├── node_modules    # 项目依赖
├── play
├── ├──  node_modules  # play的依赖 测试目录
├── ├──  app.vue       # vue app的入口文件
├── ├──  index.html    # index.html  首页的html
├── ├──  main.ts       # main.ts     程序入口文件
├── ├──  package.json  # package.json  项目入口配置
├── ├──  vite.config.ts  # vite 轻量级启动项
├── typings        #  ts的声明文件
    └─vue-shim.d.ts # typescript 声明文件
├── packages        # 组件库组件
    ├─components # 存放所有的组件
    ├─utils  # 存放工具方法
    ├─theme-chalk # 存放对应的样式
    ├─virtualshadow # 虚影Body
├── .gitignore      # git 过滤说明文件
├── .npmrc          # npm 配置文件
├── package.json    # 项目配置文件
├── pnpm-lock.yaml  # 配置文件
├── pnpm-workspace.yaml #配置文件
```

## 应用框架

<kbd style='color:green'>vue3</kbd>
<kbd style='color:green'>TypeScript</kbd>
<kbd style='color:green'>pnpm</kbd>
<kbd style='color:green'>gulp + rollup</kbd>
<kbd style='color:green'>vite</kbd>

## 命令执行

```bash
   npm install pnpm -g     全局安装pnpm
   pnpm init               初始化项目
   pnpm install vue@next   安装基础版vueNext
   pnpm install typescript -D  全局下添加依赖
   npx tsc --init          初始化ts配置文件
   //搭建测试组件糙
   mkdir play && cd play
   pnpm init
   pnpm install vite
   pnpm install @vitejs/plugin-vue
   //packages 编辑组件
   cd components && pnpm init  #@dk-ui/components
   cd utils && pnpm init #@dk-ui/utils
   cd theme-chalk && pnpm init #@dk-ui/theme-chalk
   //模块间相互引用
   pnpm install @dk-ui/components -w
   pnpm install @dk-ui/theme-chalk -w
   pnpm install @dk-ui/utils -w
   //打包模块
   pnpm install gulp @types/gulp sucrase -w -D
   "scripts": {
        "build": "gulp -f build/gulpfile.ts"
    }
    pnpm install gulp-sass @types/gulp-sass @types/sass @types/gulp-autoprefixer gulp-autoprefixer @types/gulp-clean-css gulp-clean-css sass -D -w
    pnpm install gulp-typescript -w -D
    pnpm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-typescript2 rollup-plugin-vue -D -w
    pnpm install fast-glob -w -D
    pnpm install ts-morph -w -D #给每个组件添加类型声明文件
```

# git remote add <name> <git-url>

git remote add gitlab_origin git@gitlab.com:opendvd/dual_push.git

npm init --yes
npm adduser
npm login
npm publish

## 这个是 highlight.js 基础依赖

npm install --save highlight.js

## 安装支持 vue3 的@highlightjs/vue-plugin 依赖

npm install --save @highlightjs/vue-plugin

16.16.0
