import Layout from '@/layout/index.vue'

export default {
  path: '/type',
  component: Layout,
  redirect: '/type/list',
  name: 'Type',
  meta: {
    title: '专业管理',
    icon: 'el-icon-notebook-1'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/type/index.vue'),
      name: 'Type',
      meta: { title: '类型管理' }
    },
  ]
}
