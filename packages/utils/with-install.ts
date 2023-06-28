import type { App, Plugin,Directive } from 'vue' // 只导入类型 而不是导入值
// 类型必须导出 否则生成不了.d.ts
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: any) => {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

/**
 * 注册自定义指令组件
 *
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export const installDirective = <T extends Directive>(
  main: T,
  name: string
): SFCWithInstall<T> => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, main as SFCWithInstall<T>)
  }
  return main as SFCWithInstall<T>
}
