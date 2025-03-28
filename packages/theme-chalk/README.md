## 🐳 说明

`DK-plus` 的主题样式目录

## 🦩 目录说明

```
├── mixins                组件的一些配置变量
theme-chalk               主题样式目录
├── src                   每个组件的主样式表存放目录
├── index.scss            主样式表
├── package.json          package.json
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

**注意⚠️： 这里声明方法必须采用 sass 的嵌套写法，不可以采用 css 的写法，否则会导致样式无法生效**
> 内置符号 `>` 和 `*`
> `>` 表示级联选择, 添加 `>` 后，会自动添加父级的样式名 如:
```scss
.dk-input{
  @include block('>input-number'){
    // ... 
  }
}
/** 生成的css就是 */
.dk-input .dk-input-number{
  // ...
}
```
> `*` 表示不需要再定义的基础上添加父级的样式名
> 顺序: 如果同时存在 `>` 和 `*`，则 `>` 要在 `*` 的前面: 例如
```scss
.dk-input{
  @include block('>*input-number'){
    // ... 
  }
}
/** 生成的css就是 */
.dk-input-number{
  // ...
}
```

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
  @include block(*xxx) {
    //解析后是  .dk-xxx
    //...... styles
  }
  @include block(>xxx){ // 加 > 表示级联选择
    //解析后是  .dk-input .dk-input-xxx
    //...... styles
  }
  // element   通用分隔符 _    //用于组件内部的样式  .dk-xxx_xxx
  @include element(wrapper) {
    //解析后是  .dk-xxx_xxx
    //...... styles
    @include element(*xxx) {
      //解析后是  .dk-xxx_xxx 加 * 号表示不需要加上父级的样式名
      //...... styles
    }
    @include element(>xxx){
      //解析后是  .dk-input_wrapper .dk-input_wrapper_xxx
      //...... styles
    }
    // modifier  修饰符分隔符 --
    @include modifier(readonly) {
      //用于组件内部的样式  .dk-xxx_xxx--xxx
      //...... styles
      @include modifier(*xxx) {
        //用于组件内部的样式  .dk-xxx_xxx--xxx 加 * 号表示不需要加上父级的样式名
        //...... styles
      }
    }
    @include state() {
      //用于组件内部的样式  .dk-xxx_xxx.is-xxx
      //...... styles
    }
  }
}
```
