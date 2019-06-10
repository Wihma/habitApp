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
                <v-alert
                  v-model="loginFailed.status"
                  type="error"
                  dismissible
                  >
                  {{loginFailed.text}}
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green"
                dark
                @click="login">
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
    loginFailed: {
      status: false,
      text: ''
    },
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 4) || 'Password must be more than 6 characters'
    ]
  }),
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    validateForm () {
      return this.$refs.form.validate()
    },
    login () {
      if (!this.validateForm()) {
        return
      }

      this.submitted = true
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(
        (res) => {
          this.$router.push('/habits')
        },
        (err) => {
          this.loginFailed.status = true
          this.loginFailed.text = 'Failed to login'
        }
      ).catch(() => {
        alert('rejected')
      })

    }
  },
  mounted() {
    var that = this;
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        console.log(that)
        that.validateForm();
      }
    });
  },
  created() {
    const loggedIn = localStorage.getItem('userjwt');
    if(loggedIn !== null && loggedIn !== null && loggedIn.length > 10) {
      // this.$router.push('habitList');
    }
  }
}
</script>
