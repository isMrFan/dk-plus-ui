import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, renderSlot, createTextVNode } from 'vue';
import { dkIcon } from 'dk-plus/es/components/icon';
import { withInstall } from 'dk-plus/es/utils/with-install';

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

export { dkbutton as default, dkbutton };
