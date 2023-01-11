import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, normalizeStyle, resolveComponent, createVNode, createTextVNode } from 'vue';

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

var script$2 = defineComponent({
    name: "DkShadow",
    props: DKshadowProps,
    setup(props) {
        const DkShadow = ref(null);
        const type = computed(() => {
            if (props.type === undefined || props.type === null || props.type === "") {
                return "box";
            }
            else {
                return props.type;
            }
        });
        const shadowClass = computed(() => {
            if (props.shadowClass === undefined ||
                props.shadowClass === null ||
                props.shadowClass === "") {
                return "";
            }
            else {
                return props.shadowClass;
            }
        });
        const hoverType = computed(() => {
            if (typeof props.hoverType !== "boolean" || props.hoverType === null || props.hoverType === undefined) {
                return false;
            }
            else {
                return props.hoverType;
            }
        });
        const hoverClass = computed(() => {
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

const _hoisted_1$1 = {
  key: 0,
  class: "dk-title"
};
const _hoisted_2$1 = { class: "dk-shadow-left" };
const _hoisted_3$1 = { class: "dk-shadow-right" };
const _hoisted_4 = {
  key: 1,
  class: "dk-box"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["dk-shadow", [_ctx.shadowClass]]),
    ref: "DkShadow",
    onMouseenter: _cache[0] || (_cache[0] = (...args) => (_ctx.onhoverType && _ctx.onhoverType(...args))),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => (_ctx.oncloshoverType && _ctx.oncloshoverType(...args)))
  }, [
    (_ctx.type === 'title')
      ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createElementVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "left")
          ]),
          createElementVNode("div", _hoisted_3$1, [
            renderSlot(_ctx.$slots, "right")
          ])
        ]))
      : (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "default")
        ]))
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

script$2.render = render$2;
script$2.__file = "packages/components/dkshadow/src/dkshadow.vue";

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const dkshadow = withInstall(script$2);

const iconProps = {
    size: {
        type: Number
    },
    color: {
        type: String
    },
};

var script$1 = defineComponent({
    name: 'DkIcon',
    props: iconProps,
    setup(props) {
        const style = computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            const style = Object.assign(Object.assign({}, (props.size ? { 'font-size': props.size + 'px' } : {})), (props.color ? { 'color': props.color } : {}));
            return style;
        });
        return { style };
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: "dk-icon",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script$1.render = render$1;
script$1.__file = "packages/components/icon/src/icon.vue";

const dkIcon = withInstall(script$1);

const DKbutton = {
    type: {
        type: String
    },
};

var script = defineComponent({
    name: "DkButton",
    props: DKbutton,
    setup(props) {
        console.log("dkIcon", dkIcon);
        console.log("props", props);
        const DkButton = ref(null);
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
const _hoisted_3 = /*#__PURE__*/createTextVNode(" 12 ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dkIcon = resolveComponent("dkIcon");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode(_component_dkIcon, {
        class: "dk-yinsi",
        size: 24,
        color: 'red'
      }),
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ]))
}

script.render = render;
script.__file = "packages/components/dkbutton/src/button.vue";

const dkbutton = withInstall(script);

const components = [dkshadow, dkIcon, dkbutton];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default, dkIcon, dkbutton, dkshadow, iconProps };
