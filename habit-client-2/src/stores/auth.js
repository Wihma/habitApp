export const auth = {
  state: {
    user: {
      isLoggedIn: false
    }
  },
  getters: {
    isLoggedIn: (state) => {
      return state.user.isLoggedIn
    }
  },
  mutations: {
    logout: (state) => {
      state.user.isLoggedIn = false
    },
    login: (state) => {
      state.user.isLoggedIn = true
    }
  },
  actions: {
    login ({ commit }) {
      commit('login')
    },
    logout ({ commit }) {

      commit('logout')
    }
  }
}
