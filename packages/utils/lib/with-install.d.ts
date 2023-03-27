import type { Plugin } from 'vue'
export declare type SFCWithInstall<T> = T & Plugin
export declare const withInstall: <T>(comp: any) => SFCWithInstall<T>
