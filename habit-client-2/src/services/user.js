import Api from '@/services/Api'


export const userService = {
  login(email, password) {
    // console.log({email: email, password: password})
    return Api().post('user/login', {email: email, password: password})
      .then(handleResponse, handleResponse)

      .catch((err) => {
        console.log({'status': 'error', 'err':err})
        // return {status: 401, message: 'login failed'}
        return Promise.reject(err);
      });
  }
}

function handleResponse(res) {
  console.log({res:res});
  let data;
  let response;
  if(!!res.status) {
    data = res.data
    response = res
  } else {
    data = res.response.data
    response = res.response
  }
  console.log({message: 'handle response', response: response})
  if(!(response.status === 200 && response.statusText === "OK")) {
    if (response.status === 401) {
        // auto logout if 401 response returned from api

        // logout();
        //console.log({message: 'auth failed', location: location});
        //        location.reload(true);
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return Promise.resolve(data);
}
