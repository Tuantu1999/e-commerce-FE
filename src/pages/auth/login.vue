<script lang="ts">
// import { rules } from "@/plugins/rules";
</script>
<template>
  <v-card class="mx-auto mt-14 text-center pa-6" width="600" elevation="10">
    <v-avatar class="my-8" color="primary" size="x-large">
      <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
    </v-avatar>
    <v-card-title class="text-center"> Welcome to E-Commerce! </v-card-title>
    <v-card-subtitle class="mb-14"> Sign in to continue </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="2" class="mt-2">User Name*</v-col>
      <v-col cols="1"></v-col>
      <v-col cols="9">
        <v-text-field
          label="username"
          class="rounded-lg"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="2" class="mt-2">Password*</v-col>
      <v-col cols="1"></v-col>
      <v-col cols="9">
        <v-text-field
          label="password"
          class="rounded-lg"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="flex justify-end">
      <div class="font-12" style="color: #5865f2">
        <span>Forgot password?</span> |
        <span>Create Account?</span>
      </div>
    </v-row>
    <v-row no-gutters class="flex justify-end">
      <v-checkbox label="Remember Password!"></v-checkbox>
    </v-row>
    <v-row no-gutters class="flex justify-center mb-5">
      <v-btn color="#5865f2" rounded="lg" elevated>Login</v-btn>
    </v-row>
    <v-divider class="mx-auto" style="width: 70%"></v-divider>
    <v-row no-gutters class="flex justify-center mt-5">
      <v-col cols="12">Or</v-col>
      <v-col class="social-login" cols="12">
        <v-col cols="6"
          ><v-icon color="blue" size="x-large" icon="mdi-facebook"></v-icon
        ></v-col>
        <v-col cols="6"
          ><v-icon color="red" size="x-large" icon="mdi-gmail"></v-icon
        ></v-col>
      </v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss">
.social-login {
  display: flex;
}
</style>
