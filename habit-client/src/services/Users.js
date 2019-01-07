import Api from '@/services/Api'

export const userService = {
    login,
    logout,
    registerUser
    // getAll
};

function registerUser(parameters) {
  // return Api.post('user', )

  console.log({'service': 'authService', 'parameters': parameters });

  // Api.post('user', params)
  //   then()
  return Api().post('users', parameters);
}

function login(email, password) {
    // const requestOptions = {
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    return Api().post('users/login', {user:{ email, password }}, {headers: headers})
        .then(handleResponse)
        .then(user => {
          console.log('successful login');
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userjwt');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
  console.log('handle response');
  console.log(response);

  const data = response.data

  if(!(response.status === 200 && response.statusText === "OK")) {
    if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log('handleResponse error');
        logout();
        location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data.user;
}
