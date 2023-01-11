'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var icon = require('dk-plus/lib/components/icon');
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
        console.log("dkIcon", icon.dkIcon);
        console.log("props", props);
        const DkButton = vue.ref(null);
        return {
            DkButton,
        };
    },
});

const _hoisted_1 = { class: "dk-button-box" };
const _hoisted_2 = {
  class: "dk-button",
  ref: "DkButton"
};
const _hoisted_3 = /*#__PURE__*/vue.createTextVNode(" 12 ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dkIcon = vue.resolveComponent("dkIcon");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      vue.createVNode(_component_dkIcon, {
        class: "dk-yinsi",
        size: 24,
        color: 'red'
      }),
      vue.renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ]))
}

script.render = render;
script.__file = "packages/components/dkbutton/src/button.vue";

const dkbutton = withInstall.withInstall(script);

exports["default"] = dkbutton;
exports.dkbutton = dkbutton;
