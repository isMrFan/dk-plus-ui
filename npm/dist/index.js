(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dkPlus = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

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

  var script$2 = vue.defineComponent({
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
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["dk-shadow", [_ctx.shadowClass]]),
      ref: "DkShadow",
      onMouseenter: _cache[0] || (_cache[0] = (...args) => (_ctx.onhoverType && _ctx.onhoverType(...args))),
      onMouseleave: _cache[1] || (_cache[1] = (...args) => (_ctx.oncloshoverType && _ctx.oncloshoverType(...args)))
    }, [
      (_ctx.type === 'title')
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
            vue.createElementVNode("div", _hoisted_2$1, [
              vue.renderSlot(_ctx.$slots, "left")
            ]),
            vue.createElementVNode("div", _hoisted_3$1, [
              vue.renderSlot(_ctx.$slots, "right")
            ])
          ]))
        : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            vue.renderSlot(_ctx.$slots, "default")
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

  var script$1 = vue.defineComponent({
      name: 'DkIcon',
      props: iconProps,
      setup(props) {
          const style = vue.computed(() => {
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
    return (vue.openBlock(), vue.createElementBlock("i", {
      class: "dk-icon",
      style: vue.normalizeStyle(_ctx.style)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
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

  var script = vue.defineComponent({
      name: "DkButton",
      props: DKbutton,
      setup(props) {
          console.log("dkIcon", dkIcon);
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

  const dkbutton = withInstall(script);

  const components = [dkshadow, dkIcon, dkbutton];
  const install = (app) => {
      components.forEach((component) => app.use(component));
  };
  var index = {
      install,
  };

  exports["default"] = index;
  exports.dkIcon = dkIcon;
  exports.dkbutton = dkbutton;
  exports.dkshadow = dkshadow;
  exports.iconProps = iconProps;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
