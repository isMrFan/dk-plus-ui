!(function () {
  function e(e, t) {
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e)
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
  }
  function t(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ('object' != typeof e || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == typeof t ? t : String(t)
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n),
      e
    )
  }
  var n = document.createElement('style')
  ;(n.innerHTML =
    '@charset "UTF-8";[data-v-3c2d4ecb]::-webkit-scrollbar{width:8px;height:9px}[data-v-3c2d4ecb]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#1cb1a4;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)}[data-v-3c2d4ecb]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#ededed;border-radius:10px}.index[data-v-3c2d4ecb]{width:100%;height:100vh;background:#fff;overflow:hidden}.index .index-h1[data-v-3c2d4ecb]{text-align:center;margin-bottom:20px}.index .index-conten[data-v-3c2d4ecb]{width:90%;margin:0 auto;display:flex}.index .index-conten .index-conten-left[data-v-3c2d4ecb]{width:200px}.index .index-conten .index-conten-left ul[data-v-3c2d4ecb]{list-style:none}.index .index-conten .index-conten-left ul li[data-v-3c2d4ecb]{margin-bottom:10px}.index .index-conten .index-conten-left ul li a[data-v-3c2d4ecb]{color:#000;text-decoration:none}.index .index-conten .index-conten-right[data-v-3c2d4ecb]{width:calc(100% - 200px);height:100vh;overflow:scroll;padding-bottom:150px;box-sizing:border-box}\n'),
    document.head.appendChild(n),
    System.register(
      ['./index-legacy-2961b38d.js', './.pnpm-legacy-3f3ca544.js'],
      function (n) {
        'use strict'
        var r, i, o, a, c, d, l, b, u, s, p, f, x, g, h, v, m
        return {
          setters: [
            function (e) {
              r = e._
            },
            function (e) {
              ;(i = e.d),
                (o = e.i),
                (a = e.t),
                (c = e.r),
                (d = e.o),
                (l = e.c),
                (b = e.k),
                (u = e.F),
                (s = e.l),
                (p = e.a),
                (f = e.w),
                (x = e.m),
                (g = e.n),
                (h = e.p),
                (v = e.q),
                (m = e.s)
            }
          ],
          execute: function () {
            const y = i({
                name: 'index',
                setup() {
                  const n = o({
                    rooterList: [
                      { name: '首页', path: '/' },
                      { name: '自定义盒子模型', path: '/DkShadow' },
                      { name: '图标', path: '/DkIcon' },
                      { name: '按钮组件', path: '/Dkbutton' }
                    ]
                  })
                  return (function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var i = null != arguments[r] ? arguments[r] : {}
                      r % 2
                        ? e(Object(i), !0).forEach(function (e) {
                            t(n, e, i[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : e(Object(i)).forEach(function (e) {
                            Object.defineProperty(
                              n,
                              e,
                              Object.getOwnPropertyDescriptor(i, e)
                            )
                          })
                    }
                    return n
                  })({}, a(n))
                }
              }),
              w = { class: 'index' },
              O = (e => (v('data-v-3c2d4ecb'), (e = e()), m(), e))(() =>
                b('h1', { class: 'index-h1' }, '测试组件页面', -1)
              ),
              j = { class: 'index-conten' },
              k = { class: 'index-conten-left' },
              P = { class: 'index-conten-right' }
            n(
              'default',
              r(y, [
                [
                  'render',
                  function (e, t, n, r, i, o) {
                    const a = c('router-link'),
                      v = c('router-view')
                    return (
                      d(),
                      l('div', w, [
                        O,
                        b('div', j, [
                          b('div', k, [
                            b('ul', null, [
                              (d(!0),
                              l(
                                u,
                                null,
                                s(
                                  e.rooterList,
                                  (t, n) => (
                                    d(),
                                    l('li', { key: n }, [
                                      p(
                                        a,
                                        {
                                          to: t.path,
                                          style: h(
                                            e.$route.path === t.path ? 'color: #29d;' : ''
                                          )
                                        },
                                        { default: f(() => [x(g(t.name), 1)]), _: 2 },
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
                          b('div', P, [p(v)])
                        ])
                      ])
                    )
                  }
                ],
                ['__scopeId', 'data-v-3c2d4ecb']
              ])
            )
          }
        }
      }
    )
})()
