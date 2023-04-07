# 贡献

English | [中文](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md)

##  🙋在您贡献之前，请先阅读以下内容

你好！欢迎使用 DK-plus！

我很高兴你有兴趣为 DK-plus 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南. 这可以让我们更好地协作，避免不必要的工作量，节省大家的时间。

## 🚫 禁止直接搬运

众所周知，在市面上的组件库有很多，很多时候我们需要开发的新组件在市面上早已经开发好了，但是请勿直接复制其它第三方源码进行使用

开发组件库本身是一个学习进步的过程，不要仅仅是为了新增组件而新增组件，希望各位参与者可以在新增组件过程中学习到一些东西来提升自己的技术。如果在开发阶段的某个功能遇到了困难，你可以发起一个讨论，或者也可以直接联系我或在群里求助，当然去学习参考其它开源库也是可以的，只是希望你在写的时候，是已经理解了问题，自己来动手实践的。

## 🛠️ 启动项目

在贡献之前，你需要先将项目启动起来，这样你才能更好的了解项目的结构，以及如何进行开发。

- 安装 [node](http://nodejs.cn)，版本 >= 16
- 安装 [pnpm](https://pnpm.io/zh)，最新版即可

如果你已经做好了前面的准备，可以直接跳过，从这里开始:

- Fork [dk-plus](https://github.com/CadWalaDers/dk-ui)

- 克隆你的 fork 到本地

### 📖 目录结构

```bash
├── build       #打npm包工程文件
├── ├── utils   # 打包工具配置
├── ├── component.ts  #文件输出配置
├── ├── full-component.ts #打包文件输出过滤设置
├── ├── gen-types.ts      #gulpfile设置
├── ├── gulpfile.ts       #打包启动文件
├── └─ packages.ts       #专门打包util ， 指令 ， hook的
├── node_modules    # 项目依赖
├── logo   #图标logo
├── docs   #文档项目
├── ├── .vitepress  #文档配置文件
├── ├── ├── data  #文档配置文件
├── ├── ├── json  #文档配置文件
├── ├── ├── plugins #文档配置文件
├── ├── ├── theme   #自定义主题
├── ├── └─config.ts   #文档配置文件
├── ├── index.md   #文档首页
├── ├── package.json  #文档依赖文件
├── └─ vite.config.ts #文档项目设置
├── npm #npm包项目
├── ├── dist #打包后的文件
├── ├── package.json #打包后的版本信息文件
├── └─ README.md  #打包后的说明文件
├── packages        # 组件库组件
├── ├── components    # 存放所有的组件
├── ├── ├── dkbutton  #按钮组件
├── ├── ├── dkshadow  #盒模型阴影组件
├── ├── ├── icon      #图标组件
├── ├── ├── index.ts  #组件入口文件
├── ├── utils         # 存放工具方法
├── ├── theme-chalk   # 存放对应的样式打包工具箱
├── ├── ├── src       # 存放对应的样式
├── └─  └─ gulpfile.ts # 打包工具
├── dk-plus         # 出口文件
├── play      # 组件调试测试项目
├── ├──  node_modules  # play的依赖 测试目录
├── ├──  router        # 路由配置
├── ├──  typings       # ts的声明文件
├── ├──  views         # 页面文件
├── ├──  app.vue       # vue app的入口文件
├── ├──  index.html    # index.html  首页的html
├── ├──  main.ts       # main.ts     程序入口文件
├── ├──  package.json  # package.json  项目入口配置
├── └─  vite.config.ts  # vite 轻量级启动项
├── typings        #  ts的声明文件
├── └─vue-shim.d.ts # typescript 声明文件
├── .eslintignore   #ESLint 去忽略特定的文件和目录
├── .eslintrc.js    #ESLint 配置文件
├── .gitignore      # git 过滤说明文件
├── .markdownlint.json # markdownlint 配置文件
├── .prettierrc.js  # Prettier 配置文件
├── .prettierignore  # Prettier 过滤说明文件
├── .npmrc          # npm 配置文件
├── contribution.en-us.md # 贡献说明文件英文版
├── contribution.md # 贡献说明文件中文版
├── CUpdateLog.en-US.md # 更新日志英文版
├── CUpdateLog.md # 更新日志中文版
├── LICENSE         # 开源协议
├── README.md       # 项目说明文件
├── README.en-US.md # 项目说明文件英文版
├── package.json    # 项目配置文件
├── pnpm-lock.yaml  # pnpm配置文件
├── pnpm-workspace.yaml #pnpm配置文件
└─  tsconfig.json # TS配置文件

```

接下来执行命令：

```shell
# clone 项目
git clone https://github.com/CadWalaDers/dk-ui.git

# 进入项目目录
cd dk-ui

# 安装依赖项
pnpm install

# 启动开发项目
pnpm dev:play

# 启动文档
pnpm dev:docs

```

## 🔧开发工具和插件

请先阅读 [IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)

编辑器强烈推荐使用 [Visual Studio Code](https://code.visualstudio.com/)，内置插件请务必安装以下几款：

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) Vue3 官方开发插件
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 用于支持在 TS 中 import `*.vue` 文件
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 代码格式校验，如果不安装，那么 [fighting-eslint-config](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config) 则不生效
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 用于检测代码中的拼写错误

## 🔓 命令说明

dk-plus 内部设置了很多的命令，在 [package.json](https://github.com/CadWalaDers/dk-ui/blob/master/package.json) 中可进行查看。下面详细介绍每一条命令：

| script 字段 | 对应命令 | 命令说明 |
| --- | --- | --- |
| dev:play | pnpm dev:play | 启动测试开发项目 |
| build:play | pnpm build:play | 打包测试开发项目 |
| build | pnpm build | 打包组件库 |
| dev:docs | pnpm dev:docs | 启动开发文档项目 |
| build:docs | pnpm build:docs | 打包开发文档项目 |
| format | pnpm format | 项目代码格式化 |

## 🚨 开发规范

主要源文件都在 [packages](https://github.com/CadWalaDers/dk-ui/tree/master/packages) 目录下，其中每个子目录都有单独的 `README.md` 对指定目录进行说明，每个模块详细的规范参考下面文档:

- [dk-plus-components](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/README.md) 创建新组件
- [dk-plus-components](https://github.com/CadWalaDers/dk-ui/tree/master/packages/theme-chalk/README.md) 样式主题目录

