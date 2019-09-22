import Vue from 'vue'
import Vuex from 'vuex'
import login from './login-store'
import userInfo from './userInfo-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    userInfo
  },
  state: {
    name: 'index'
  },
  mutations: {},
  actions: {},
  getters: {}
})
