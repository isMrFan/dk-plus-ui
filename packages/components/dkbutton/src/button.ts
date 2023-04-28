import {
  setBooleanProps,
  setStringProp,
  setStringNumberProps
} from '../../_utils'
import { ExtractPropTypes } from 'vue'
import { DK_TYPE } from '../../_tokens'
import { dkPlusType } from '../../_interface'
export const dkButtonProps = { 
  /**
   * @name href
   * @param { string } href [''] 默认值
   * @returns 按钮类型 是否为文本按钮(默认值:'')
  */
  href:setStringProp(),
  /**
   * @name type
   * @param { string } type [default] 默认值
   * @param { string } type [primary] 基础
   * @param { string } type [success] 成功
   * @param { string } type [info] 信息
   * @param { string } type [warning] 警告
   * @param { string } type [danger] 危险
   * @returns 按钮类型 是否为文本按钮(默认值:'default')
  */ 
  type: setStringProp<dkPlusType>("default",(value:dkPlusType):boolean=>{
    return DK_TYPE.includes(value)
  }),

  /**是否禁用 */
  disable: setBooleanProps(),


  /**是否加载中 */
  loading: setBooleanProps(),
  /**半圆角按钮 */ 
  round:setStringProp(),
  /**圆形按钮 */ 
  circle: setStringProp(),
  /**按钮图标 */ 
  icon: setStringProp(),
  /**按钮尺寸 [large,medium,small,mini] */
  size:setStringNumberProps(),
}as const

/** button 组件 props 类型 */
export type DkButtonProps  = ExtractPropTypes<typeof dkButtonProps>
