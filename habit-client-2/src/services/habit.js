import Api from '@/services/Api'

export const habitService = {
  getAll () {
    return Api().get('habit/all')
      .then(handleResponse)
      .then((habits) => {
        return habits
      })
  },
  getAllHabitsForUser (userId) {
    return Api().get('habit/getAllHabitsForUser', { params: { userId: userId } })
      .then(handleResponse)
      .then((habits) => {
        return habits
      })
  },
  performed (habitId, dayPerformed) {
    return Api().post('habit/habitPerformed', { habitId: habitId, dayPerformed: dayPerformed })
      .then(handleResponse)
      .then((response) => {

      })
  },
  new (userId, habit) {
    return Api().post('habit/new', { userId: userId, habit: habit })
      .then(handleResponse)
      .then((habit) => {
        return habit
      })
  },
  update (habit) {
    return Api().put('habit/update', { habit: habit })
      .then(handleResponse)
      .then((habit) => {
        return habit
      })
  },
  delete (habitId) {
    return Api().delete('habit/delete', { data: { id: habitId } })
      .then(handleResponse)
      .then((res) => {
        return null
      })
  }
}

function handleResponse (response) {
  const data = response.data
  if (!(response.status === 200 && response.statusText === 'OK')) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      // logout();
      location.reload(true)
    }
    const error = (data && data.message) || response.statusText
    return Promise.reject(error)
  }
  return data
}
