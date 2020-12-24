// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'normalize.css/normalize.css'
import 'vant/lib/index.css'
import './assets/font/ahmniue-icon/iconfont.css'
import { Tabbar, TabbarItem, Icon, Search } from 'vant'

Vue.use(Tabbar) // 导航栏组件
Vue.use(TabbarItem)
Vue.use(Icon) // 图标组件
Vue.use(Search) // 搜索组件

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
