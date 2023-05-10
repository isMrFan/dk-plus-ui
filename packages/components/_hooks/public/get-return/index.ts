import { isFunction } from '../../../_utils'


/**
 * @name getReturn
 * @Time 2023年05月10日
 * @param { Function } getReturn 执行的返回方法
 */

export interface getReturnType {
  getRun: <T extends Function>(callback: T | null | undefined, ...params: unknown[]) => void
}

/**
 * @name getReturn
 * @Time 2023年05月10日
 * @param { Function } getRun(回调函数,参数) 执行的返回方法
 * @description 执行方法函数
 */
export const getReturn = (): getReturnType => {
  /**
   * @name getRun 
   * @Time 2023年05月10日
   * @param { Function } callback 回调函数
   * @param { string } params 回调参数
   * @description 执行方法函数
   */
  const getRun = <T extends Function>(
    callback: T | null | undefined,
    ...params: unknown[]
  ): void => {
    isFunction(callback) && callback(...params)
  }
  return { getRun }
}
