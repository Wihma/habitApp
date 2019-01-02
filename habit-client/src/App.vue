<template>
  <v-app>

    <v-toolbar >
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-if="status.isLoggedIn" icon>
          <v-icon>person</v-icon>
        </v-btn>
        <v-btn v-if="!status.isLoggedIn">
          skapa ett konto
        </v-btn>
    </v-toolbar>

    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'RootComponent',
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
