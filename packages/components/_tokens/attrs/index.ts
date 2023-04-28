/**
 * @name DK_SIZE
 * @Time 2023年04月28日
 * @param { string }  [large] 大
 * @param { string }  [medium] 中
 * @param { string }  [small] 小
 * @param { string }  [mini] 迷你
 * @returns 尺寸大小
*/

export const FIGHTING_SIZE = ['large', 'middle', 'small', 'mini'] as const

/**
 * @name DK_TYPE
 * @Time 2023年04月28日
 * @param { string }  [default] 默认值
 * @param { string }  [primary] 基础
 * @param { string }  [success] 成功
 * @param { string }  [info] 信息
 * @param { string }  [warning] 警告
 * @param { string }  [danger] 危险
 * @returns 组件Type类型
*/

export const DK_TYPE = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'default'
] as const