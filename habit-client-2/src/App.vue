<template>
  <v-app>
    <toolbar></toolbar>
    <navigation></navigation>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import toolbar from '@/components/layout/toolbar'
import navigation from '@/components/layout/nav'
export default {
  name: 'App',
  components: {
    'toolbar': toolbar,
    'navigation': navigation
  },
  data () {
    return {
      //
    }
  },
  beforeMount(){
    this.$store.dispatch('getAllHabits')
  }
}
</script>
