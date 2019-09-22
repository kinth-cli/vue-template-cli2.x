export default {
  state: {
    loginState: false
  },
  mutations: {
    loginSuccess (state, data) {
      state.loginState = data
    }
  },
  actions: {
    loginSuccess (ctx, data) {
      ctx.commit('loginSuccess', data)
    }
  }
}
