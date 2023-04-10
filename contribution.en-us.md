# CONTRIBUTING

Chinese | [English](https://github.com/FightingDesign/fighting-design/blob/master/CONTRIBUTING.md)

## 🙋 Before you contribute, please read the following:

Hello! Welcome to DK-plus!

I'm glad you're interested in contributing to DK-plus. Before submitting your contributions, please take some time to read the following guidelines. This can help us collaborate better, avoid unnecessary work, and save everyone's time.

## 🚫 Prohibit direct plagiarism

As we all know, there are many component libraries on the market, and often the new components we need to develop have already been developed by others. However, please do not directly copy and use the source code of other third-party libraries.

Developing a component library is a process of learning and progress. Don't just add new components for the sake of adding them. We hope that participants can learn something while adding new components to improve their own skills. If you encounter difficulties in developing a certain function during the development stage, you can initiate a discussion or directly contact me or ask for help in the group. Of course, it is also possible to learn from other open source libraries, but we hope that you have understood the problem and tried it out yourself when writing the code.

## 🛠️ start the project

Before contributing, you need to start the project so that you can better understand the project structure and how to develop it

- Install [node](http://nodejs.cn), version >= 16
- Install [pnpm](https://pnpm.io/zh), latest version is fine

If you have completed the previous preparation, you can skip and start from here:

- Fork [dk-plus](https://github.com/CadWalaDers/dk-ui)

- Clone your fork to your local machine.

### 📖 directory structure

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

Next, execute the command:

```shell
# clone project
git clone https://github.com/CadWalaDers/dk-ui.git

# Enter the project directory.
cd dk-ui

# Install dependencies.
pnpm install

# Start the development project.
pnpm dev:play

# Start the documentation.
pnpm dev:docs

```

## 🔧 Tools and plugins for development.

Please read first [IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)

We highly recommend using an editor. [Visual Studio Code](https://code.visualstudio.com/) Please make sure to install the following built-in plugins:

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) Vue3 official development plugin.

- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)Used to support importing `*.vue` files in TypeScript.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)Code formatting validation. If not installed, then...[fighting-eslint-config](https://github.com/FightingDesign/fighting-design/blob/master/packages/fighting-eslint-config)it will not take effect.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)Used for detecting spelling errors in the code.

## 🔓 Command descriptions.

dk-plus has many built-in commands that can be viewed in the documentation.[package.json](https://github.com/CadWalaDers/dk-ui/blob/master/package.json) Below is a detailed description of each command:

| Script Field | Corresponding Command | Command Description                         |
| ------------ | --------------------- | ------------------------------------------- |
| dev:play     | pnpm dev:play         | Start the testing and development project   |
| build:play   | pnpm build:play       | Build the testing and development project   |
| build        | pnpm build            | Build the component library                 |
| dev:docs     | pnpm dev:docs         | Start the development documentation project |
| build:docs   | pnpm build:docs       | Build the development documentation project |
| format       | pnpm format           | Format the project code                     |

## 🚨 Development Standards

The main source files are located in the [packages](https://github.com/CadWalaDers/dk-ui/tree/master/packages) directory, where each subdirectory has its own README.md file that provides specific instructions for that directory. For detailed development specifications for each module, please refer to the documentation below:

- [dk-plus-components](https://github.com/CadWalaDers/dk-ui/tree/master/packages/components/README.md)Creating a new component
- [dk-plus-components](https://github.com/CadWalaDers/dk-ui/tree/master/packages/theme-chalk/README.md) themes

## ⚠️ Submission specification

The Git allows us to attach a submission message as a description with each submission. When executing commit, it is necessary to strictly follow the specifications below to fill in the submission information. The submission information must be one of the information below, followed by English colon + space.

The type must be one of the following types and fill in the description according to the type description.

| Type     | Example                                           | Description                      |
| -------- | ------------------------------------------------- | -------------------------------- |
| build    | git commit -m 'build: package\*\*\*configuration' | Modify the package configuration |
| ci       | git commit -m 'ci: modify ci configuration'       | Modify the CI configuration      |
| docs     | git commit -m 'docs: modify documentation'        | Modify the documentation         |
| feat     | git commit -m 'feat: add\*\*\*component'          | Add a new component              |
| fix      | git commit -m 'fix: fix\*\*\*bug'                 | Fix a bug                        |
| perf     | git commit -m 'perf: optimize\*\*\*performance'   | Optimize performance             |
| refactor | git commit -m 'refactor: refactor\*\*\*code'      | Refactor code                    |
| style    | git commit -m 'style: modify\*\*\*style'          | Modify style                     |
| test     | git commit -m 'test: add\*\*\*test case'          | Add a new test case              |
| revert   | git commit -m 'revert: rollback\*\*\*code'        | Rollback code                    |
| chore    | git commit -m 'chore: modify\*\*\*configuration'  | Modify configuration             |
| release  | git commit -m 'release: release\*\*\*version'     | Release version                  |

You can add emojis to the commit message by using [Markdown Emoji](https://tianyuhao.cn/emoji)after the message.

## ✏️ About PR

Before submitting a pull request, please make sure that the repository you forked is up to date with the latest code to avoid conflicts.

1.Clone remote repository to local

```shell
git clone <repository-url>
```

2.Add remote repository

```shell
git checkout -b <branch-name>
```

3.Make modifications to the files and commit them to the local repository

```shell
git add .
git commit -m 'feat: 新增***组件'
```

4.Push the branch to the remote repository.

    ```shell
    git push origin <branch-name>
    ```

5.Create a PR in the remote repository.
When you push your branch to a code hosting platform like GitHub or GitLab, find the branch you just pushed and create a pull request (PR). In the PR, you can provide detailed information about the changes you made and any other comments about the PR.

6.Waiting for review and merge.
Once your PR is submitted, the team members will review and discuss your code and may provide suggestions for changes. Once all issues are resolved and approved, your PR will be merged into the main branch.

Notes for Attention:
Before submitting a PR, make sure your local branch is based on the latest main branch.
PR submissions should be as small as possible and each PR should only contain a related set of changes. This makes reviewing easier and also makes the code easier to maintain.
Add a description to your PR to let other developers know what changes you made and their purpose.

## 📰 Financial support

If you feel that dk-plus has helped you, you can invite the author for a cup of coffee to encourage you.

<img width="200px" src="https://oss.cadwaladerss.com/images/zfb.png" />
<img width="200px" src="https://oss.cadwaladerss.com/images/wx.jpg" />

## 💌 Thank you very much

Thank you for all that has been done DK-plus [People who make contributions](https://github.com/CadWalaDers/dk-ui/graphs/contributors)！

<a href="https://github.com/CadWalaDers/dk-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CadWalaDers/dk-ui" />
</a>
