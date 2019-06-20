<template>
  <v-toolbar app dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>Vänliga</span>
      <span class="font-weight-light">Vanor</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="!isLoggedIn" @click="login" outline dark color="white">
      <span>Login</span>
    </v-btn>

    <v-menu
    v-if="isLoggedIn"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <v-btn

      slot="activator"
      color="grey lighten-1"
      dark
      icon
    >
     <v-icon>person</v-icon>
    </v-btn>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://www.facebook.com/photo.php?fbid=10155542058860917&set=a.468908170916&type=3&source=11&referrer_profile_id=709060916" alt="Marc">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Marc Wihlstrand</v-list-tile-title>
            <v-list-tile-sub-title>Founder of this HabitApp</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
            >
              <v-icon>settings</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" flat @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
  </v-toolbar>
</template>

<script>

export default {
  data: () => ({
    menu: false
  }),
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  mounted () {
    // check if current route is logged
  }
}
</script>
