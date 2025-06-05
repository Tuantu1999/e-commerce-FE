<script lang="ts">
import { rules } from "@/plugins/rules";
</script>
<template>
  <v-card class="mx-auto mt-14 text-center pa-6" width="600" elevation="10">
    <v-avatar class="my-8" color="primary" size="x-large">
      <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
    </v-avatar>
    <v-card-title class="text-center"> Welcome to E-Commerce! </v-card-title>
    <v-card-subtitle class="mb-14"> Sign in to continue </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="3">User Name*</v-col>
      <v-col cols="9">
        <v-text-field
          label="username"
          class="rounded-lg"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
