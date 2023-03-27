import { _ as i } from './index-730300b5.js'
import {
  d as _,
  i as p,
  t as l,
  r as n,
  o as s,
  c as a,
  k as t,
  F as h,
  l as m,
  a as r,
  w as v,
  m as x,
  n as f,
  p as k,
  q as E,
  s as B
} from './.pnpm-c43d4963.js'
const y = _({
    name: 'index',
    setup() {
      const e = p({
        rooterList: [
          { name: '\u9996\u9875', path: '/' },
          { name: '\u81EA\u5B9A\u4E49\u76D2\u5B50\u6A21\u578B', path: '/DkShadow' },
          { name: '\u56FE\u6807', path: '/DkIcon' },
          { name: '\u6309\u94AE\u7EC4\u4EF6', path: '/Dkbutton' }
        ]
      })
      return { ...l(e) }
    }
  }),
  D = e => (E('data-v-3c2d4ecb'), (e = e()), B(), e),
  w = { class: 'index' },
  S = D(() => t('h1', { class: 'index-h1' }, '\u6D4B\u8BD5\u7EC4\u4EF6\u9875\u9762', -1)),
  C = { class: 'index-conten' },
  F = { class: 'index-conten-left' },
  I = { class: 'index-conten-right' }
function $(e, g, A, b, L, N) {
  const c = n('router-link'),
    u = n('router-view')
  return (
    s(),
    a('div', w, [
      S,
      t('div', C, [
        t('div', F, [
          t('ul', null, [
            (s(!0),
            a(
              h,
              null,
              m(
                e.rooterList,
                (o, d) => (
                  s(),
                  a('li', { key: d }, [
                    r(
                      c,
                      {
                        to: o.path,
                        style: k(e.$route.path === o.path ? 'color: #29d;' : '')
                      },
                      { default: v(() => [x(f(o.name), 1)]), _: 2 },
                      1032,
                      ['to', 'style']
                    )
                  ])
                )
              ),
              128
            ))
          ])
        ]),
        t('div', I, [r(u)])
      ])
    ])
  )
}
var z = i(y, [
  ['render', $],
  ['__scopeId', 'data-v-3c2d4ecb']
])
export { z as default }
