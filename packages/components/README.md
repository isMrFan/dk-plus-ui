## 🤟 介绍

因为刚开始搭建项目所以很多自动化还没做，所以目前只能手动添加组件，后续会做自动化脚本，方便添加组件。

### 📖 目录结构

```bash

├── _hooks  hooks
├── _icon   图标存放文件的SVG
├── _interface  全局接口定义
├── _tokens     全局定义变量
├── _utils      全局工具方法
├── dkbutton    按钮组件
├── dkcontainer      DK页面布局  用于页面布局  一般用于页面最外层
├── dkheader         DK页面头部  用于页面头部
├── dkmain           DK页面菜单  用于页面中心区域
├── dkfooter         DK页面底部  用于页面底部
├── dklaside         DK页面左侧  用于页面左侧
├── dkraside         DK页面右侧  用于页面右侧
├── dkcodedisplay    内部用展开收起组件
├── dkicon           图标文件
├── dkinput          input组件
├── dkshadow         阴影组件
├── dkinputnumber    数字输入框组件
```

## 🌵 使用

```shell
  1.在packages/components目录下添加组件
  2.在packages/components/index.ts中导出组件
  3.在packages/theme-chalk/src目录下添加组件样式
  4.在packages/theme-chalk/src/index.scss中导入组件样式
  5.在packages/dk-plus/index.ts中导出组件
```

## 注意 ❗❗

```shell
  1.大家在编写工具方法时务必带上example
  2.如果是重载函数请务必在example中写明使用场景
```
