export default [
  {
    path: '/homePage',
    name: 'homePage',
    component: resolve => require(['@/views/homePage/index'], resolve),
    meta: {
      title: '',
      needLogin: false,
      keepAlive: false
    }
  }
]
