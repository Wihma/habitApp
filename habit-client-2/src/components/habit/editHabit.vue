<template>
  <div class="habit-edit">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
          <v-card
            class="mx-auto"
            style="min-width: 480px; max-width: 600px">
            <v-card-title
              v-if="isNewHabit"
              class="display-1 font-weight-bold">
              New Habit
            </v-card-title>
            <v-card-title
              v-if="!isNewHabit"
              class="display-1 font-weight-bold">
              Edit Habit
            </v-card-title>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="habit.name"
                  :rules="rules.name"

                  name="name"
                  label="Name"
                  type="text"
                ></v-text-field>
                <v-textarea
                  v-model="habit.description"
                  :rules="rules.description"

                  name="description"
                  label="Description"
                ></v-textarea>
                <v-layout row wrap justify-center>
                  <v-flex xs5>
                    <v-checkbox
                      v-model="habit.active"
                      label="Active"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs5>
                    <v-checkbox
                      v-model="habit.measureTime"
                      label="Measure Habit Time"
                      hint="Indicate if time should be measured when a habit is performed"
                      tooltip
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-text>

            <v-slide-y-transition>
              <v-card-text v-show="show">
                <v-layout row wrap justify-center>
                  <v-flex xs5>
                    <v-checkbox
                      v-model="habit.public"
                      label="Public for my friends"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs5>
                    <v-checkbox
                      v-model="habit.measureWUnit"
                      label="Measure Habit With a Unit"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm11>
                    <v-text-field
                      v-if="habit.measureWUnit"
                      v-model="habit.unit"
                      :rules="rules.name"
                      hint="Unit you want to measure your habit in"

                      name="Unit"
                      label="Unit"
                      type="text"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-divider class="mb-5"></v-divider>
                <v-layout>
                  <v-flex >
                    <v-time-picker v-model="habit.time" format="24hr"></v-time-picker>
                  </v-flex>
                </v-layout>
                <v-divider class="mb-3"></v-divider>
                <v-layout row wrap justify-center>
                  <v-flex xs12 sm11>
                    <v-select
                      v-model="habit.selectedWeekdays"
                      :items="weekDays"
                      name="weekDay"
                      label="Select weekly schedule"
                      :rules="rules.weekDays"

                      item-text="text"
                      item-value="value"

                      :menu-props="{ maxHeight: '400' }"

                      multiple
                      persistent-hint
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-slide-y-transition>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="deleteHabit"
                 >
                <v-icon

                  color="red"
                >delete</v-icon>
              </v-btn>
              <v-btn  @click="show = !show">
                <span v-if="!show">
                  More info
                </span>
                <span v-if="show">
                  Less info
                </span>
                <!-- <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon> -->
              </v-btn>
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
  </div>
</template>
<script>
export default {
  props: {
    habit: {
      type: Object
    }
  },
  components: {

  },
  data: () => ({
    // habits data stubs
    show: false,
    isNewHabit: false,
    valid: false,
    rules: {
      name: [
        v => !!v || 'Name is required'
      ],
      description: [
        v => !!v || 'Description is required'
      ]
    },
    isNew: false,
    weekDays: [
      {
        text: 'Sunday',
        value: 0
      },
      {
        text: 'Monday',
        value: 1
      },
      {
        text: 'Tuesday',
        value: 2
      },
      {
        text: 'Wednesday',
        value: 3
      },
      {
        text: 'Thursday',
        value: 4
      },
      {
        text: 'Friday',
        value: 5
      },
      {
        text: 'Saturday',
        value: 6
      }
    ]
  }),
  methods: {
    saveHabit () {
      if (this.isNewHabit) {
        this.$store.dispatch('newHabit', { habit: this.habit })
          .then((res) => {
            this.$router.push('/habits')
          })
      } else {
        this.$store.dispatch('updateHabit', { habit: this.habit })
          .then((res) => {
            this.$router.push('/habits')
          })
      }
    },
    deleteHabit () {
      // console.log('dispatching delete habit')
      if (confirm('Are you sure?')) {
        this.$store.dispatch('deleteHabit', { habitId: this.habit._id })
          .then(() => {
            this.$router.push('/habits')
          })
      }
    }
  },
  created () {
    // check if habit is new
    if (this.$route.params.id === '-1') {
      this.isNewHabit = true
    }
  }
}
</script>

<style scoped>

</style>
