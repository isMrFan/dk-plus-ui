import {
  setBooleanProps,
  setStringProp,
  setStringNumberProps
} from '../../_utils'
import { ExtractPropTypes } from 'vue'
export const dkButtonProps = { 
  /**按钮类型 是否为文本按钮(默认值:'')*/ 
  href:{
    type: setStringProp()
  },
  /**按钮定义类型 [default(默认primary),primary(基础),success(成功),info(信息),warning(警告),danger(危险)] */ 
  type: {
    type: setStringProp()
  },


  /**是否禁用 */
  disable: {
    type: setBooleanProps()
  },
  /**是否加载中 */
  loading: {
    type: setBooleanProps()
  },
 
  /**半圆角按钮 */ 
  round: {
    type: setStringProp()
  },
  /**圆形按钮 */ 
  circle: {
    type: setStringProp()
  },
  /**按钮图标 */ 
  icon: {
    type: setStringProp()
  },
  /**按钮尺寸 [large,medium,small,mini] */
  size: {
    type: setStringNumberProps()
  },
}as const

/** button 组件 props 类型 */
export type DkButtonProps  = ExtractPropTypes<typeof dkButtonProps>
