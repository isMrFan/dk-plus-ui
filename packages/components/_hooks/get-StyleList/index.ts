/**
 * @name get-StyleList
 * @Time 2023年05月04日
 * @param { Function } getType 获取组件的类型
 * @returns getStyleList 用于生成样式名称的hooks简洁代码
 */

/**
 * useList 返回值类型接口
 *
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 */

export const getStyleList= <T extends object>(props: T, name: string)=>{
  console.log("props", props)
  console.log("name", name)

}