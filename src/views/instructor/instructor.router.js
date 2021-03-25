import Layout from '@/layout/index.vue'

export default {
  path: '/instructor',
  component: Layout,
  redirect: '/instructor/list',
  name: 'Instructor',
  meta: {
    title: '辅导员管理',
    icon: 'el-icon-coordinate'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/instructor/index.vue'),
      name: 'Instructor',
      meta: { title: '辅导员管理' }
    },
  ]
}
