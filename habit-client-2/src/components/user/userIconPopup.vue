<template>
  <!-- <h1>Just testig</h1> -->
  <v-menu
  v-if="isLoggedIn"
  :close-on-content-click="false"
  :nudge-width="200"
  offset-x
  offset-y
  :openOnClick="openOnClick"
  value
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
            <router-link to="/user/profile" tag="button">
              <v-btn
                fab
                dark
                icon
                small
                color="green"
              >
              <v-icon medium >person</v-icon>
            </v-btn>
            </router-link>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title> {{username}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <router-link to="/user/settings" tag="button">
              <v-btn icon>
                <v-icon>settings</v-icon>
              </v-btn>
            </router-link>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- <v-btn flat @click="closeUserIconMenu()">Cancel</v-btn> -->
        <v-btn color="primary" flat @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    username: String
  },
  data: () => ({
    // menu: true
    openOnClick: true
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
    // closeUserIconMenu () {
    //   console.log('closing menu')
    //   this.$store.dispatch('userIconMenuVisibilityFalse')
    // }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
    // menu () {
    //   return this.$store.getters.userIconMenuVisibility
    // }
  }
}
</script>

<style>

</style>
