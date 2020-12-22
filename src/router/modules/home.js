/* Layout */
import Layout from '@/components/layout/Layout'

export default [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/homePage/index'),
        meta: { title: '首页', icon: '', index: 0 }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/recommendPage/index'),
        meta: { title: '推荐', icon: '', index: 1 }
      }
    ]
  }
]
