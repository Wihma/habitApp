<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <!-- <v-card class="elevation-12">
            <v-toolbar dark color="green">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-actions>
              <v-btn block dark color="orange" @click="loginGoogle">
                  Google
              </v-btn>
              <v-btn block dark color="blue" @click="loginFacebook">
                  Facebook
              </v-btn>
            </v-card-actions>
          </v-card> -->
          <v-card class="elevation-12">
            <v-toolbar dark color="green">
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <!-- <v-text-field
                  v-model="username"
                  :counter="10"
                  :rules="usernameRules"
                  required

                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
                ></v-text-field> -->
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
                <v-text-field
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  required

                  id="confirmPassword"
                  prepend-icon="lock"
                  name="comfirmPassword"
                  label="Password Confirmation"
                  type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-if="!submitted"
                dark color="green"
                @click="registerUser">
                Register
              </v-btn>

              <!-- <v-btn
                :disabled="!valid"
                color="success"
                @click="validate"
              >
                Validate
              </v-btn>

              <v-btn
                color="error"
                @click="reset"
              >
                Reset Form
              </v-btn>

              <v-btn
                color="warning"
                @click="resetValidation"
              >
                Reset Validation
              </v-btn> -->
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
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 12) || 'Username must be fewer than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters'
    ],
    confirmPassword: '',
    confirmPasswordRules: [
      v => !!v || 'Confirm password is required'
    ]
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate() && (this.password === this.confirmPassword)) {
        console.log('validation successful')
        return true
      }
      return false
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    loginGoogle () {
      console.log('test login google')
      // const response = AuthService.signInGoogle()
    },
    loginFacebook () {
      console.log('test login Facebook')
    },
    registerUser () {
      if (this.validate()) {
        console.log('test registration')

        console.log({
          'Username': this.username,
          'Email': this.email,
          'password': this.password
        })

        // this.submitted = true
        const { username, email, password } = this
        const { dispatch } = this.$store
        dispatch('authentication/register', { username, email, password })
      }
    }
  }
}
</script>
