import { userService } from '@/services/user'

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
    loginRequest: (state) => {
      // make a login attempt and log
      state.user.isLoggedIn = true
    },
    loginSuccess: (state) => {

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

          commit('loginRequest')
          localStorage.setItem('jwt', res.token);

          return

          // return new Promise((resolve, reject) => {
          //   if(password.length > 6) {
          //     resolve('OK')
          //   } else {
          //     reject(new Error('Custom error'))
          //   }
          // });
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
