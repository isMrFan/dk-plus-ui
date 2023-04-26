## 🐳 说明

`DK-plus` 的主题样式目录

## 🦩 目录说明

```
├── src                   每个组件的主样式表存放目录
├── ├── font              图标或者字体存放目录
├── ├── mixins            组件的一些配置变量
├── index.scss            主样式表
├── gulpfile.ts           样式打包入口
├── package.json          package.json
├── README.en-US.md       README.en-US.md
└── README.md             README.md
```

## 🚧 规范说明

- 在 `src` 目录下新建和组件名相同的 `*.scss` 文件，进行开发组件样式表
- 在主入口 `index.scss` 中需要引入你新建的 `*.scss` 文件提供使用
- 样式中禁止出现 `!important`
- 文件名统一使用短横杠连接，不可以出现大写字母
- 在 `src/*` 目录下，是对应的每一个组件的 `*.scss` 文件
- 在 `config/*` 目录下，是组件的一些配置变量文件，组件的配置文件都以 `var-组件名.scss` 进行命名。全局配置文件使用 `const-***.scss` 命名

## 🐿️ 唯一样式

每个组件都会有一个唯一的样式，比如 `dk-button`、`dk-icon` 等等，为避免样式发生冲突，需要严格约束其内部样式或同级样式对于其它组件的污染。

## 🚧 公用方法说明

例如使用 `mixin.scss` 中的 `block` `peerBlock` `element` `modifier` 进行样式的命名，如下：

**注意： 这里声明方法必须采用 sass 的嵌套写法，不可以采用 css 的写法，否则会导致样式无法生效**

```scss
// block   就是块，组件的唯一包装样式  -
@include block(input) {
  //解析后是  .dk-xxx
  //...... styles
  @include peerBlock(xxxx) {
    //解析后是  .dk-xxx-xxx
    //...... styles
  }
  // block   通用分隔符 -    //用于组件内部的样式  .dk-xxx-xxx 加 * 号表示不需要加上父级的样式名
  @include block(*xxx){
    //解析后是  .dk-xxx
    //...... styles
  }
  // element   通用分隔符 __    //用于组件内部的样式  .dk-xxx__xxx
  @include element(wrapper) {
    //解析后是  .dk-xxx__xxx
    //...... styles
    @include element(*xxx) {
      //解析后是  .dk-xxx__xxx 加 * 号表示不需要加上父级的样式名
      //...... styles
    }
    // modifier  修饰符分隔符 --
    @include modifier(readonly) {
      //用于组件内部的样式  .dk-xxx__xxx--xxx
      //...... styles
    }
    @include state() {
      //用于组件内部的样式  .dk-xxx__xxx.is-xxx
      //...... styles
    }
  }
}
```
