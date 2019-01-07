import Api from '@/services/Api'

export const authService = {
  signInLocal()){
    return Api().post('')
  },
  signInGoogle () {
    return Api().get('auth/google')
  }
}
