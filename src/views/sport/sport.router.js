import Layout from '@/layout/index.vue'

export default {
  path: '/sport',
  component: Layout,
  redirect: '/sport/list',
  name: 'Sport',
  meta: {
    title: '运动场地管理',
    icon: 'el-icon-notebook-1'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/sport/index.vue'),
      name: 'Sport',
      meta: { title: '运动场地管理' }
    },
  ]
}
