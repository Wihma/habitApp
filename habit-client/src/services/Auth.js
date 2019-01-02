import Api from '@/services/Api'

export default {
  signInGoogle () {
    return Api.get('auth/google')
  }
}
