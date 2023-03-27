import {
  d as _,
  r as h,
  c as v,
  a as g,
  o as k,
  b as x,
  e as E,
  N as p,
  H as w,
  j as y,
  f as b,
  g as D,
  h as A
} from './.pnpm-c43d4963.js'
function V() {
  import('data:text/javascript,')
}
const L = function () {
  const i = document.createElement('link').relList
  if (i && i.supports && i.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
  new MutationObserver(e => {
    for (const o of e)
      if (o.type === 'childList')
        for (const n of o.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && t(n)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(e) {
    const o = {}
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const o = r(e)
    fetch(e.href, o)
  }
}
L()
var P = (s, i) => {
  const r = s.__vccOpts || s
  for (const [t, e] of i) r[t] = e
  return r
}
const C = _({
    name: 'APP',
    setup() {
      window.alert = s
      function s(r) {
        var t = document.createElement('div'),
          e = document.createElement('p'),
          o = document.createElement('div'),
          n = document.createTextNode(r || '')
        i(t, {
          width: '280px;',
          padding: '10px 20px;',
          background: '#EDF2FC',
          'border-radius': '5px',
          'box-shadow': '0 0 10px #ccc',
          'text-align': 'center',
          'font-size': '14px',
          color: '#333',
          'line-height': '20px',
          'word-break': 'break-all',
          'word-wrap': 'break-word',
          position: 'fixed',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%,-50%)'
        }),
          i(o, {
            width: '100%',
            height: '30px',
            'line-height': '30px',
            background: '#f60',
            'border-radius': '5px',
            color: '#fff',
            'margin-top': '10px',
            cursor: 'pointer'
          }),
          e.appendChild(n),
          t.appendChild(e),
          document.getElementsByTagName('body')[0].appendChild(t),
          setTimeout(function () {
            t.parentNode.removeChild(t)
          }, 2e3)
      }
      function i(r, t) {
        var e = r.getAttribute('style') ? r.getAttribute('style') : ''
        for (var o in t) e += o + ':' + t[o] + ';'
        r.style.cssText = e
      }
    }
  }),
  I = { id: 'app' }
function N(s, i, r, t, e, o) {
  const n = h('router-view')
  return k(), v('div', I, [g(n)])
}
var S = P(C, [['render', N]])
const $ = 'modulepreload',
  u = {},
  T = '/',
  a = function (i, r) {
    return !r || r.length === 0
      ? i()
      : Promise.all(
          r.map(t => {
            if (((t = `${T}${t}`), t in u)) return
            u[t] = !0
            const e = t.endsWith('.css'),
              o = e ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${t}"]${o}`)) return
            const n = document.createElement('link')
            if (
              ((n.rel = e ? 'stylesheet' : $),
              e || ((n.as = 'script'), (n.crossOrigin = '')),
              (n.href = t),
              document.head.appendChild(n),
              e)
            )
              return new Promise((m, f) => {
                n.addEventListener('load', m),
                  n.addEventListener('error', () =>
                    f(new Error(`Unable to preload CSS for ${t}`))
                  )
              })
          })
        ).then(() => i())
  },
  d = () =>
    a(
      () => import('./index-f024f410.js'),
      [
        'assets/js/index-f024f410.js',
        'assets/css/index-b934300d.css',
        'assets/js/.pnpm-c43d4963.js',
        'assets/css/.pnpm-3f71a991.css'
      ]
    ),
  O = () =>
    a(
      () => import('./DkShadow-6ab14ad8.js'),
      [
        'assets/js/DkShadow-6ab14ad8.js',
        'assets/css/DkShadow-d9922793.css',
        'assets/js/.pnpm-c43d4963.js',
        'assets/css/.pnpm-3f71a991.css'
      ]
    ),
  R = () =>
    a(
      () => import('./icon-79eb7210.js'),
      [
        'assets/js/icon-79eb7210.js',
        'assets/css/icon-3c337b31.css',
        'assets/js/.pnpm-c43d4963.js',
        'assets/css/.pnpm-3f71a991.css'
      ]
    ),
  B = () =>
    a(
      () => import('./Dkbutton-6db207ff.js'),
      [
        'assets/js/Dkbutton-6db207ff.js',
        'assets/css/Dkbutton-0253a781.css',
        'assets/js/.pnpm-c43d4963.js',
        'assets/css/.pnpm-3f71a991.css'
      ]
    ),
  F = [
    { path: '/', name: '/', component: d, meta: { title: '\u9996\u9875' } },
    {
      path: '/index',
      name: 'index',
      component: d,
      meta: { title: '\u9996\u9875', keepAlive: !1, isunnewList: !1 },
      children: [
        {
          path: '/DkShadow',
          name: 'DkShadow',
          component: O,
          meta: {
            title: '\u81EA\u5B9A\u4E49\u76D2\u5B50DkShadow',
            keepAlive: !1,
            isunnewList: !1
          }
        },
        {
          path: '/DkIcon',
          name: 'DkIcon',
          component: R,
          meta: { title: '\u56FE\u6807\u4E2D\u5FC3', keepAlive: !1, isunnewList: !1 }
        },
        {
          path: '/Dkbutton',
          name: 'Dkbutton',
          component: B,
          meta: { title: '\u6309\u94AEDkbutton', keepAlive: !1, isunnewList: !1 }
        }
      ]
    }
  ],
  l = x({ history: E(), routes: F })
l.beforeEach((s, i, r) => {
  p.start()
  const t = s.meta.title == null ? 'dk-UI' : 'dk-UI-' + s.meta.title
  ;(window.document.title = t), r()
})
l.afterEach(() => {
  p.done()
})
w.registerLanguage('javascript', y)
const c = b(S)
c.use(l)
c.use(D)
c.use(A)
c.mount('#app')
export { P as _, V as __vite_legacy_guard }
