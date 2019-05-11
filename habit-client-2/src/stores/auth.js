import { userService } from '@/services/user'

export const auth = {
  state: {
    user: {
      isLoggedIn: false,
      userId: ''
    }
  },
  getters: {
    isLoggedIn: (state) => {
      return state.user.isLoggedIn
    },
    currentUserId: (state) => {
      return state.user.userId
    }
  },
  mutations: {
    logout: (state) => {
      state.user.isLoggedIn = false
    },
    loginRequest: (state, userId) => {
      // make a login attempt and log
      state.user.isLoggedIn = true;
      state.user.userId = userId
    },
    loginSuccess: (state) => {

    },
    setCurrentuserId: (state) => {
      state.user.userId = localStorage.getItem('userId');
    },
    jwtActive: (state) => {
      state.user.isLoggedIn = true;
    }
  },
  actions: {
    login ({ dispatch, commit }, {email, password}) {

      userService.login(email, password)
        .then((res) => {
          console.log({res:res})

          commit('loginRequest', res.userId);
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('userId', res.userId);

          dispatch('getAllHabitsForUser')
          return res;
        })
    },
    logout ({ commit }) {
      commit('logout')
      localStorage.removeItem('jwt');
      return new Promise((resolve, reject) => {
        resolve('OK')
      });
    }
  }
}
