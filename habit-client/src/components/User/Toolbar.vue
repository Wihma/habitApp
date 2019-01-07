<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <v-btn
         slot="activator"
         color="primary"
         dark>
         Menu
       </v-btn>
       <v-list>
         <v-list-tile
           v-for="(item, index) in items"
           :key="index"
           @click="routerRedirect(item.routerName)"
          >
           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
         </v-list-tile>
       </v-list>
     </v-menu>

        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x

      >
        <v-btn
          slot="activator"
          color="indigo"
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
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>settings</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable messages</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable hints</v-list-tile-title>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>


        <v-btn v-if="!status.isLoggedIn">
          skapa ett konto
        </v-btn>
    </v-toolbar>
      <div class="text-xs-center">

      </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    appTitle: 'HabitApp',
    status: {
      isLoggedIn: true
    },
    fav: true,
    menu: false,
    message: false,
    hints: true,
    items: [
      {
        title: 'About',
        routerName:'about'
      },
      {
        title: 'Habit List',
        routerName:'habitlist'
      },
      {
        title: 'Todays Habits',
        routerName:'todayshabits'
      },
      {
        title: 'Friends',
        routerName:'friends'
      }
    ]
  }),
  computed: {
    isLoggedIn() {
      console.log('test is loggedIn');
      return this.$store.state.authentication.status.loggedIn
    },
    user() {
      console.log('tes');
      console.log(this.$store.state.authentication.status)
      return this.$store.state.authentication.status.user
    }
  },
  methods: {
    testClick: () => {
      alert('test alert')
    },
    routerRedirect(routerName) {
      this.$router.push({ name: routerName})
    }
  },
  mounted() {

    // console.log(this.isLoggedIn)
    // console.log(this)
  }
}
</script>
