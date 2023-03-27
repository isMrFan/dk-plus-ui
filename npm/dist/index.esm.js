import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, normalizeStyle, resolveComponent, createVNode } from 'vue';

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
const _hoisted_4$1 = {
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
      : (openBlock(), createElementBlock("div", _hoisted_4$1, [
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
    disable: {
        type: Boolean
    },
    round: {
        type: String
    },
    circle: {
        type: String
    },
    icon: {
        type: String
    },
    size: {
        type: String
    },
    loading: {
        type: Boolean
    },
    loadingIcon: {
        type: String
    },
    loadingSize: {
        type: [Number, String]
    }
};

var script = defineComponent({
    name: "DkButton",
    props: DKbutton,
    setup(props) {
        let { icon = "", type = "default", disable = false, round = "none", circle = "none", size = "default", loading = false, loadingIcon = '', loadingSize = '' } = props;
        const typeClass = computed(() => {
            type === "" ? (type = "default") : "";
            let retClassList = [];
            const classType = {
                default: "dk-button-default",
                primary: "dk-button-primary",
                success: "dk-button-success",
                info: "dk-button-info",
                warning: "dk-button-warning",
                danger: "dk-button-danger",
            };
            let retClass = classType[type];
            retClassList.push(retClass);
            return retClassList;
        });
        const disabledClass = computed(() => {
            type === "" ? (type = "default") : "";
            let forbidClassList = [];
            if (disable) {
                const disabledClassType = {
                    default: "dk-button-default-disabled",
                    primary: "dk-button-primary-disabled",
                    success: "dk-button-success-disabled",
                    info: "dk-button-info-disabled",
                    warning: "dk-button-warning-disabled",
                    danger: "dk-button-danger-disabled",
                };
                let retDisabled = disabledClassType[type];
                forbidClassList.push(retDisabled);
                return forbidClassList;
            }
        });
        const roundClass = computed(() => {
            if (round !== "none") {
                return "dk-button-round";
            }
        });
        const circleClass = computed(() => {
            if (circle !== "none") {
                return "dk-button-circle";
            }
        });
        const largeClass = computed(() => {
            let retClassList = [];
            const classType = {
                large: "dk-button-large",
                default: "dk-button-default",
                small: "dk-button-small",
            };
            let retClass = classType[size];
            retClassList.push(retClass);
            if (circle !== "none" && size === "small") {
                retClassList.push("dk-button-round-small");
            }
            return retClassList;
        });
        const iconSize = computed(() => {
            const classType = {
                large: 16,
                default: 14,
                small: 11,
            };
            return classType[size] ? classType[size] : 14;
        });
        const iconColor = computed(() => {
            let Color = "#ffffff";
            if (type === "default") {
                Color = "#c8c9cc";
            }
            else {
                if (disable) {
                    Color = "#c8c9cc";
                }
                else {
                    Color = "#ffffff";
                }
            }
            return Color;
        });
        const loadingClass = computed(() => {
            if (loading) {
                return 'dk-button-rotationLoading-mask';
            }
        });
        const loadingIconClass = computed(() => {
            if (loading) {
                if (loadingIcon === '') {
                    return 'dk-icon-arrows_rotate';
                }
                else {
                    return loadingIcon;
                }
            }
        });
        const loadingIconSize = computed(() => {
            const classType = {
                large: 16,
                default: 14,
                small: 12,
            };
            return loadingSize === '' ? classType[size] ? classType[size] : 14 : loadingSize;
        });
        return {
            typeClass,
            disabledClass,
            roundClass,
            circleClass,
            largeClass,
            iconSize,
            iconColor,
            icon,
            disable,
            loading,
            loadingClass,
            loadingIconClass,
            loadingIconSize
        };
    },
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "dk-button-conten"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "dk-button-rotationLoading"
};
const _hoisted_5 = { class: "dk-button-loading" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dkIcon = resolveComponent("dkIcon");

  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(["dk-button", [
    _ctx.typeClass, _ctx.disabledClass,
    _ctx.roundClass, _ctx.circleClass,
    _ctx.largeClass, _ctx.loadingClass]]),
    type: "button"
  }, [
    (_ctx.circle === '')
      ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_dkIcon, {
            class: normalizeClass(_ctx.icon),
            size: _ctx.iconSize,
            color: _ctx.iconColor
          }, null, 8 /* PROPS */, ["class", "size", "color"])
        ]))
      : (openBlock(), createElementBlock("div", _hoisted_2, [
          (_ctx.icon)
            ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_dkIcon, {
                  class: normalizeClass([_ctx.icon, "dk-button-conten-magin"]),
                  size: _ctx.iconSize
                }, null, 8 /* PROPS */, ["class", "size"]),
                renderSlot(_ctx.$slots, "default")
              ]))
            : (_ctx.loading)
              ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createElementVNode("div", _hoisted_5, [
                    createVNode(_component_dkIcon, {
                      class: normalizeClass(_ctx.loadingIconClass),
                      size: _ctx.loadingIconSize,
                      color: '#fff'
                    }, null, 8 /* PROPS */, ["class", "size"])
                  ]),
                  renderSlot(_ctx.$slots, "default")
                ]))
              : renderSlot(_ctx.$slots, "default", { key: 2 })
        ]))
  ], 2 /* CLASS */))
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
