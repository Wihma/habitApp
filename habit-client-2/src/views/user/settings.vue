<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card
          style="min-width: 480px; max-width: 480px"
          class="elevation-12">
            <v-toolbar dark color="green">
              <v-card-title>User Settings</v-card-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  name="NewPassword"
                  label="New Password"
                  type="password"
                >
                </v-text-field>
                <v-text-field
                  name="Change Password"
                  label="Confirm Password"
                  type="password"
                >
                </v-text-field>

              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>
                Save
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

export default {
  components: {
  }
}
</script>
