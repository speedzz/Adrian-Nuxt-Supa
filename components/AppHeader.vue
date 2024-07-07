<template>
    <header class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Dashboard</NuxtLink>
        <button v-if="authStore.isAuthenticated" @click="authStore.signOut" class="btn btn-outline-light">Logout</button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { useAuthStore } from '~/stores/auth'
  const authStore = useAuthStore()
  </script>