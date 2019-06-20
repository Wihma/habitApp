<template>
  <edit-habit :habit="habit"></edit-habit>
</template>
<script>

import EditHabit from '@/components/habit/editHabit'

export default {
  components: {
    'edit-habit': EditHabit
  },
  data: () => ({
    habit: ''
  }),
  methods: {

  },
  beforeMount () {
    console.log(this.$route.params.id)
    // console.log(this.$store.getters.getHabitById(this.$route.params.id));
    // console.log(this.$store.getters)
    this.habit = this.$store.getters.getHabitById(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
