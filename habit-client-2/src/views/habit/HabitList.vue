<template>
  <div class="habit-list">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-toolbar
              dense
              floating
            >
              <v-text-field
                hide-details
                single-line
              ></v-text-field>

              <v-btn icon >
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>
            <div v-for="habit in habits" :key="habit.key">
              <habit-list-item :habit="habit"></habit-list-item>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    <v-btn
      id="createHabitButton"
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

import HabitListItem from '@/components/habit/habit-list-item'

 export default {
   components: {
      'habit-list-item': HabitListItem
   },
   data: () => ({
     // habits data stubs
     habits: [
       {
         key: 0,
         name: 'Push-ups',
         description: 'Do one pushup per day!',
         active: 1,
         show:false,
         visible: true
       },
       {
         key: 1,
         name: 'Lunch boxes',
         description: 'Prepare a lunchbox for work every evening!',
         active: 1,
         show:false,
         visible: false
       },
       {
         key: 2,
         name: 'Meditate',
         description: 'Sit down, close your eyes and take one deep breath!',
         active: 1,
         show:false,
         visible: true
       }
     ]
   }),
   methods: {
     goToHabit() {
       this.$router.push('habit')
     }
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
