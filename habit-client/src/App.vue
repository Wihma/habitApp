<template>
  <v-app>
    <toolbar></toolbar>
    <router-view/>
  </v-app>
</template>

<script>
import Toolbar from '@/components/User/Toolbar'

export default {
  name: 'RootComponent',
  components: {
    'toolbar': Toolbar
  },
  data () {
    return {
      appTitle: 'HabitApp',
      status: {
        isLoggedIn: false
      }
    }
  }
}
</script>
