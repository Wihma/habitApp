import Api from '@/services/Api'

export const userService = {
  login(email, password) {
    console.log({email: email, password: password})
    return Api().post('user/login', {email: email, password: password})
      .then(handleResponse)
      .then((res) => {
        console.log({message: 'successful login', res: res})

        return res
      })
      .catch((err) => {
        console.log({'status': 'error', 'err':err})
        return {status: 401, message: 'login failed'}
      });
  }
}


function handleResponse(response) {
  const data = response.data
  console.log({message: 'handle response', response: response})
  if(!(response.status === 200 && response.statusText === "OK")) {
    if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log('handleResponse error');
        console.log(response);

        // logout();
        location.reload(true);
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
}
