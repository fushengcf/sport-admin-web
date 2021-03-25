import Layout from '@/layout/index.vue'

export default {
  path: '/major',
  component: Layout,
  redirect: '/major/list',
  name: 'Major',
  meta: {
    title: '专业管理',
    icon: 'el-icon-notebook-1'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/major/index.vue'),
      name: 'Major',
      meta: { title: '专业管理' }
    },
  ]
}
