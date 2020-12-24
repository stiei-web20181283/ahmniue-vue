import { routers } from '@/router/index'

const state = {
  routes: routers
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}

const actions = {
  GenerateRoutes ({ commit }) {
    return new Promise(resolve => {
      const route = true
      commit('SET_ROUTERS', route)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
