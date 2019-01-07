<template>
  <v-app>
    <toolbar></toolbar>
    <span>I can seee</span>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import toolbar from '@/components/layout/toolbar'
export default {
  name: 'App',
  components: {
    'toolbar': toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
