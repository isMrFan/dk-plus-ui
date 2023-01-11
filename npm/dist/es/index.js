import { dkshadow, dkIcon, dkbutton } from 'dk-plus/es/components';
export * from 'dk-plus/es/components';

const components = [dkshadow, dkIcon, dkbutton];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default };
