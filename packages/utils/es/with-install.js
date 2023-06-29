export const withInstall = (comp) => {
    ;
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};
export const installDirective = (main, name) => {
    main.install = (app) => {
        app.directive(name, main);
    };
    return main;
};
export const interior = (main, name) => {
    main.install = (app) => {
        app.config.globalProperties[name] = main;
    };
    return main;
};
