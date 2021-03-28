import Layout from '@/layout/index.vue'

export default {
  path: '/subscribe',
  component: Layout,
  redirect: '/subscribe/list',
  name: 'Subscribe',
  meta: {
    title: '预定管理',
    icon: 'el-icon-alarm-clock'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/subscribe/index.vue'),
      name: 'Subscribe',
      meta: { title: '预定管理' }
    },
  ]
}
