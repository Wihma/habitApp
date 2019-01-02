import Api from '@/services/Api'

export default {
  registerUser() {
    return Api.post('user')
  },
  getUser() {
    return Api.get('user', params.id)
  }
}
