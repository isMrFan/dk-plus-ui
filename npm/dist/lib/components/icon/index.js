'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var withInstall = require('dk-plus/lib/utils/with-install');

const iconProps = {
    size: {
        type: Number
    },
    color: {
        type: String
    }
};

var script = vue.defineComponent({
    name: 'DkIcon',
    props: iconProps,
    setup(props) {
        const style = vue.computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            const style = Object.assign(Object.assign({}, (props.size ? { 'font-size': props.size + 'px' } : {})), (props.color ? { color: props.color } : {}));
            return style;
        });
        return { style };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("i", {
    class: "dk-icon",
    style: vue.normalizeStyle(_ctx.style)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "packages/components/icon/src/icon.vue";

const dkIcon = withInstall.withInstall(script);

exports.default = dkIcon;
exports.dkIcon = dkIcon;
exports.iconProps = iconProps;
