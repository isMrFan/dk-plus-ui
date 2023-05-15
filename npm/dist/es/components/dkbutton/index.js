import { useSlots, computed, reactive, toRefs, toRef, ref, defineComponent, openBlock, createElementBlock, normalizeStyle, Fragment, normalizeClass, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { withInstall } from 'dk-plus/es/utils/with-install';

const { toString } = Object.prototype;
const isType = (value, type) => {
    return toString.call(value) === `[object ${type}]`;
};
const isString = (value) => typeof value === 'string';
const isBoolean = (value) => isType(value, 'Boolean');
const isObject = (value) => isType(value, 'Object');
const isFunction = (value) => isType(value, 'Function');
const isArray = Array.isArray;

const setBooleanProps = (defaultVal = false) => {
    return {
        type: Boolean,
        default: () => defaultVal
    };
};
const setStringProp = (defaultVal, validator) => {
    const config = Object.assign({ type: String, default: () => defaultVal || null }, (validator ? { validator } : {}));
    return config;
};
const setFunction = (defaultVal = null) => {
    return {
        type: Function,
        default: () => defaultVal
    };
};

const humpConversion = (str) => {
    return str.replace(/([A-Z])/g, (match, p1) => {
        return '-' + p1.toLowerCase();
    });
};
const sizeChange = (size, unit = 'px') => {
    if (!size)
        return '';
    return isString(size) ? size : size + unit;
};

const getButton = (props) => {
    const slot = useSlots();
    const isSlot = computed(() => !(slot.default && slot.default() && slot.default()[0].children));
    let defaultClassList = [
        'type', 'size', 'disabled', 'loading', 'round', 'circle',
        'textDecoration', 'shadow', 'ripples', 'diffusion'
    ];
    let params = reactive(Object.assign({}, toRefs(props)));
    if (isSlot) {
        const iconSlot = !!slot.icon;
        if (iconSlot) {
            defaultClassList = [...defaultClassList, ...['iconSlot']];
            params['iconSlot'] = true;
        }
        const afterIconSlot = !!slot.afterIcon;
        if (afterIconSlot) {
            defaultClassList = [...defaultClassList, ...['afterIconSlot']];
            params['afterIconSlot'] = true;
        }
    }
    const { classes } = getStyleList(params, 'button');
    const classList = classes([...defaultClassList], 'button');
    const styleList = computed(() => {
        const { bgColor, fontColor, shadow, fontSize } = props;
        let defaultStyle = {
            '--button-color': fontColor,
            '--button-hover': fontColor ? getColor(props.fontColor).getDodge(0.4) : null,
            '--button-active': fontColor ? getColor(props.fontColor).getDeepen(0.4) : null,
            '--button-shadow': shadow,
            '--button-font-size': sizeChange(fontSize),
            '--button-hover-borderColor': bgColor ? getColor(props.bgColor).getDodge(0.4) : null,
            '--button-hover-background': bgColor ? getColor(props.bgColor).getDodge(0.4) : null,
            '--button-background': bgColor || null,
        };
        if (bgColor) {
            const bgStyle = {
                '--button-background': bgColor || null,
                '--button-hover': bgColor ? getColor(props.bgColor).getDeepen(0.4) : null,
                '--button-active': bgColor ? getColor(props.bgColor).getDeepen(0.2) : null
            };
            defaultStyle = Object.assign(Object.assign({}, defaultStyle), bgStyle);
        }
        return defaultStyle;
    });
    return {
        classList,
        styleList
    };
};

const DK_SIZE = ['large', 'medium', 'small', 'mini'];
const DK_TYPE = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'default'
];
const DK_TYPE_COLOR = {
    default: '#f0f0f0',
    primary: '#409eff',
    success: '#67c23a',
    info: '#909399',
    warning: '#e6a23c',
    danger: '#f56c6c'
};
const DK_TARGET = ['_blank', '_self', '_parent', '_top'];

const getColor = (color) => {
    const isHexColor = /^#([0-9a-f]{3}){1,2}$/i.test(color);
    const isRgbColor = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i.test(color);
    const isRgbaColor = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0?\.\d+|1)\)$/i.test(color);
    const isColors = [
        'white',
        'silver',
        'gray',
        'black',
        'red',
        'maroon',
        'yellow',
        'olive',
        'lime',
        'green',
        'aqua',
        'teal',
        'blue',
        'navy',
        'fuchsia',
        'purple'
    ];
    const isEnglishColor = isColors.includes(color.toLowerCase());
    const englishColor = {
        white: '#FFFFFF',
        silver: '#C0C0C0',
        gray: '#808080',
        black: '#000000',
        red: '#FF0000',
        maroon: '#800000',
        yellow: '#FFFF00',
        olive: '#808000',
        lime: '#00FF00',
        green: '#008000',
        aqua: '#00FFFF',
        teal: '#008080',
        blue: '#0000FF',
        navy: '#000080',
        fuchsia: '#FF00FF',
        purple: '#800080'
    };
    const hexToRgb = (hxrColor = '') => {
        let code = hxrColor === '' ? color.replace('#', '') : hxrColor.replace('#', '');
        if (code.length === 3) {
            code = code[0] + code[0] + code[1] + code[1] + code[2] + code[2];
        }
        const hex = code.match(/../g);
        for (let i = 0; i < hex.length; i++) {
            hex[i] = parseInt(hex[i], 16).toString();
        }
        return hex;
    };
    const rgbToHex = (...rgb) => {
        const hex = [...rgb];
        for (let i = 0; i < hex.length; i++) {
            if (hex[i].length === 1) {
                hex[i] = '0' + hex[i];
            }
        }
        return '#' + hex.join('');
    };
    const getDeepen = (level = 0) => {
        if (isHexColor) {
            const rgb = hexToRgb();
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (isRgbColor) {
            const rgbString = color;
            const rgb = [];
            rgb[0] = rgbString.split('(')[1].split(',')[0];
            rgb[1] = rgbString.split('(')[1].split(',')[1];
            rgb[2] = rgbString.split('(')[1].split(',')[2].split(')')[0];
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (isRgbaColor) {
            const rgbaString = color;
            const rgb = [];
            let a = '';
            rgb[0] = rgbaString.split('(')[1].split(',')[0];
            rgb[1] = rgbaString.split('(')[1].split(',')[1];
            rgb[2] = rgbaString.split('(')[1].split(',')[2][0];
            a = rgbaString.split('(')[1].split(',')[3].split(')')[0];
            a = Math.round(Number(a) * 255)
                .toString(16)
                .padStart(2, '0');
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16);
            }
            rgb.push(a);
            return rgbToHex(...rgb);
        }
        if (isEnglishColor) {
            const HexColor = englishColor[color];
            const rgb = hexToRgb(HexColor);
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (!isHexColor && !isRgbColor && !isRgbaColor && !isEnglishColor) {
            throw new Error(`dk-plus -> getDeepen -> ${color} is not a color`);
        }
        return color;
    };
    const getDodge = (level = 0) => {
        if (isHexColor) {
            const rgb = hexToRgb();
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (isRgbColor) {
            const rgbString = color;
            const rgb = [];
            rgb[0] = rgbString.split('(')[1].split(',')[0];
            rgb[1] = rgbString.split('(')[1].split(',')[1];
            rgb[2] = rgbString.split('(')[1].split(',')[2].split(')')[0];
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (isRgbaColor) {
            const rgbaString = color;
            const rgb = [];
            let a = '';
            rgb[0] = rgbaString.split('(')[1].split(',')[0];
            rgb[1] = rgbaString.split('(')[1].split(',')[1];
            rgb[2] = rgbaString.split('(')[1].split(',')[2][0];
            a = rgbaString.split('(')[1].split(',')[3].split(')')[0];
            a = Math.round(Number(a) * 255)
                .toString(16)
                .padStart(2, '0');
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16);
            }
            rgb.push(a);
            return rgbToHex(...rgb);
        }
        if (isEnglishColor) {
            const HexColor = englishColor[color];
            const rgb = hexToRgb(HexColor);
            for (let i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16);
            }
            return rgbToHex(...rgb);
        }
        if (!isHexColor && !isRgbColor && !isRgbaColor && !isEnglishColor) {
            throw new Error(`dk-plus -> getDodge -> ${color} is not a color`);
        }
        return color;
    };
    return {
        getDeepen,
        getDodge
    };
};

const getGlobal = (props) => {
    const getType = (value = 'default') => {
        return computed(() => {
            if (!props) {
                return value;
            }
            if (props.type && !DK_TYPE.includes(props.type)) {
                return value;
            }
            return (props.type || value);
        });
    };
    const getSize = (value = 'large') => {
        return computed(() => {
            if (!props) {
                return value;
            }
            if (props.size && !DK_SIZE.includes(props.size)) {
                return value;
            }
            return (props.size || value);
        });
    };
    const getPropMapList = {
        type: getType,
        size: getSize
    };
    const getProp = (target, value) => {
        const prams = {};
        if (isArray(target)) {
            target.forEach((item, index) => {
                if (getPropMapList[item]) {
                    const defaultValue = value && value[index];
                    prams[item] = getPropMapList[item](defaultValue);
                }
            });
        }
        if (props) {
            return reactive(Object.assign(Object.assign({}, toRefs(props)), prams));
        }
        return reactive(prams);
    };
    return {
        getType,
        getSize,
        getProp
    };
};

const getProps = (props) => {
    const filter = (filterList) => {
        const obj = reactive({});
        filterList.forEach((item) => {
            if (isString(item)) {
                obj[item] = toRef(props, item);
            }
            else if (isObject(item)) {
                obj[item.key] = toRef(props, item.key);
            }
        });
        return obj;
    };
    const interceptProps = (parameter, verificationRule, defaultValue = null) => {
        return verificationRule() ? toRef(props, parameter) : defaultValue;
    };
    return {
        filter,
        interceptProps
    };
};

const getStyleList = (props, name) => {
    const { filter } = getProps(props);
    const classes = (list, className) => {
        return computed(() => {
            const classList = ref([]);
            const propList = filter(list);
            className && classList.value.push(className);
            for (const key in propList) {
                if (propList[key]) {
                    classList.value.push(`dk-${name}_${isBoolean(propList[key]) ? humpConversion(key) : propList[key]}`);
                }
            }
            return classList.value;
        });
    };
    const setStyleList = (val, key, pixel = true) => {
        const shouldAddUnit = typeof pixel === 'boolean'
            ? pixel
            : pixel === key || (Array.isArray(pixel) && pixel.includes(val.toString()));
        const valueWithUnit = shouldAddUnit ? sizeChange(val) : val;
        return String(valueWithUnit);
    };
    const styles = (list, pixel = true) => {
        const propList = filter(list);
        const styleList = Object.fromEntries(Object.entries(propList)
            .filter(([key, value]) => value)
            .map(([key, value]) => [
            `--${name}$-${humpConversion(key)}`,
            setStyleList(value, key, pixel)
        ]));
        return computed(() => styleList);
    };
    return {
        classes,
        styles
    };
};

const getReturn = () => {
    const getRun = (callback, ...params) => {
        isFunction(callback) && callback(...params);
    };
    return { getRun };
};

const getRipples = (evt, element, options) => {
    const ripplesBgColor = options.ripplesBgColor ||
        getColor(DK_TYPE_COLOR[options.type] ?
            DK_TYPE_COLOR[options.type] :
            '#f0f0f0').getDodge(0.4);
    const addElement = (x, y) => {
        const newElement = document.createElement('span');
        newElement.className = options.className;
        newElement.style.left = `${x}px`;
        newElement.style.background = ripplesBgColor;
        if (options.component === 'dk-button') {
            const box = document.createElement('div');
            box.className = '';
            box.appendChild(newElement);
            newElement.style.top = `${y}px`;
            return box;
        }
        return newElement;
    };
    const removeElement = (reElement) => {
        setTimeout(() => {
            reElement.remove();
        }, options.AnimationDuration || 500);
    };
    const useRipples = () => {
        const { layerX, layerY } = evt;
        const ripples = addElement(layerX, layerY);
        element.appendChild(ripples);
        removeElement(ripples);
    };
    return { useRipples };
};

const dkButtonProps = {
    link: setBooleanProps(),
    href: setStringProp(),
    target: setStringProp('_blank', (value) => {
        return DK_TARGET.includes(value);
    }),
    text: setBooleanProps(),
    type: setStringProp(null, (value) => {
        return DK_TYPE.includes(value);
    }),
    size: setStringProp(null, (value) => {
        return DK_SIZE.includes(value);
    }),
    fontSize: setStringProp(),
    fontColor: setStringProp(),
    bgColor: setStringProp(),
    disabled: setBooleanProps(),
    textDecoration: setStringProp(),
    onClick: setFunction(),
    circle: setBooleanProps(),
    shadow: setStringProp(),
    ripples: setBooleanProps(),
    ripplesBgColor: setStringProp(),
    diffusion: setBooleanProps(),
    loading: setBooleanProps(),
    round: setBooleanProps(),
    icon: setStringProp(),
    afterIcon: setStringProp()
};

var script = defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
        const dkBoxButton = ref();
        const { classList, styleList } = getButton(Props);
        const { getRun } = getReturn();
        const { getType } = getGlobal(Props);
        const EventClick = (evt) => {
            const { disabled, ripples } = toRefs(Props);
            if (disabled.value) {
                evt.preventDefault();
                return;
            }
            if (ripples.value) {
                const { ripplesBgColor } = toRefs(Props);
                const elementObj = reactive({
                    AnimationDuration: 1100,
                    component: 'dk-button',
                    className: 'dk-button_ripples',
                    ripplesBgColor: ripplesBgColor.value,
                    type: getType()
                });
                const { useRipples } = getRipples(evt, dkBoxButton.value, elementObj);
                useRipples();
            }
            getRun(Props.onClick, evt);
        };
        return {
            EventClick,
            dkBoxButton,
            classList,
            styleList
        };
    }
});

const _hoisted_1 = ["href", "target"];
const _hoisted_2 = ["disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: "dk-button",
    style: normalizeStyle(_ctx.disabled?'cursor:not-allowed':''),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.EventClick && _ctx.EventClick(...args)))
  }, [
    (_ctx.link || _ctx.text)
      ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (_ctx.text)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.classList,_ctx.text ? 'dk-button-text' : '' ]),
                style: normalizeStyle([_ctx.styleList])
              }, [
                renderSlot(_ctx.$slots, "icon"),
                renderSlot(_ctx.$slots, "default"),
                renderSlot(_ctx.$slots, "afterIcon")
              ], 6 /* CLASS, STYLE */))
            : createCommentVNode("v-if", true),
          (_ctx.link)
            ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([_ctx.classList,_ctx.link ? 'dk-button-link' : '']),
                style: normalizeStyle(_ctx.styleList)
              }, [
                createElementVNode("a", {
                  href: _ctx.href,
                  tabindex: "0",
                  target: _ctx.target
                }, [
                  createElementVNode("span", null, [
                    renderSlot(_ctx.$slots, "icon"),
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "afterIcon")
                  ])
                ], 8 /* PROPS */, _hoisted_1)
              ], 6 /* CLASS, STYLE */))
            : createCommentVNode("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      : (openBlock(), createElementBlock("button", {
          key: 1,
          ref: "dkBoxButton",
          class: normalizeClass(['dk-button-box',_ctx.classList]),
          style: normalizeStyle(_ctx.styleList),
          role: "button",
          disabled: _ctx.disabled
        }, [
          renderSlot(_ctx.$slots, "icon"),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "afterIcon")
        ], 14 /* CLASS, STYLE, PROPS */, _hoisted_2))
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "packages/components/dkbutton/src/button.vue";

const dkbutton = withInstall(script);

export { dkbutton as default, dkbutton };
