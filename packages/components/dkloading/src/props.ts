import { setBooleanProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
/**
 * @name dk-loading
 * @author fanKai16
 * @Time 2023/06/28
 * @description 按钮变量定义
 **/
export const loadingProps = {
  /**
   * @name visible 是否展示
   * @description {boolean} 是否展示 默认值：false
   **/
  visible: setBooleanProps(),
  /**
   * @name text 加载中文案
   * @description {string}  默认值：加载中...
   **/
  text: setStringProp(),
  /**
   * @name textSize 加载中文案大小
   * @description {string}  默认值：加载中...
   **/
  textSize: setStringProp(),
  /**
   * @name color 加载中文案的颜色
   * @description {string} 默认值：#ffffff
   **/
  color: setStringProp(),
  /**
   * @name background 自定义遮罩层背景色
   * @description {string} 默认值：rgba(0, 0, 0, 0.7)
   **/
  background: setStringProp(),
  /**
   * @name spinner 自定义svg 图标
   * @description {string} 默认值
   **/
  spinner: setStringProp(),
  /**
   * @name spinnerSize 自定义svg 图标大小
   * @description {string} 默认值
   **/
  spinnerSize: setStringProp()
} as const

export type LoadingPropsType = ExtractPropTypes<typeof loadingProps>
