<template>
  <div class="habit-list">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-toolbar
              dense
              floating
              flat
              style="background-color: #fafafa"
            >
              <v-text-field
                v-model.lazy="search.text"
                hide-details
                single-line
                autofocus
                solo
                style="width:300px"
              ></v-text-field>

              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>
            <div v-for="habit in habits" :key="habit.key">
              <habit-list-item :habit="habit" v-if="habit.visible"></habit-list-item>
              <v-divider v-if="habit.visible" class="mb-3"></v-divider>
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

import HabitListItem from '@/components/habit/habit-list-item'

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
       let tempHabits = this.$store.getters.allArchivedHabits;

       tempHabits.forEach((habit) => {
        habit.visible = true;
        habit.show = false
      });

       return tempHabits
     }
   },
   methods: {
     newHabit() {
       // -1 equals new habit
       this.$router.push('habit/-1')
     }
   },
   watch: {
     search: {
       handler: function(search, oldSearch){
         this.habits.forEach((habit) => {
           if(habit.name.toLowerCase().indexOf(search.text.toLowerCase()) > -1) {
             habit.visible = true
           } else {
             habit.visible = false
           }
         })
       },
       deep: true
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
