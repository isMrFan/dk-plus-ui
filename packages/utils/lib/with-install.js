"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstall = void 0;
const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
