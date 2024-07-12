<template>
    <div class="ps-5">
      <h1 class="mb-4">Dashboard</h1>
      <p>Welcome to your dashboard, {{ user?.email }}</p>
      <!-- Add your dashboard content here -->
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    name: 'dashboard',
    middleware: 'auth',
    layout: 'dashboard'
  })
  
  const user = useSupabaseUser()
  </script>