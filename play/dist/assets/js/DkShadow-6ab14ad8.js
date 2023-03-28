import { _ } from './index-730300b5.js'
import {
  d as r,
  r as p,
  o as D,
  c as m,
  a as n,
  w as d,
  k as u,
  q as v,
  s as E,
  m as h
} from './.pnpm-c43d4963.js'
const C = r({
    name: 'DkShadowsm',
    setup() {
      return {
        htmlJson: {
          foundation: '<Dk-Shadow>1.\u57FA\u7840\u7EC4\u4EF6\u4F7F\u7528</Dk-Shadow>',
          chacaoshix: `<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.\u5DE6\u63D2\u69FD(#left) </span>
  </template>
  <template #right>
    <span>2.\u53F3\u63D2\u69FD(#right)</span>
  </template>
</Dk-Shadow>`,
          zidingyihtml: `<Dk-Shadow :shadowClass="'cesa'">1.\u81EA\u5B9A\u4E49\u6837\u5F0F(shadowClass)</Dk-Shadow>`,
          zidingyihtmlcss: `.cesa {
  box-shadow: 0 0 4px red;
}`,
          xuantiao:
            '<Dk-Shadow :hoverType="true">1.\u7EC4\u4EF6\u60AC\u505C(hoverType)</Dk-Shadow>',
          zdyxuantiao: `<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'">
        1.\u81EA\u5B9A\u4E49\u60AC\u505C\u6548\u679C:hoverClass
</Dk-Shadow>`,
          zdyxuantiaocss: `.hoverClass {
  transform: translateY(-2%);
  box-shadow: 1px 4px 10px 2px red;
}`
        },
        oncopy: c => {
          const t = document.createElement('input')
          t.setAttribute('readonly', 'readonly'),
            t.setAttribute('value', c),
            document.body.appendChild(t),
            t.setSelectionRange(0, 9999),
            t.select(),
            document.execCommand('copy'),
            document.body.removeChild(t),
            alert('\u590D\u5236\u6210\u529F')
        }
      }
    }
  }),
  s = o => (v('data-v-55d78357'), (o = o()), E(), o),
  F = { class: 'index_Dk-Shadow' },
  y = s(() => u('h4', null, '1.Dk-Shadow \u7EC4\u4EF6', -1)),
  k = s(() => u('p', null, '(1).\u57FA\u7840\u7528\u6CD5', -1)),
  A = s(() =>
    u(
      'p',
      null,
      ' (2).type \u7528\u6765\u5224\u5B9A\u662F\u6807\u9898\u8FD8\u662F\u5185\u5BB9(title|\u6807\u9898,box|\u81EA\u5B9A\u4E49\u5185\u5BB9,\u9ED8\u8BA4\u4E3Abox)(\u6807\u9898\u63D2\u69FD|slot-left -\u5DE6\u63D2\u69FD,slot-right -\u53F3\u63D2\u69FD,slot-box -\u5185\u5BB9\u63D2\u69FD) ',
      -1
    )
  ),
  g = s(() =>
    u('p', null, '(3).shadowClass \u81EA\u5B9A\u4E49\u6837\u5F0F \u9ED8\u8BA4: -', -1)
  ),
  f = s(() =>
    u(
      'p',
      null,
      '(4).hoverType \u7528\u6765\u5224\u5B9A\u662F\u5426\u5F00\u542F\u60AC\u505C\u6548\u679C \u9ED8\u8BA4:false',
      -1
    )
  ),
  w = s(() =>
    u(
      'p',
      null,
      '(4).hoverClass \u81EA\u5B9A\u4E49\u60AC\u505C\u6837\u5F0F \u9ED8\u8BA4: -',
      -1
    )
  ),
  B = s(() => u('h6', null, '1.\u57FA\u7840\u7EC4\u4EF6\u4F7F\u7528', -1)),
  S = h('1.\u57FA\u7840\u7EC4\u4EF6\u4F7F\u7528'),
  x = { class: 'index_Dk_code' },
  z = s(() => u('div', { class: 'index_Dk_mg' }, null, -1)),
  J = s(() => u('h6', null, '2.\u4F7F\u7528\u63D2\u69FD', -1)),
  $ = s(() => u('span', null, '1.\u5DE6\u63D2\u69FD(#left) ', -1)),
  T = s(() => u('span', null, '2.\u53F3\u63D2\u69FD(#right)', -1)),
  b = { class: 'index_Dk_code' },
  j = s(() => u('div', { class: 'index_Dk_mg' }, null, -1)),
  I = s(() => u('h6', null, '3.\u81EA\u5B9A\u4E49\u6837\u5F0F', -1)),
  N = h('1.\u81EA\u5B9A\u4E49\u6837\u5F0F(shadowClass)'),
  V = { class: 'index_Dk_code' },
  q = { class: 'index_Dk_code' },
  R = s(() => u('div', { class: 'index_Dk_mg' }, null, -1)),
  Y = s(() =>
    u(
      'h6',
      null,
      '4.\u7528\u6765\u5224\u5B9A\u662F\u5426\u5F00\u542F\u60AC\u505C\u6548\u679C',
      -1
    )
  ),
  G = h('1.\u7EC4\u4EF6\u60AC\u505C(hoverType)'),
  H = { class: 'index_Dk_code' },
  K = s(() => u('div', { class: 'index_Dk_mg' }, null, -1)),
  L = h('1.\u81EA\u5B9A\u4E49\u60AC\u505C\u6548\u679C:hoverClass'),
  M = { class: 'index_Dk_code' },
  O = { class: 'index_Dk_code' }
function P(o, e, c, t, Q, U) {
  const i = p('Dk-Shadow', !0),
    a = p('highlightjs')
  return (
    D(),
    m('div', F, [
      y,
      k,
      A,
      g,
      f,
      w,
      B,
      n(i, null, { default: d(() => [S]), _: 1 }),
      u('div', x, [
        n(a, { language: 'javascript', code: o.htmlJson.foundation }, null, 8, ['code']),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[0] || (e[0] = l => o.oncopy(o.htmlJson.foundation))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      z,
      J,
      n(
        i,
        { type: 'title', hoverType: !1 },
        { left: d(() => [$]), right: d(() => [T]), _: 1 }
      ),
      u('div', b, [
        n(a, { language: 'javascript', code: o.htmlJson.chacaoshix }, null, 8, ['code']),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[1] || (e[1] = l => o.oncopy(o.htmlJson.chacaoshix))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      j,
      I,
      n(i, { shadowClass: 'cesa' }, { default: d(() => [N]), _: 1 }),
      u('div', V, [
        n(a, { language: 'javascript', code: o.htmlJson.zidingyihtml }, null, 8, [
          'code'
        ]),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[2] || (e[2] = l => o.oncopy(o.htmlJson.zidingyihtml))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      u('div', q, [
        n(a, { language: 'javascript', code: o.htmlJson.zidingyihtmlcss }, null, 8, [
          'code'
        ]),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[3] || (e[3] = l => o.oncopy(o.htmlJson.zidingyihtmlcss))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      R,
      Y,
      n(i, { hoverType: !0 }, { default: d(() => [G]), _: 1 }),
      u('div', H, [
        n(a, { language: 'javascript', code: o.htmlJson.xuantiao }, null, 8, ['code']),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[4] || (e[4] = l => o.oncopy(o.htmlJson.xuantiao))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      K,
      n(i, { hoverType: !0, hoverClass: 'hoverClass' }, { default: d(() => [L]), _: 1 }),
      u('div', M, [
        n(a, { language: 'javascript', code: o.htmlJson.zdyxuantiao }, null, 8, ['code']),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[5] || (e[5] = l => o.oncopy(o.htmlJson.zdyxuantiao))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ]),
      u('div', O, [
        n(a, { language: 'javascript', code: o.htmlJson.zdyxuantiaocss }, null, 8, [
          'code'
        ]),
        u(
          'span',
          {
            class: 'fuzhi',
            onClick: e[6] || (e[6] = l => o.oncopy(o.htmlJson.zdyxuantiaocss))
          },
          '\u590D\u5236\u4EE3\u7801'
        )
      ])
    ])
  )
}
var Z = _(C, [
  ['render', P],
  ['__scopeId', 'data-v-55d78357']
])
export { Z as default }