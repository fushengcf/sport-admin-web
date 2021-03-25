import Layout from '@/layout/index.vue'

export default {
  path: '/building',
  component: Layout,
  redirect: '/building/list',
  name: 'Building',
  meta: {
    title: '楼栋管理',
    icon: 'el-icon-office-building'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/building/index.vue'),
      name: 'Building',
      meta: { title: '楼栋管理' }
    },
  ]
}
