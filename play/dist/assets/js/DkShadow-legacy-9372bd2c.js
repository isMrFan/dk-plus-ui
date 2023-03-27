!(function () {
  var a = document.createElement('style')
  ;(a.innerHTML =
    '.index_Dk-Shadow[data-v-55d78357]{width:80%;margin:10px auto}.index_Dk-Shadow h4[data-v-55d78357],.index_Dk-Shadow h6[data-v-55d78357],.index_Dk-Shadow p[data-v-55d78357]{margin-bottom:10px}.index_Dk-Shadow .index_Dk_mg[data-v-55d78357]{margin-bottom:20px}.cesa[data-v-55d78357]{box-shadow:0 0 4px red}.hoverClass[data-v-55d78357]{transform:translateY(-2%);box-shadow:1px 4px 10px 2px red}\n'),
    document.head.appendChild(a),
    System.register(
      ['./index-legacy-2961b38d.js', './.pnpm-legacy-3f3ca544.js'],
      function (a) {
        'use strict'
        var n, e, o, s, l, d, t, i, c, h, u
        return {
          setters: [
            function (a) {
              n = a._
            },
            function (a) {
              ;(e = a.d),
                (o = a.r),
                (s = a.o),
                (l = a.c),
                (d = a.a),
                (t = a.w),
                (i = a.k),
                (c = a.q),
                (h = a.s),
                (u = a.m)
            }
          ],
          execute: function () {
            const p = e({
                name: 'DkShadowsm',
                setup: () => ({
                  htmlJson: {
                    foundation: '<Dk-Shadow>1.基础组件使用</Dk-Shadow>',
                    chacaoshix:
                      '<Dk-Shadow :type="\'title\'" :hoverType="false">\n  <template #left>\n    <span>1.左插槽(#left) </span>\n  </template>\n  <template #right>\n    <span>2.右插槽(#right)</span>\n  </template>\n</Dk-Shadow>',
                    zidingyihtml:
                      '<Dk-Shadow :shadowClass="\'cesa\'">1.自定义样式(shadowClass)</Dk-Shadow>',
                    zidingyihtmlcss: '.cesa {\n  box-shadow: 0 0 4px red;\n}',
                    xuantiao:
                      '<Dk-Shadow :hoverType="true">1.组件悬停(hoverType)</Dk-Shadow>',
                    zdyxuantiao:
                      '<Dk-Shadow :hoverType="true" :hoverClass="\'hoverClass\'">\n        1.自定义悬停效果:hoverClass\n</Dk-Shadow>',
                    zdyxuantiaocss:
                      '.hoverClass {\n  transform: translateY(-2%);\n  box-shadow: 1px 4px 10px 2px red;\n}'
                  },
                  oncopy: a => {
                    const n = document.createElement('input')
                    n.setAttribute('readonly', 'readonly'),
                      n.setAttribute('value', a),
                      document.body.appendChild(n),
                      n.setSelectionRange(0, 9999),
                      n.select(),
                      document.execCommand('copy'),
                      document.body.removeChild(n),
                      alert('复制成功')
                  }
                })
              }),
              r = a => (c('data-v-55d78357'), (a = a()), h(), a),
              m = { class: 'index_Dk-Shadow' },
              x = r(() => i('h4', null, '1.Dk-Shadow 组件', -1)),
              v = r(() => i('p', null, '(1).基础用法', -1)),
              y = r(() =>
                i(
                  'p',
                  null,
                  ' (2).type 用来判定是标题还是内容(title|标题,box|自定义内容,默认为box)(标题插槽|slot-left -左插槽,slot-right -右插槽,slot-box -内容插槽) ',
                  -1
                )
              ),
              g = r(() => i('p', null, '(3).shadowClass 自定义样式 默认: -', -1)),
              k = r(() =>
                i('p', null, '(4).hoverType 用来判定是否开启悬停效果 默认:false', -1)
              ),
              _ = r(() => i('p', null, '(4).hoverClass 自定义悬停样式 默认: -', -1)),
              f = r(() => i('h6', null, '1.基础组件使用', -1)),
              D = u('1.基础组件使用'),
              w = { class: 'index_Dk_code' },
              C = r(() => i('div', { class: 'index_Dk_mg' }, null, -1)),
              S = r(() => i('h6', null, '2.使用插槽', -1)),
              z = r(() => i('span', null, '1.左插槽(#left) ', -1)),
              J = r(() => i('span', null, '2.右插槽(#right)', -1)),
              b = { class: 'index_Dk_code' },
              j = r(() => i('div', { class: 'index_Dk_mg' }, null, -1)),
              T = r(() => i('h6', null, '3.自定义样式', -1)),
              A = u('1.自定义样式(shadowClass)'),
              E = { class: 'index_Dk_code' },
              Y = { class: 'index_Dk_code' },
              q = r(() => i('div', { class: 'index_Dk_mg' }, null, -1)),
              H = r(() => i('h6', null, '4.用来判定是否开启悬停效果', -1)),
              I = u('1.组件悬停(hoverType)'),
              L = { class: 'index_Dk_code' },
              M = r(() => i('div', { class: 'index_Dk_mg' }, null, -1)),
              R = u('1.自定义悬停效果:hoverClass'),
              B = { class: 'index_Dk_code' },
              F = { class: 'index_Dk_code' }
            a(
              'default',
              n(p, [
                [
                  'render',
                  function (a, n, e, c, h, u) {
                    const p = o('Dk-Shadow', !0),
                      r = o('highlightjs')
                    return (
                      s(),
                      l('div', m, [
                        x,
                        v,
                        y,
                        g,
                        k,
                        _,
                        f,
                        d(p, null, { default: t(() => [D]), _: 1 }),
                        i('div', w, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.foundation },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[0] || (n[0] = n => a.oncopy(a.htmlJson.foundation))
                            },
                            '复制代码'
                          )
                        ]),
                        C,
                        S,
                        d(
                          p,
                          { type: 'title', hoverType: !1 },
                          { left: t(() => [z]), right: t(() => [J]), _: 1 }
                        ),
                        i('div', b, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.chacaoshix },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[1] || (n[1] = n => a.oncopy(a.htmlJson.chacaoshix))
                            },
                            '复制代码'
                          )
                        ]),
                        j,
                        T,
                        d(p, { shadowClass: 'cesa' }, { default: t(() => [A]), _: 1 }),
                        i('div', E, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.zidingyihtml },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[2] || (n[2] = n => a.oncopy(a.htmlJson.zidingyihtml))
                            },
                            '复制代码'
                          )
                        ]),
                        i('div', Y, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.zidingyihtmlcss },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[3] || (n[3] = n => a.oncopy(a.htmlJson.zidingyihtmlcss))
                            },
                            '复制代码'
                          )
                        ]),
                        q,
                        H,
                        d(p, { hoverType: !0 }, { default: t(() => [I]), _: 1 }),
                        i('div', L, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.xuantiao },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick: n[4] || (n[4] = n => a.oncopy(a.htmlJson.xuantiao))
                            },
                            '复制代码'
                          )
                        ]),
                        M,
                        d(
                          p,
                          { hoverType: !0, hoverClass: 'hoverClass' },
                          { default: t(() => [R]), _: 1 }
                        ),
                        i('div', B, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.zdyxuantiao },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[5] || (n[5] = n => a.oncopy(a.htmlJson.zdyxuantiao))
                            },
                            '复制代码'
                          )
                        ]),
                        i('div', F, [
                          d(
                            r,
                            { language: 'javascript', code: a.htmlJson.zdyxuantiaocss },
                            null,
                            8,
                            ['code']
                          ),
                          i(
                            'span',
                            {
                              class: 'fuzhi',
                              onClick:
                                n[6] || (n[6] = n => a.oncopy(a.htmlJson.zdyxuantiaocss))
                            },
                            '复制代码'
                          )
                        ])
                      ])
                    )
                  }
                ],
                ['__scopeId', 'data-v-55d78357']
              ])
            )
          }
        }
      }
    )
})()
