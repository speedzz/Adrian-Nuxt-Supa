<template>
  <div class="container">
    <h1 class="mb-4">Welcome to the Dashboard</h1>
    <p>This is the home page of your dashboard application.</p>
    <NuxtLink v-if="!user" to="/login" class="btn btn-primary">Login</NuxtLink>
    <NuxtLink v-else to="/dashboard" class="btn btn-primary">Go to Dashboard</NuxtLink>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
definePageMeta({
  layout: 'auth'
})
</script>