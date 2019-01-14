import Api from '@/services/Api'

export const habitService = {
  getAll() {
    return Api().get('habit/all')
      .then(handleResponse)
      .then((habits) => {
        console.log({message: 'successfully retrieved habits', habits: habits})

        return habits
      });
  },
  performed(habitId, dayPerformed) {
    console.log({message: 'successfully entered habit services', params: {habitId: habitId, dayPerformed: dayPerformed}})
    return Api().post('habit/habitPerformed', {habitId: habitId, dayPerformed: dayPerformed})
      .then(handleResponse)
      .then((response) => {
        console.log({message: 'successfully retrieved habits', habits: response})
        return
      })
  },
  new (habit) {
    console.log(JSON.stringify(habit));
    return Api().post('habit/new', {habit: habit})
      .then(handleResponse)
      .then((habit) => {
        return habit
      })
  },
  update (habit) {
    return Api().put('habit/update', {habit: habit})
      .then(handleResponse)
      .then((habit) => {
        return habit
      })
  },
  delete(habitId) {
    console.log({message:"service delete", habith:habitId});
    return Api().delete('habit/delete', { data: {id: habitId}})
      .then(handleResponse)
      .then((res) => {
        console.log(res);
        return null
      })
  }
}


function handleResponse(response) {
  const data = response.data
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
