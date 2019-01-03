import { userService } from '../services';

const user = {
  _id: '',
  username: '',
}

export const users = {
    namespaced: true,
    state: {
        all:
    },
    actions: {
        registerUser({ dispatch, commit}) {
          userService.registerUser(parameters)
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}
