import Layout from '@/layout/index.vue'

export default {
  path: '/student',
  component: Layout,
  redirect: '/student/list',
  name: 'Student',
  meta: {
    title: '学生管理',
    icon: 'el-icon-s-custom'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/student/index.vue'),
      name: 'Student',
      meta: { title: '学生管理' }
    },
  ]
}
