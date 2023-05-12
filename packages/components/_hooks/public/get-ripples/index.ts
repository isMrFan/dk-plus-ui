import { DK_TYPE_COLOR } from '../../../_tokens'
import type { dkPlusType } from '../../../_interface'
import {  getColor } from '../..'

/**
 * @name  getRipples  涟漪效果
 * @param { number } AnimationDuration 动画时长
 * @param { 'dk-button' } component 组件类型 'dk-button 后续其他组件需要可再次扩展'
 * @param { string } className 涟漪节点类名
 * @param { string } ripplesBgColor 自定义涟漪背景色
 * @param { string } type 组件 type
 */

export interface RipplesType {
  AnimationDuration: number
  component: 'dk-button'
  className: string
  ripplesBgColor: string
  type: dkPlusType
}

/**
 * @name  RipplesEvn  涟漪效果点击事件
 * @param { number } layerX轴坐标
 * @param { number } layerY轴坐标
*/

export interface RipplesEvn extends Event{
  layerX: number
  layerY: number
}

/**
 * @name  getRipplesType 涟漪效果方法定义类型
 * @param { Function } useRipples 生成涟漪方法
 */
export interface getRipplesType {
  useRipples: () => void
}

/**
 * @name  getRipples  涟漪效果点击事件
 * @param { Object } evt 事件对象
 * @param { Object } element 元素节点
 * @param { Object } options 配置对象
 * @param { number } [options里变量] AnimationDuration 动画时长
 * @param { string}[options里变量] component 默认值:dk-button 组件类型 'dk-button 后续其他组件需要可再次扩展'
 * @param { string }[options里变量] className 涟漪节点类名
 * @param { string }[options里变量] ripplesBgColor 自定义涟漪背景色
 * @param { string }[options里变量] type 组件 type
 * @returns useRipples 返回涟漪效果方法
*/

export const getRipples=(evt:MouseEvent,element:HTMLElement,options:RipplesType):getRipplesType=>{
  /**
   * @name  ripplesBgColor  获取当前组件BG颜色
   */ 
  const ripplesBgColor=options.ripplesBgColor||
  getColor(DK_TYPE_COLOR[options.type]?
    DK_TYPE_COLOR[options.type]:
    '#f0f0f0').getDodge(0.4);

  /**
   * @name  addElement  指定位置渲染节点
   * @param { number } x 坐标
   * @param { number } y 坐标
   * @returns { Object } 元素节点
   */  
  const addElement=(x:number,y:number):HTMLElement=>{
    console.log("x", x)
    console.log("y", y)
      const newElement=document.createElement('span');
      newElement.className=options.className;
      newElement.style.left=`${x}px`;
      newElement.style.background=ripplesBgColor;
      /**
        * @description  判断是那个组件如后续扩展请在if后添加其他组件的涟漪效果
      */ 
      if(options.component==='dk-button'){
        const box: HTMLDivElement = document.createElement('div')
        box.className = ''
        console.log("box", box)
        box.appendChild(newElement)
        newElement.style.top=`${y}px`;
        return box
      }
      return newElement
  }
  /**
   * @name  removeElement  删除涟漪节点
   * @param { Object } reElement dom 元素
   */  
  const removeElement=(reElement:HTMLElement):void=>{
    setTimeout(():void=>{
      reElement.remove()
    },options.AnimationDuration|| 500)
  }
  /**
   * @name  useRipples  涟漪效果点击事件
  */
  const useRipples=(): void=>{
    const { layerX, layerY } = evt as unknown as RipplesEvn
    const ripples: HTMLElement = addElement(layerX, layerY)
    element.appendChild(ripples)
    removeElement(ripples)
  }
  return {useRipples}
}
