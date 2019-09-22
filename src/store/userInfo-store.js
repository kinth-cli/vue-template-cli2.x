export default {
  state: {
    name: 'admin',
    userId: '123'
  },
  mutations: {
    setName (state, data) {
      state.name = data
    }
  },
  actions: {
    setName (ctx, data) {
      ctx.commit('setName', data)
    }
  }
}
