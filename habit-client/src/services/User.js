import Api from '@/services/Api'

export const userService = {
  registerUser(parameters) {
    // return Api.post('user', )

    console.log({'service': 'userService', 'parameters': parameters });

    // Api.post('user', params)
    //   then()
    return Api.post('user', parameters)
  },
  getUser(parameters) {
    return Api.get('user', parameters.id)
  }
}
