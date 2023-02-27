'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var withInstall = require('dk-plus/lib/utils/with-install');

const DKbutton = {
    type: {
        type: String
    },
};

var script = vue.defineComponent({
    name: "DkButton",
    props: DKbutton,
    setup(props) {
        const typeClass = vue.computed(() => {
            let { type = 'default' } = props;
            const classType = {
                'default': "dk-button-default",
                'primary': "dk-button-primary",
                'success': "dk-button-success",
                'info': "dk-button-info",
                'warning': "dk-button-warning",
                'danger': "dk-button-danger"
            };
            let retClass = classType[type];
            const retClassList = [retClass];
            return retClassList;
        });
        return {
            typeClass,
        };
    },
});

const _hoisted_1 = { class: "dk-button-conten" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("button", {
      class: vue.normalizeClass(["dk-button", _ctx.typeClass]),
      type: "button"
    }, [
      vue.createElementVNode("span", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 2 /* CLASS */),
    vue.createCommentVNode(" <dkIcon class=\"dk-icon-shujuxitong\" :size=\"24\" :color=\"'red'\"></dkIcon>     ")
  ]))
}

script.render = render;
script.__file = "packages/components/dkbutton/src/button.vue";

const dkbutton = withInstall.withInstall(script);

exports["default"] = dkbutton;
exports.dkbutton = dkbutton;
