<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-12 text-center">
          <h1>Welcome to the Dashboard</h1>
          <p>This is the home page of your dashboard application.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center align-items-center">
          <NuxtLink v-if="!user" to="/login" class="btn btn-primary mx-1">Login</NuxtLink>
          <NuxtLink v-if="user" to="/dashboard" class="btn btn-primary mx-1">Go to Dashboard</NuxtLink>
          <LogoutButton v-if="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
definePageMeta({

})
</script>