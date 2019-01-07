<template>
  <v-toolbar app dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Habit</span>
      <!-- <span> - </span> -->
      <span class="font-weight-light">helper</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="!isLoggedIn" @click="login" class="dark blue">
      <span>Login</span>
    </v-btn>
    <v-btn v-if="isLoggedIn" @click="logout" class="dark blue">
      <span>Logout</span>
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {
  data: () => ({

  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  mounted() {

  }
}
</script>
