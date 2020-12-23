/* Layout */
import Layout from '@/components/layout/Layout'

export default [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', icon: 'home', index: 0 },
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/homePage/index'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/recommendPage',
    component: Layout,
    name: 'RecommendPage',
    meta: { title: '推荐', icon: 'recommend', index: 1 },
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/recommendPage/index'),
        meta: { title: '推荐' }
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import('@/views/recommendPage/index'),
        meta: { title: '热门' }
      }
    ]
  },
  {
    path: '/productPage',
    component: Layout,
    name: 'productPage',
    meta: { title: '商品', icon: 'all', index: 2 },
    children: [
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/productPage/index'),
        meta: { title: '商品' }
      }
    ]
  },
  {
    path: '/cartPage',
    component: Layout,
    name: 'cartPage',
    meta: { title: '购物车', icon: 'cart', index: 3 },
    children: [
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/cartPage/index'),
        meta: { title: '购物车' }
      }
    ]
  },
  {
    path: '/userPage',
    component: Layout,
    name: 'userPage',
    meta: { title: '我的', icon: 'account', index: 4 },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/productPage/index'),
        meta: { title: '我的' }
      }
    ]
  }
]
