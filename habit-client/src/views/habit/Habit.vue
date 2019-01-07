<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex xs12 sm8 md4>
          <v-card
            class="mx-auto"
            style="max-width: 600px;"
          >
            <v-card-title
              class="display-1 font-weight-bold">
              Edit habit
            </v-card-title>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="habit.name"
                  required

                  name="name"
                  label="Name"
                  type="text"
                ></v-text-field>
                <v-textarea
                  v-model="habit.description"

                  name="description"
                  label="Description"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>

            <v-layout row wrap justify-center>
              <v-flex xs5>
                <v-checkbox
                  v-model="habit.public"
                  label="Public for my friends"
                  required
                ></v-checkbox>
              </v-flex>
              <v-flex xs5>
                <v-checkbox
                  v-model="habit.measurable"
                  label="Measurable"
                  required
                ></v-checkbox>
              </v-flex>
              <v-flex xs12 sm11>
                <v-text-field
                  v-if="habit.measurable"
                  v-model="habit.unit"
                  required

                  name="Unit"
                  label="Unit"
                  type="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-divider class="mb-3"></v-divider>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm11>
                <v-time-picker v-model="e7" format="24hr" landscape></v-time-picker>
              </v-flex>
            </v-layout>
            <v-divider class="mb-3"></v-divider>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm11>
                <v-select
                  :items="weekDays"
                  v-model="selectedWeekdays"
                  :menu-props="{ maxHeight: '400' }"
                  label="Select weekly schedule"
                  multiple
                  hint="Days to perform habit"
                  persistent-hint
                ></v-select>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark color="green"
                @click="saveHabit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
 <script>
 export default {
   components: {

   },
   data: () => ({
     // habits data stubs
     isNew: false,
     weekDays: [
       'Monday',
       'Tuesday',
       'Wednesday',
       'Thursday',
       'Friday',
       'Saturday',
       'Sunday'
     ],
     habit: {
         key: 0,
         name: 'Push-ups',
         description: 'Do one pushup per day!',
         active: 1,
         show: false,
         public: false,
         measurable: true,
         unit: 'kg'
       }
   }),
   methods: {
     saveHabit() {

     }
   }
 }
 </script>

<style scoped>

</style>
