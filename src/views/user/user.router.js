import Layout from '@/layout/index.vue'

export default {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'User',
  meta: {
    title: '用户管理',
    icon: 'el-icon-cpu'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/user/index.vue'),
      name: 'User',
      meta: { title: '用户管理' }
    },
  ]
}
