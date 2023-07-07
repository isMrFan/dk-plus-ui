import type { ExtractPropTypes } from 'vue'
import { setStringProp, setBooleanProps, setFunction } from '../../_utils'
import { DK_ALERTTYPE } from '../../_tokens'
import type { dkPlusAlertType } from '../../_interface'
// type： success、info、warning、error
// title：string
// description------- 描述性文本
// center----- 文字是否居中
// closable----- 是否可以关闭
// close - text----- 自定义关闭按钮文本
// show - icon----是否显示类型图标
// onClose----- 关闭时触发的回调函数

/**
 * @name dk-alert
 * @author zdy
 * @Time 2023/07/07
 * @property {string} type 指定警告提示的样式，有四种选择
 * @property {string} title 指定警告标题
 * @property {string} description 指定警告描述性文本
 * @property {boolean} center 文字是否居中
 * @property {boolean} closable 是否可关闭
 * @property {string} closeText 自定义关闭按钮文本
 * @property {function} onClose 关闭时触发的回调函数
 * 
 * */
export const dkAlertProps = {
  type: setStringProp<dkPlusAlertType>(null, (value: dkPlusAlertType): boolean => {
    return DK_ALERTTYPE.includes(value)
  }),
  title: setStringProp(),
  description: setStringProp(),
  center: setBooleanProps(),
  closable: setBooleanProps(),
  closeText: setStringProp(),
  onClose: setFunction()
}
export type DkAlertProps = ExtractPropTypes<typeof dkAlertProps>
