import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '../components/layout/Layout'
const componentContext = require.context('./modules', false, /.js$/)
const modules = componentContext.keys().reduce((result, fileName) => {
  result = [ ...result, ...componentContext(fileName).default ]
  return result
}, {})
Vue.use(Router)
export const routers = [...modules]
const router = new Router({
  // mode: 'history',
  base: '/ahmniue',
  routes: routers,
  scrollBehavior: () => ({ y: 0 })
})
router.afterEach((to, from) => {
  document.title = to.query.documentTitle || to.meta.title
  window.scrollTo(0, 0)
})
export default router
