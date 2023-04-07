import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, renderSlot, createElementVNode } from 'vue';
import { withInstall } from 'dk-plus/es/utils/with-install';

const DKbutton = {
    type: {
        type: String,
    },
    disable: {
        type: Boolean,
    },
    round: {
        type: String,
    },
    circle: {
        type: String,
    },
    icon: {
        type: String,
    },
    size: {
        type: String,
    },
    loading: {
        type: Boolean,
    },
    loadingIcon: {
        type: String,
    },
    loadingSize: {
        type: [Number, String],
    },
};

var script = defineComponent({
    name: "DkButton",
    props: DKbutton,
    setup(props) {
        let { icon = "", type = "default", disable = false, round = "none", circle = "none", size = "default", loading = false, loadingIcon = "", loadingSize = "", } = props;
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
                return "dk-button-rotationLoading-mask";
            }
        });
        const loadingIconClass = computed(() => {
            if (loading) {
                if (loadingIcon === "") {
                    return "dk-icon-arrows_rotate";
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
            return loadingSize === ""
                ? classType[size]
                    ? classType[size]
                    : 14
                : loadingSize;
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
            loadingIconSize,
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
      _ctx.typeClass,
      _ctx.disabledClass,
      _ctx.roundClass,
      _ctx.circleClass,
      _ctx.largeClass,
      _ctx.loadingClass,
    ]]),
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

export { dkbutton as default, dkbutton };
