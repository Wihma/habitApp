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
    loginRequest: (state) => {
      // make a login attempt and log
      // show spinner
      state.pending = true;
    },
    loginSuccess: (state) => {
      state.pending = false;
      state.user.isLoggedIn = true;
    },
    setCurrentuserId: (state, userId) => {
      if(localStorage.getItem('userId') !== null && localStorage.getItem('userId') !== '' && localStorage.getItem('userId').length > 5) {
        state.user.userId = localStorage.getItem('userId');
      } else {
        state.user.userId = userId;
      }
    },
    jwtActive: (state) => {
      state.user.isLoggedIn = true;
    }
  },
  actions: {
    login ({ dispatch, commit }, { email, password }) {
      commit('loginRequest')
      return new Promise((resolve, reject) => {
        userService.login(email, password)
          .then(
            (res) => {
              commit('loginSuccess');
              commit('setCurrentuserId', res.userId);
              localStorage.setItem('jwt', res.token);
              localStorage.setItem('userId', res.userId);

              resolve(res);
            },
            (err) => {
              reject(err);
            }
          )
          .catch(err => {
            console.log(err)
          })
      })
    },
    logout ({ commit }) {
      commit('logout')
      localStorage.removeItem('jwt')
      return true
    }
  }
}
