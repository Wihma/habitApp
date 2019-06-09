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
    loginSuccess: (state, userId) => {
      state.pending = false;
      state.user.isLoggedIn = true;
      state.user.userId = userId
    },
    setCurrentuserId: (state) => {
      state.user.userId = localStorage.getItem('userId');
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
              commit('loginSuccess', res.userId);
              localStorage.setItem('jwt', res.token)

              console.log({ text:'successful login', res:res });
              resolve(res);
            },
            (err) => {
              console.log({ text:'failed to log in', err:err });
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
