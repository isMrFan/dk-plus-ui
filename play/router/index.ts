import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Index: Object = () => import('../views/component/index/index.vue')
const DkShadow: Object = () => import('../views/component/DkShadow/DkShadow.vue')
const DkIcon: Object = () => import('../views/component/icon/icon.vue')
const DkContainer: Object = () => import('../views/component/Dkcontainer/Dkcontainer.vue')
const DkInterval: Object = () => import('../views/component/DkInterval/DkInterval.vue')
const Dkbutton: Object = () => import('../views/component/Dkbutton/Dkbutton.vue')
const DkInput: Object = () => import('../views/component/DkInput/DkInput.vue')
const DkLoading: Object = () => import('../views/component/DkLoading/DkLoading.vue')
const DKcollapse: Object = () => import('../views/component/DKcollapse/DKcollapse.vue')
const DkAlert: Object = () => import('../views/component/DkAlert/DkAlert.vue')
const DkNumber: Object = () => import('../views/component/DkNumber/dkNumber.vue')
const DkLink: Object = () => import('../views/component/DkLink/DkLink.vue')
const routes: RouteRecordRaw[] = [
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
        path: '/DkContainer',
        name: 'DkContainer',
        component: DkContainer,
        meta: {
          title: '布局容器',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DkInterval',
        name: 'DkInterval',
        component: DkInterval,
        meta: {
          title: '间距',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DkLoading',
        name: 'DkLoading',
        component: DkLoading,
        meta: {
          title: '加载中',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DKcollapse',
        name: 'DKcollapse',
        component: DKcollapse,
        meta: {
          title: '折叠面板',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DKalert',
        name: 'DKalert',
        component: DkAlert,
        meta: {
          title: '提示',
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
      },
      {
        path: '/DkNumber',
        name: 'DkNumber',
        component: DkNumber,
        meta: {
          title: '数字输入框DkNumber',
          keepAlive: false,
          isunnewList: false
        }
      },
      {
        path: '/DkLink',
        name: 'DkLink',
        component: DkLink,
        meta: {
          title: 'link 链接',
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
router.beforeEach((to: RouteLocationNormalized, from, next) => {
  NProgress.start()
  const title = to.meta.title == undefined ? 'dk-UI' : 'dk-UI-' + to.meta.title
  window.document.title = title
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
