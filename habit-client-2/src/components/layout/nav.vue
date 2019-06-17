<template>
  <v-navigation-drawer
        v-if="isLoggedIn"
        clipped
        permanent
        :mini-variant.sync="mini"
        v-model="drawer"
        hide-overlay
        stateless
        style="position: fixed; top: 64px"
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile>

              <v-list-tile-avatar>
                <!-- <img src="https://randomuser.me/api/portraits/men/85.jpg"> -->
                <v-icon
                  style="cursor: pointer"
                  >
                  menu
                </v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Menu</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  icon
                  @click.stop="mini = !mini"
                >
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
          >
            <v-list-tile-action>
              <v-btn
                flat
                icon
                :to="item.route"
              >
                <v-icon
                  style="cursor: pointer"
                >{{ item.icon }}
              </v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
</template>


<script>

//const router = require('@/routers/router');


export default {
  data () {
    return {
      drawer: true,
      items: [
        //{ title: 'Home', icon: 'dashboard', route: router.routes.find((route) => {return route.name === 'Home' }).path },
        { title: 'Habit List', icon: 'question_answer', route: '/habits' },
        { title: 'Todays Habits', icon: 'today', route: '/todayshabits' },
        { title: 'Templates', icon: 'folder', route: '/templates' },
        { title: 'User Settings', icon: 'settings', route: '/user/settings' },
        { title: 'Archived Habits', icon: 'archive', route: '/archivedhabits' }
      ],
      mini: true,
      right: null
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  mounted() {
    // check if current route is logged    
  }
}

</script>
