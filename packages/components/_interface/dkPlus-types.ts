/**
 * @name ClassListName
 * @Time 2023年04月28日
 * @description class 类名集合类型
**/

export type ClassListName = (string | Record<string, unknown>)[]

/**
 * @name dkPlusType
 * @Time 2023年04月28日
 * @param { string }  [default] 默认值
 * @param { string }  [primary] 基础
 * @param { string }  [success] 成功
 * @param { string }  [info] 信息
 * @param { string }  [warning] 警告
 * @param { string }  [danger] 危险
 * @description 不同的组件类型公共类型
**/

export type dkPlusType = 
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'default'
/**
 * @name dkPlusSize
 * @Time 2023年04月28日
 * @param { string }  [large] 大
 * @param { string }  [medium] 中
 * @param { string }  [small] 小
 * @param { string }  [mini] 迷你
 * @description 不同的组件尺寸公共类型
**/ 

export type dkPlusSize = 'large' | 'medium' | 'small' | 'mini'

/**
 * @name dkTarget
 * @Time 2023年04月28日
 * @param { string }  [_blank] 在新窗口中打开链接或显示表单提交的结果。
 * @param { string }  [_self]  在当前窗口中打开链接或显示表单提交的结果（这是默认值）。
 * @param { string }  [_parent] 在父窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与_self相同。  
 * @param { string }  [_top] 在顶级窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与 _self 相同。
 * @description 该属性指定在何处显示链接的资源
**/

export type dkTarget = '_blank' | '_self' | '_parent' | '_top'




