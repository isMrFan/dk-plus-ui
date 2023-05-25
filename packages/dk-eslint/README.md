
## 🔰 介绍

本项目是一个基于 [eslint](https://eslint.org/) 的规则库，用于检测代码中的错误和潜在问题。

`dk-plus` 专属 `eslint` 配置项，开箱即用。

`@dk-plus/eslint-config` 主要针对于 `*.vue` 和 `*.ts` 文件做了很大强度的格式校验规则，如果想追求更严格的校验规则和更优质的代码风格,在项目提交的时候也会进行检测校验不通过是提交不上去的哟！未使用习惯的人可能会在使用中非常痛苦痛苦💔,注意如果想在提交代码的时候检测代码请自行配置 `husky` 和 `lint-staged`。

## 📦 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev eslint @dk-plus/eslint-config
```

使用 `npm` 安装

```shell
npm install --save-dev eslint @dk-plus/eslint-config
```

使用 `yarn` 安装

```shell
yarn add --save-dev eslint @dk-plus/eslint-config
```

## 📝 使用

将下面代码添加到 `.eslintrc` 文件中
  
```json
  {
    "extends": "@dk-plus"
  }
```

在 `package.json` 中新增以下配置：

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

执行命令：

```shell
# 检测代码格式规范
pnpm lint

# 修复格式规范
pnpm lint:fix
```

## 🛑 规则

 参考 [index.js](https://github.com/CadWalaDers/dk-ui/blob/master/packages/dk-eslint/index.js)

## 📄 协议

[MIT](https://github.com/CadWalaDers/dk-ui/blob/master/LICENSE)

