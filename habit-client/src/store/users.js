import { userService } from '../services';
import { authService } from '../services';

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
