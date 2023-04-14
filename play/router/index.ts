import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const Index: Object = () => import('../views/index/index.vue')
const DkShadow: Object = () => import('../views/component/DkShadow/DkShadow.vue')
const DkIcon: Object = () => import('../views/component/icon/icon.vue')
const Dkbutton: Object = () => import('../views/component/Dkbutton/Dkbutton.vue')
const DkInput: Object = () => import('../views/component/DkInput/DkInput.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '首页',
      keepAlive: false,
      isunnewList: false
    },
    children: [
      {
        path: '/DkShadow',
        name: 'DkShadow',
        component: DkShadow,
        meta: {
          title: '自定义盒子DkShadow',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DkIcon',
        name: 'DkIcon',
        component: DkIcon,
        meta: {
          title: '图标中心',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/Dkbutton',
        name: 'Dkbutton',
        component: Dkbutton,
        meta: {
          title: '按钮Dkbutton',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DkInput',
        name: 'DkInput',
        component: DkInput,
        meta: {
          title: '输入框DkInput',
          keepAlive: false,
          isunnewList: false
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(), //createWebHistory(),
  routes
})
router.beforeEach((to: any, from, next) => {
  NProgress.start()
  const title = to.meta.title == undefined ? 'dk-UI' : 'dk-UI-' + to.meta.title
  window.document.title = title
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
