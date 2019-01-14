<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card
          style="min-width: 480px; max-width: 480px"
          class="elevation-12">
            <v-toolbar dark color="green">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  required

                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="text">
                </v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  required

                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-if="!submitted"
                dark color="green"
                @click="submitLogin">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// import AuthService from '@/services/Auth'
export default {
  data: () => ({
    valid: true,
    submitted: false,

    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters'
    ]
  }),
  methods: {
    submitLogin () {
      this.submitted = true;
      this.$store.dispatch('login', {email: this.email, password: this.password})
      .then(res => {
        console.log('component')
        console.log(res)
        // if(res !== 'OK') {
        //   this.submitted = false;
        // } else {
          this.$router.push('habitlist')
        // }
      }).catch(e => {
          console.log(e);
          this.submitted = false;
      });
    }
  },
  created() {
    const loggedIn = localStorage.getItem('userjwt');
    if(loggedIn !== null && loggedIn !== null && loggedIn.length > 10) {
      // this.$router.push('habitList');
    }
  }
}
</script>
