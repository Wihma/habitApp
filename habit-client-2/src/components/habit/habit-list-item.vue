<template>
  <v-card
    style="min-width: 480px; max-width: 600px">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ habit.name }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn @click="goToHabit(habit._id)" dark color="purple">Edit</v-btn>
        <v-btn dark color="teal accent-3">Statistics</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">
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
    show: false
  }),
  computed: {

  },
  methods: {
    goToHabit(_id) {
      this.$router.push('habit/'+ _id)
    }
  },
  mounted() {

  }
}
</script>
