<template>
  <v-card
    v-if="habit.visible"
    style="min-width: 480px; max-width: 600px">
      <v-card-title primary-title>
        <div>
          <div class="headline">
            {{ habit.name }}
            {{ habit.time }}
          </div>
        </div>
      </v-card-title>
      <v-card-text v-if="display.addUnit">
        <v-text-field
          v-model="amount"
          :rules="amountRules"
          name="unit"
          label="Amount"
          type="amunt"
          prefix="YourUnit">
        </v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="start" v-if="display.start" dark color="green">Start</v-btn>
        <v-btn @click="finish" v-if="display.finish" dark outline color="black">Finish</v-btn>
        <v-btn @click="complete" v-if="display.complete" dark outline color="black">Complete</v-btn>

      </v-card-actions>
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
    display: {
      start: true,
      finish: false,
      addUnit: false,
      complete: false
    },
    time: {
        start: '',
        stop: ''
    },
    amount: 0,
    amountRules: [
      (v) => !!v || 'Amount is required',
      (v) => /^[0-9]*$/.test(v) || 'Input must be a number'
    ]
  }),
  computed: {

  },
  methods: {
    start(id) {
      this.display.start = false;
      this.display.finish = true;
      this.time.start = new Date().getTime();
    },
    finish() {
      this.display.finish = false;

      if(this.habit.measureWUnit) {
        this.display.addUnit = true;
        this.display.complete = true;
      } else {
        this.complete();
      }

      this.time.stop = new Date().getTime();
      // alert((this.time.stop - this.time.start) / 1000)
    },
    complete() {
      // seems like you need to hide the text input for habit.visible to work
      // properly

      if(this.habit.measureWUnit && this.amount === 0) {
        alert('Amount cannot be 0');

        return null;
      } else {
        this.display.addUnit = false;
        this.habit.visible = false;

        this.$store.dispatch('saveTodayPerformed', {
          habitId: this.habit._id,
          dayPerformed: {
            time: this.time,
            amount: this.amount,
            comment: 'A test description'
          }
        }).then(
          () => {
            console.log('success?')
          }
        ).catch(
          (err) => console.error(err)
        );
      }
    },
    initialState() {
      this.display = {
        start: true,
        finish: false,
        addUnit: false,
        complete: false
      }
      this.time = {
          start: '',
          stop: ''
      }
      this.amount = 0

    }
  },
  beforeMounted() {
    this.displayFinish = !this.habit.measureTime;
  }
}
</script>
