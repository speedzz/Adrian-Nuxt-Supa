<template>
    <header class="navbar">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Dashboard</NuxtLink>
        <LogoutButton />
      </div>
    </header>
  </template>
  
  <script setup>
  import { useAuthStore } from '~/stores/auth'
  const authStore = useAuthStore()
  </script>