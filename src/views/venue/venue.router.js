import Layout from '@/layout/index.vue'

export default {
  path: '/venue',
  component: Layout,
  redirect: '/venue/list',
  name: 'Venue',
  meta: {
    title: '场馆管理',
    icon: 'el-icon-notebook-1'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/venue/index.vue'),
      name: 'Venue',
      meta: { title: '场馆管理' }
    },
  ]
}
