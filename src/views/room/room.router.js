import Layout from '@/layout/index.vue'

export default {
  path: '/room',
  component: Layout,
  redirect: '/room/list',
  name: 'Room',
  meta: {
    title: '寝室管理',
    icon: 'el-icon-discount'
  },
  children: [
    {
      path: 'list',
      component: () => import('views/room/index.vue'),
      name: 'Room',
      meta: { title: '寝室管理' }
    },
  ]
}
