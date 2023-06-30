import type { App, Directive, Component } from 'vue';
export type Install<T> = T & {
    install(app: App): void;
};
export declare const withInstall: <T extends Component>(comp: T) => Install<T>;
export declare const installDirective: <T extends Directive>(main: T, name: string) => Install<T>;
export declare const interior: <T>(main: T, name: string) => Install<T>;
