<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
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
          </v-card>
          <v-card class="elevation-12">
            <v-toolbar dark color="green">
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
                <v-text-field prepend-icon="email" name="email" label="Email" type="text"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                <v-text-field id="confirmPassword" prepend-icon="lock" name="comfirmPassword" label="Password Confirmation" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="green">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import AuthService from '@/services/Auth'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    loginGoogle () {
      console.log('test login google');
      debugger;
      const response = AuthService.signInGoogle();
      console.log({'res': response });
    },
    loginFacebook () {
      console.log('test login Facebook')
    },
    registerUser () {
      console.log('test registration')
    }
  }
}
</script>
