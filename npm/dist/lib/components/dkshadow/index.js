'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var withInstall = require('dk-plus/lib/utils/with-install');

const DKshadowProps = {
    type: {
        type: String
    },
    shadowClass: {
        type: String
    },
    hoverType: {
        type: Boolean
    },
    hoverClass: {
        type: String
    }
};

var script = vue.defineComponent({
    name: "DkShadow",
    props: DKshadowProps,
    setup(props) {
        const DkShadow = vue.ref(null);
        const type = vue.computed(() => {
            if (props.type === undefined || props.type === null || props.type === "") {
                return "box";
            }
            else {
                return props.type;
            }
        });
        const shadowClass = vue.computed(() => {
            if (props.shadowClass === undefined ||
                props.shadowClass === null ||
                props.shadowClass === "") {
                return "";
            }
            else {
                return props.shadowClass;
            }
        });
        const hoverType = vue.computed(() => {
            if (typeof props.hoverType !== "boolean" || props.hoverType === null || props.hoverType === undefined) {
                return false;
            }
            else {
                return props.hoverType;
            }
        });
        const hoverClass = vue.computed(() => {
            if (typeof props.hoverClass !== "string" || props.hoverClass === null || props.hoverClass === undefined) {
                return 'dk-shadow-hoverClass';
            }
            else {
                return props.hoverClass;
            }
        });
        const onhoverType = () => {
            if (hoverType.value) {
                DkShadow.value.classList.add("dk-shadow-hover", hoverClass.value);
            }
        };
        const oncloshoverType = () => {
            if (hoverType.value) {
                DkShadow.value.classList.remove("dk-shadow-hover", hoverClass.value);
            }
        };
        return {
            DkShadow,
            type,
            shadowClass,
            hoverType,
            onhoverType,
            oncloshoverType,
        };
    },
});

const _hoisted_1 = {
  key: 0,
  class: "dk-title"
};
const _hoisted_2 = { class: "dk-shadow-left" };
const _hoisted_3 = { class: "dk-shadow-right" };
const _hoisted_4 = {
  key: 1,
  class: "dk-box"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["dk-shadow", [_ctx.shadowClass]]),
    ref: "DkShadow",
    onMouseenter: _cache[0] || (_cache[0] = (...args) => (_ctx.onhoverType && _ctx.onhoverType(...args))),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => (_ctx.oncloshoverType && _ctx.oncloshoverType(...args)))
  }, [
    (_ctx.type === 'title')
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "left")
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "right")
          ])
        ]))
      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "default")
        ]))
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script.render = render;
script.__file = "packages/components/dkshadow/src/dkshadow.vue";

const dkshadow = withInstall.withInstall(script);

exports["default"] = dkshadow;
exports.dkshadow = dkshadow;
