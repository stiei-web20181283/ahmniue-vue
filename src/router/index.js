import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
// import Layout from '../views/layout/Layout'

const componentContext = require.context('./modules', false, /.js$/)
const modules = componentContext.keys().reduce((result, fileName) => {
  result = [ ...result, ...componentContext(fileName).default ]
  return result
}, {})
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: '/ahmniue',
  routes: [
    ...modules
  ],
  scrollBehavior: () => ({ y: 0 })
})
router.afterEach((to, from) => {
  document.title = to.query.documentTitle || to.meta.title
  window.scrollTo(0, 0)
})
export default router
