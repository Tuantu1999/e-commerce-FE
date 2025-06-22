<script setup lang="ts">
// import { rules } from "@/plugins/rules";
</script>
<template>
  <div class="mx-auto mt-8 text-center">
    redeploy
    <v-card class="mx-4 pa-6" elevation="10" width="600">
      <v-avatar class="my-4" color="primary" size="x-large">
        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>
      <v-card-title class="text-center"> Welcome to E-Commerce! </v-card-title>
      <v-card-subtitle class="mb-8"> Sign in to continue </v-card-subtitle>
      <v-row no-gutters>
        <v-col class="mt-2" cols="2">User Name*</v-col>
        <v-col cols="1" />
        <v-col cols="9">
          <v-text-field
            class="rounded-lg"
            density="compact"
            label="username"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="mt-2" cols="2">Password*</v-col>
        <v-col cols="1" />
        <v-col cols="9">
          <v-text-field
            class="rounded-lg"
            density="compact"
            label="password"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row class="flex justify-end" no-gutters>
        <div class="font-12" style="color: #5865f2">
          <span>Forgot password?</span> |
          <span>Create Account?</span>
        </div>
      </v-row>
      <v-row class="flex justify-end" no-gutters>
        <v-checkbox label="Remember Password!" />
      </v-row>
      <v-row class="flex justify-center mb-5" no-gutters>
        <v-btn color="#5865f2" elevated rounded="lg">Login</v-btn>
      </v-row>
      <v-divider class="mx-auto" style="width: 70%" />
      <v-row class="flex justify-center mt-5" no-gutters>
        <v-col cols="12">Or</v-col>
        <v-col class="social-login" cols="12">
          <v-col cols="6"
            ><v-icon color="blue" icon="mdi-facebook" size="x-large"
          /></v-col>
          <v-col cols="6"
            ><v-icon color="red" icon="mdi-gmail" size="x-large"
          /></v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style lang="scss">
.social-login {
  display: flex;
}
</style>
