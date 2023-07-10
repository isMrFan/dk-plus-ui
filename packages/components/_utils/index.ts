/**
 * @name _utils
 * @Time 2023年05月04日
 * @returns 工具箱出口文件
 * *{props}  props 类型校验
 * (1).setStringNumberProps 设置 string(字符串) & number(数字) 类型 props 参数
 * (2).setBooleanProps 设置 boolean(布尔类型) 类型的 props 参数
 * (3).setStringProp   设置 string(字符串) 类型的 props 参数
 * (4).setNumberProps 设置 number(数值类型) 类型 props 参数
 * (5).setObjectProps 设置 object(一个对象) 类型 props 参数
 * (6).setFunctionProps 设置 function(一个方法函数) 类型 props 参数
 * (7).setArrayProps 设置 array(数组类型) 类型 props 参数
 * *{typeof} 变量类型校验
 * (1):isDateTime 检测一个数据是否为 Date(时间) 类型
 * (2):isNumber 检测一个数据是否为 number(数值) 类型
 * (3):isString 检测一个数据是否为 string(字符串) 类型
 * (4):isBoolean 检测一个数据是否为 boolean(布尔) 类型
 * (5):isObject 判断一个值是否为 object(对象) 类型
 * (6):isFunction 判断一个值是否为 function(函数) 类型
 * (7):isArray 判断一个值是否为 array(数组) 类型
 * *{filtration} 过滤器
 * (1):humpConversion 驼峰转换为短横线命名 例如：dkButton => dk-button
 * *{ComponentRegistration} 打包解析器
 * *{withInstall} 组件注册器
 */
export * from './props'
export * from './typeof'
export * from './filtration'
export * from './ComponentRegistration'
export * from './withInstall'
