export default [
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index'),
    meta: { title: '搜索', hidden: true }
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/search/index'),
    meta: { title: '详情', hidden: true }
  }
]
