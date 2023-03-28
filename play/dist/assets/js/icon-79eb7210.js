import { _ as k } from './index-730300b5.js'
import {
  d as f,
  r as x,
  o as a,
  c as t,
  k as n,
  a as s,
  F as u,
  l,
  u as g,
  n as d,
  q as z,
  s as b
} from './.pnpm-c43d4963.js'
const j = f({
    name: 'DkIconsm',
    setup() {
      return {
        htmlJson: {
          foundation: '<dkIcon class="dk-yinsi"></dkIcon>',
          zidingyis: `<dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>`
        },
        oncopy: h => {
          const c = document.createElement('input')
          c.setAttribute('readonly', 'readonly'),
            c.setAttribute('value', h),
            document.body.appendChild(c),
            c.setSelectionRange(0, 9999),
            c.select(),
            document.execCommand('copy'),
            document.body.removeChild(c),
            alert('\u590D\u5236\u6210\u529F')
        },
        iconList: [
          'icon-sousuowenjian',
          'icon-xitongxinxi',
          'icon-02sousuo',
          'icon-sousuo',
          'icon-sousuoleimufill',
          'icon-xitongcaidan',
          'icon-xitongfanhui',
          'icon-xitongtongzhi',
          'icon-icon-link',
          'icon-xitongyunweidakaiwenjianjia',
          'icon-xitongyunweibaocunshouquan',
          'icon-drgspingtairuanjianxitong210',
          'icon-drgspingtairuanjianxitong212',
          'icon-xitong1',
          'icon-xitong',
          'icon-wangluoxitong',
          'icon-xitongyunzhuanqingkuang',
          'icon-xitongzhuangtai',
          'icon-subsystem',
          'icon-zhantingzhinengzhongkongxitong',
          'icon-xitongguanliyuan',
          'icon-zhuxiaoxitong',
          'icon-shebeisousuo',
          'icon-guanliyuansousuo_o',
          'icon-shebeisousuo_o',
          'icon-shujuxitong',
          'icon-svg-',
          'icon-chaxun',
          'icon-mysql',
          'icon--xitong',
          'icon-xitongfuzai',
          'icon-keyanxitong',
          'icon-xitongyunwei',
          'icon-wendangguanlixitong-wendangguanlixitongtubiao',
          'icon-wendangguanlixitong-yaopinliuxiangxitongtubiao',
          'icon-xitongxiaoxi',
          'icon-xitongdaoru',
          'icon-xitongpeizhi',
          'icon-xitongtongzhi1',
          'icon-yewutubiao_keyanxitong',
          'icon-xitong2',
          'icon-xitongguanli',
          'icon-xitong3',
          'icon-xitong-weizhipeizhi',
          'icon-xitong-zichanzidian',
          'icon-xitong-zichanpeizhi',
          'icon-xitongrizhi',
          'icon-xitongxiaoxi1',
          'icon-xitong4',
          'icon-xitongxinxi1',
          'icon-waihuxitong',
          'icon-xitongjiandu',
          'icon-xitongweihu',
          'icon-juyuwangsousuo',
          'icon-shipinjiankongxitong',
          'icon-xitong5',
          'icon-xitonggengxin',
          'icon-UIsheji_menjinxitong-10',
          'icon-cloud-search-full',
          'icon-yingyongxitongzhanghaoyuquanxianshenqingliucheng__xianxing__-01',
          'icon-tuichuxitong',
          'icon-xitongloudongjianceshenqing',
          'icon-xitonganquan',
          'icon-icon_1-16',
          'icon-xitongwendang',
          'icon-xitonggonggao'
        ],
        iconnamespace: [
          'icon-arrow-down-filling',
          'icon-arrow-left-filling',
          'icon-arrow-right-filling',
          'icon-arrow-go-forward-fill',
          'icon-icf_narrow_screen_arrow',
          'icon-box-arrow-in-down-right',
          'icon-box-arrow-in-up-left',
          'icon-arrowgraphdownleft',
          'icon-jiantouarrow482',
          'icon-jianarrows67',
          'icon-arrows_rotate',
          'icon-arrowup',
          'icon-arrowdown',
          'icon-arrows-alt',
          'icon-arrow-to-bottom',
          'icon-arrow-to-top',
          'icon-long-arrow-down',
          'icon-long-arrow-up',
          'icon-arrow-right',
          'icon-arrow-left',
          'icon-arrows-v',
          'icon-arrow-alt-from-top',
          'icon-arrow-alt-from-botto',
          'icon-narrow',
          'icon--arrow-',
          'icon-arrow-growth',
          'icon-right-arrow-rect',
          'icon-left-arrow-rect',
          'icon-arrow-growth1',
          'icon-arrow-left1',
          'icon-arrow-down',
          'icon-arrow_up_arrow_down',
          'icon-tray_arrow_down',
          'icon-arrow-right1',
          'icon-arrow-double-left',
          'icon-arrow-double-right',
          'icon-arrow-up-bold',
          'icon-arrow-up-filling'
        ],
        iconother: [
          'icon-genzongmubiaoshezhi',
          'icon-cuowu',
          'icon-weixin',
          'icon-zhifutixing',
          'icon-wxbdingwei',
          'icon-gouwuchetianjia',
          'icon-jushoucang',
          'icon-weixinzhifu',
          'icon-jushoucanggift',
          'icon-z-weixin',
          'icon-icon',
          'icon-mimakejian',
          'icon-tianjiabeizhu',
          'icon-qq',
          'icon-mima',
          'icon-dustbin-recycle-bin-trash-erase-ebaccf',
          'icon-wenjianshanchu',
          'icon-zhifubao',
          'icon-dingwei',
          'icon-shanchuyoujian',
          'icon-nan',
          'icon-xinyongqiazhifu',
          'icon-shanchu',
          'icon-zhifu',
          'icon-biyan',
          'icon-QQ',
          'icon-tupiantianjia',
          'icon-weibiaoti--',
          'icon-tianchongxing-',
          'icon-tianchongxing-1',
          'icon-jianhao',
          'icon-shoucangjiaobiao',
          'icon-tianjia',
          'icon-shoucang',
          'icon-tianjiaxiaoxi',
          'icon-ziyuan',
          'icon-zhifushibai',
          'icon-idcard-add-fill',
          'icon-shoucang1',
          'icon-mimaxianshi',
          'icon-mimayincang',
          'icon-tianjiaziji',
          'icon-jurassic_delete-users',
          'icon-jurassic_delete-org',
          'icon-nan1',
          'icon-tianjia1',
          'icon-mima1',
          'icon-nv',
          'icon-shoucang2',
          'icon-shoucang3',
          'icon-shoucang4',
          'icon-huifushanchu',
          'icon-nv1',
          'icon-zhifushezhi',
          'icon-Deletemember',
          'icon-union-pay',
          'icon-nan2',
          'icon-zaixianzhifuPay',
          'icon-a-Lock-User2',
          'icon-a-Lock-User1',
          'icon-Union-41'
        ]
      }
    }
  }),
  r = i => (z('data-v-8271489e'), (i = i()), b(), i),
  v = { class: 'template_icon' },
  C = { class: 'template_icon_jcsy' },
  I = r(() =>
    n('h4', { class: 'template_icon_title' }, ' 1.\u57FA\u7840\u4F7F\u7528 ', -1)
  ),
  q = { class: 'index_Dk_code' },
  D = { class: 'template_icon_jcsy' },
  F = r(() =>
    n(
      'h4',
      { class: 'template_icon_title' },
      ' 2.\u81EA\u5B9A\u4E49\u5927\u5C0F\u548C\u989C\u8272(\u989C\u8272\u53EA\u652F\u630116\u8FDB\u5236 \u548C\u82F1\u6587\u5355\u8BCD) ',
      -1
    )
  ),
  E = { class: 'index_Dk_code' },
  $ = r(() => n('h3', { class: 'cont_template_icon_title' }, '(1).System', -1)),
  A = { class: 'icon_library' },
  B = ['onClick'],
  J = { class: 'icon_library_item_icon' },
  L = { class: 'icon_library_item_name' },
  S = r(() => n('h3', { class: 'cont_template_icon_title' }, '(2).other', -1)),
  U = { class: 'icon_library' },
  N = ['onClick'],
  Q = { class: 'icon_library_item_icon' },
  V = { class: 'icon_library_item_name' },
  P = r(() => n('h3', { class: 'cont_template_icon_title' }, '(3).Arrow', -1)),
  R = { class: 'icon_library' },
  G = ['onClick'],
  H = { class: 'icon_library_item_icon' },
  K = { class: 'icon_library_item_name' }
function M(i, e, p, y, m, h) {
  const c = x('dkIcon'),
    _ = x('highlightjs')
  return (
    a(),
    t('div', v, [
      n('div', C, [
        I,
        s(c, { class: 'dk-yinsi' }),
        n('div', q, [
          s(_, { language: 'javascript', code: i.htmlJson.foundation }, null, 8, [
            'code'
          ]),
          n(
            'span',
            {
              class: 'fuzhi',
              onClick: e[0] || (e[0] = o => i.oncopy(i.htmlJson.foundation))
            },
            '\u590D\u5236\u4EE3\u7801'
          )
        ])
      ]),
      n('div', D, [
        F,
        s(c, { size: 24, color: 'red', class: 'dk-yinsi' }),
        n('div', E, [
          s(_, { language: 'javascript', code: i.htmlJson.zidingyis }, null, 8, ['code']),
          n(
            'span',
            {
              class: 'fuzhi',
              onClick: e[1] || (e[1] = o => i.oncopy(i.htmlJson.zidingyis))
            },
            '\u590D\u5236\u4EE3\u7801'
          )
        ])
      ]),
      $,
      n('div', A, [
        (a(!0),
        t(
          u,
          null,
          l(
            i.iconList,
            o => (
              a(),
              t(
                'div',
                { class: 'icon_library_item', key: o, onClick: w => i.oncopy('dk-' + o) },
                [
                  n('div', J, [
                    s(c, { class: g('dk-' + o), size: 24, color: '#606266' }, null, 8, [
                      'class'
                    ])
                  ]),
                  n('div', L, d('dk-' + o), 1)
                ],
                8,
                B
              )
            )
          ),
          128
        ))
      ]),
      S,
      n('div', U, [
        (a(!0),
        t(
          u,
          null,
          l(
            i.iconnamespace,
            o => (
              a(),
              t(
                'div',
                { class: 'icon_library_item', key: o, onClick: w => i.oncopy('dk-' + o) },
                [
                  n('div', Q, [
                    s(c, { class: g('dk-' + o), size: 24, color: '#606266' }, null, 8, [
                      'class'
                    ])
                  ]),
                  n('div', V, d('dk-' + o), 1)
                ],
                8,
                N
              )
            )
          ),
          128
        ))
      ]),
      P,
      n('div', R, [
        (a(!0),
        t(
          u,
          null,
          l(
            i.iconother,
            o => (
              a(),
              t(
                'div',
                { class: 'icon_library_item', key: o, onClick: w => i.oncopy('dk-' + o) },
                [
                  n('div', H, [
                    s(c, { class: g('dk-' + o), size: 24, color: '#606266' }, null, 8, [
                      'class'
                    ])
                  ]),
                  n('div', K, d('dk-' + o), 1)
                ],
                8,
                G
              )
            )
          ),
          128
        ))
      ])
    ])
  )
}
var W = k(j, [
  ['render', M],
  ['__scopeId', 'data-v-8271489e']
])
export { W as default }