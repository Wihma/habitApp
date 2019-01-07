<template>
  <v-Content>
    <user-registration></user-registration>
    <login></login>
  </v-Content>
</template>

<script>

import UserRegistration from '../components/User/Registration'
import Login from '../components/User/Login'

export default {
  components: {
    'user-registration': UserRegistration,
    'login': Login
  }
}
</script>
