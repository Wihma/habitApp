<template>
  <div class="habit-list">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card v-for="habit in habits" :key="habit.key">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                >
                </v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ habit.name}}</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn @click="goToHabit(habit.key)" dark color="purple">Edit</v-btn>
                  <v-btn dark color="teal accent-3">Statistics</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="habit.show = !habit.show">
                    <v-icon>{{ habit.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text v-show="habit.show">
                    {{ habit.description }}
                  </v-card-text>
                </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
 export default {
   components: {

   },
   data: () => ({
     // habits data stubs
     habits: [
       {
         key: 0,
         name: 'Push-ups',
         description: 'Do one pushup per day!',
         active: 1,
         show:false
       },
       {
         key: 1,
         name: 'Lunch boxes',
         description: 'Prepare a lunchbox for work every evening!',
         active: 1,
         show:false
       }
     ]
   }),
   methods: {
     goToHabit(key) {
       this.$router.push('habit', { key: key });
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
