import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * hidden: true                  如果设置为true，项目将不会显示在侧栏中(默认为false)
 * alwaysShow: true              如果设置为true，将始终显示根菜单，
 *                               如果不设置，当项目有多个子路由时，它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect          如果设置noRedirect，则不会在  breadcrumb 中重定向(阻止面包屑导航跳转)
 * name:'router-name'            用于使用 <keep-alive>
 * meta : {
    title: 'title'               侧栏和面包屑的显示名称
    icon: 'svg-name'             侧边栏 icon
    noCache: true                如果设置为true，页面将不会被缓存(默认为false)
    affix: true                  如果设置为true，则标记将附加在 tags-view 中
    breadcrumb: false            如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧栏将高亮显示您设置的路径
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('views/login/index.vue'),
    name: 'Login',
    meta: { title: '登录' },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },

    ]
  },
  Type,
  Venue,
  Sport,
  Subscribe,
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('views/error-page/401.vue'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由（动态菜单）
 */
/* 系统管理 */

import Type from 'views/type/type.router'
import Venue from 'views/venue/venue.router'
import Sport from 'views/sport/sport.router'
import Subscribe from 'views/subscribe/subscribe.router'
// export const asyncRoutes = [
//   System,
//   // HouseMaster,
//   // 404页面 必须放在最后! !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () => new Router({
  mode: 'history', // 'history'模式 后端支持 打开
  scrollBehavior: () => ({ y: 0 }), // 页面切换，滚动条回顶部
  routes: constantRoutes
})

const router = createRouter()
store.dispatch('permission/initRoutes',router)

// 刷新(重置)路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 刷新路由
}
export default router
