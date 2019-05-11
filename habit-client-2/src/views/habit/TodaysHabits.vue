<template>
  <div class="habit-list">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <div v-for="habit in habits" :key="habit.key">
              <habit-list-item :habit="habit" ></habit-list-item>
              <v-divider class="mb-3"></v-divider>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    <v-btn
      id="createHabitButton"
      @click="newHabit"
      color="pink"
      dark
      absolute
      bottom
      right
      fab
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
 <script>

import HabitListItem from '@/components/habit/today-habit-list-item'

 export default {
   components: {
      'habit-list-item': HabitListItem
   },
   data: () => ({
     // habits data stubs
     search: {
       text: ''
     }
   }),
   computed: {
     habits() {
       // make sure all habits are visible when retrieved from the store
       let tempHabits = this.$store.getters.allUserHabits;
       if(tempHabits !== undefined) {
         tempHabits.forEach((habit) => {
           habit.visible = true;
           habit.show = false
         });

         return tempHabits
       } else {
         return [];
       }
       // let tempHabits = this.$store.getters.getAllHabitsForUser;
     }
   },
   methods: {
     newHabit() {
       // -1 equals new habit
       this.$router.push('habit/-1')
     }
   },
   watch: {

   },
   beforeUpdate(){
     console.log('todays habits updates')
   }
 }
 </script>

<style scoped>
#createHabitButton{
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
