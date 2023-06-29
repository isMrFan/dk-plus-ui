"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interior = exports.installDirective = exports.withInstall = void 0;
const withInstall = (comp) => {
    ;
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
const installDirective = (main, name) => {
    main.install = (app) => {
        app.directive(name, main);
    };
    return main;
};
exports.installDirective = installDirective;
const interior = (main, name) => {
    main.install = (app) => {
        app.config.globalProperties[name] = main;
    };
    return main;
};
exports.interior = interior;
