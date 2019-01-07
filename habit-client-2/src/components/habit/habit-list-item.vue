<template>
  <v-card>
      <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      >
      </v-img> -->

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
</template>

<script>

export default {
  props: {
    habit: {
      type: Object
    }
  },
  data: () => ({

  }),
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>
