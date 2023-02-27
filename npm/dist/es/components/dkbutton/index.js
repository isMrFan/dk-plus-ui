import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createCommentVNode } from 'vue';
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
        const typeClass = computed(() => {
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
  return (openBlock(), createElementBlock("div", null, [
    createElementVNode("button", {
      class: normalizeClass(["dk-button", _ctx.typeClass]),
      type: "button"
    }, [
      createElementVNode("span", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 2 /* CLASS */),
    createCommentVNode(" <dkIcon class=\"dk-icon-shujuxitong\" :size=\"24\" :color=\"'red'\"></dkIcon>     ")
  ]))
}

script.render = render;
script.__file = "packages/components/dkbutton/src/button.vue";

const dkbutton = withInstall(script);

export { dkbutton as default, dkbutton };
