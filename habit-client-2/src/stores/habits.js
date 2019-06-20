import { habitService } from '@/services/habit'
import Vue from 'vue'
// import Vuex from 'vuex'
// import { authService } from '@/services/Auth'
// import { router } from '@/routers/router'

export const habits = {
  state: {
    newHabit: {
      selectedWeekdays: [0, 1, 2, 3, 4, 5, 6],
      time: '12:00',
      active: true,
      measureWUnit: false,
      measureTime: true
    },
    habits: [
      // {
      //   id: 3,
      //   name: 'Push-ups',
      //   description: 'Do one pushup per day!',
      //   active: true,
      //   selectedWeekdays:[1, 2, 3, 4, 5, 6, 7],
      //   time: "12:00",
      //   measureTime: true,
      //   measureWUnit: true,
      //   measureUnit: 'St',
      //   todayPerformedId: 30
      // },
      // {
      //   id: 1,
      //   name: 'Lunch boxes',
      //   description: 'Prepare a lunchbox for work every evening!',
      //   active: false,
      //   selectedWeekdays:[1, 2, 3, 4, 5, 6, 7],
      //   time: "10:00",
      //   measureTime: true,
      //   measureWUnit: false,
      //   todayPerformedId: 10
      // },
      // {
      //   id: 2,
      //   name: 'Meditate',
      //   description: 'Sit down, close your eyes and take one deep breath!',
      //   active: true,
      //   selectedWeekdays:[1, 2, 3, 4, 5, 6, 7],
      //   time: "08:00",
      //   measureTime: true,
      //   measureWUnit: true,
      //   measureUnit: 'Min',
      //   todayPerformedId: 20
      // },
      // {
      //   id: 4,
      //   name: 'Call momma',
      //   description: 'Just call her',
      //   active: true,
      //   selectedWeekdays:[1, 2, 3, 4, 5, 6, 7],
      //   time: "15:00",
      //   measureTime: true,
      //   measureWUnit: true,
      //   measureUnit: 'St',
      //   todayPerformedId: 30
      // },
    ],
    habitsPerformed: [

    ]
  },
  getters: {
    // allHabits: (state) => {
    //
    //   return state.habits.filter(habit => habit.active === true)
    // },
    allUserHabits: (state) => {
      if (Object.keys(state.habits).length > 0) {
        return state.habits.filter(habit => habit.active === true)
      }
    },
    allArchivedHabits: (state) => {
      if (state.habits.lenght > 0) {
        return state.habits.filter(habit => habit.active === false)
      }
    },
    getHabitById: (state) => (_id) => {
      // id -1 equals new habit
      if (_id === '-1') {
        // here is a good place to set default values
        // return a clone of newHabit

        let newHabit = JSON.stringify(state.newHabit)
        return JSON.parse(newHabit)
      } else {
        return state.habits.find(habit => habit._id === _id)
      }
    },
    getHabitPerformedId: (state) => (id) => {
      return state.habitsPerformed.find(p => p.id === parseInt(id))
    },
    getHabitPerformedByHabitId: (state) => (id) => {
      return state.habitsPerformed.find(p => p.habitId === parseInt(id))
    },
    getTodaysHabits: (state) => {
      // returns all habits due today in chronologically

      // this code is a bit convoluted hence I will overcomment
      // get all habits with a schedule of todays Date
      // filter only active habit
      // check if habit already has been performed today by:
      //  get only date part of new date
      //  find habitperformed for current habit
      //  check if any habitperf with current date and include that habit in todays habit
      // finish by sort

      // debugger // eslint-disable-line

      let d = new Date()
      let n = d.getDay()

      let todaysHabits = state.habits
      if (todaysHabits.length < 1) {
        return
      }

      todaysHabits = todaysHabits.filter(
        habit => habit.selectedWeekdays.find(
          (weekday) => {
            return parseInt(weekday) === n
          }
        )
      )

      todaysHabits = todaysHabits.filter(habit => habit.active === true)

      // todaysHabits = todaysHabits.filter((habit) => {
      //     let today = new Date().setHours(0,0,0,0);
      //     let daysPerformed = habit.daysPerformed.sort(function(a, b){
      //       return a.time.start < b.time.start
      //     });
      //
      //     var latestDay = null;
      //     if(daysPerformed.lenght > 1 && daysPerformed !== undefined) {
      //       latestDay = daysPerformed[daysPerformed.lenght-1];
      //     } else {
      //       latestDay = daysPerformed[0];
      //     }
      //     if(Boolean(latestDay)){
      //       if(new Date(latestDay.time.start).setHours(0,0,0,0) === today) {
      //         return false
      //       } else {
      //         return true
      //       }
      //     } else {
      //       // if empty return true
      //       return true
      //     }
      // })
      todaysHabits.sort(function (a, b) {
        return a.time > b.time
      })
      return todaysHabits
    }
  },
  mutations: {
    getAllHabits: (state, habits) => {
      state.habits = habits
    },
    setAllHabitsForUser: (state, habits) => {
      state.habits = habits
    },
    saveHabit: (state, habit) => {
      // filter out the habit based on habit._id and replace the values that differ
      // save and ensure should be the same
      let habitIndex
      let allHabits = state.habits
      try {
        habitIndex = allHabits.findIndex(h => h._id === habit._id)
        if (habitIndex > -1) {
          allHabits.splice(habitIndex, 1)

          Vue.set(state, 'habits', habit)
          // allHabits.push(habit)
        }
      } catch {
        // state.habits.push(habit);
        Vue.set(state, 'habits', habit)
      }
    },
    saveTodayPerformed: (state, payload) => {
      let tmpHabitPerformed
      // payload = {habitid: id, todayPerformed: todayPerformed}
      // if error create new todayPerformed

      try {
        tmpHabitPerformed = state.habits.find(h => h._id === payload.habitId)
        tmpHabitPerformed.daysPerformed.push(payload.dayPerformed)
      } catch {
        // state.todayPerformed.push
        tmpHabitPerformed = {
          id: 0,
          habitId: payload.habitId,
          days: []
        }
        tmpHabitPerformed.days.push(payload.dayPerformed)
        state.habitsPerformed.push(tmpHabitPerformed)
      }
    },
    refreshTodaysHabits: (state) => {
      let tmpHabits = state.habits
      state.habits = null
      state.habits = tmpHabits
    },
    deleteHabit: (state, habitId) => {
      // find index of deleted habit and remove it
      console.log('delete habit')
      state.habits.splice(state.habits.findIndex((habit) => {
        return habit._id === habitId
      }), 1)
    }
  },
  actions: {
    // make request to api for permanent storage and then trigger mutations
    getAllHabits ({ dispatch, commit }) {
      return habitService.getAll()
        .then((habits) => {
          // console.log({message: 'in the store', habits: habits})
          commit('setAllHabits', habits)
        })
    },
    getAllHabitsForUser ({ dispatch, commit, rootState, rootGetters }) {
      return habitService.getAllHabitsForUser(rootGetters.currentUserId)
        .then((habits) => {
          commit('setAllHabitsForUser', habits)
        })
    },
    newHabit ({ dispatch, commit, rootState, rootGetters }, { habit }) {
      console.log({ userId: rootGetters.currentUserId, habit: habit })
      return habitService.new(rootGetters.currentUserId, habit)
        .then(
          commit('saveHabit', { habit: habit })
        )
    },
    updateHabit ({ dispatch, commit }, { habit }) {
      // console.log({location: 'habitStore', action: 'saveHabit'})
      // commit('saveHabit', habit);

      return habitService.update(habit)
        .then(
          commit('saveHabit', { habit: habit })
        )

      // return new Promise((resolve, reject) => {
      //   resolve('OK')
      // });
    },
    saveTodayPerformed ({ dispatch, commit }, { habitId, dayPerformed }) {
      return habitService.performed(habitId, dayPerformed)
        .then(
          commit('saveTodayPerformed', { habitId: habitId, dayPerformed: dayPerformed })
        )
    },
    deleteHabit ({ dispatch, commit }, { habitId }) {
      console.log('action delete habit')
      // commit('deleteHabit', {habitId: habitId})

      return habitService.delete(habitId)
        .then(
          commit('deleteHabit', { habitId: habitId })
        )
    }
  }
}
