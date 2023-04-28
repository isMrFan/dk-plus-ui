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





