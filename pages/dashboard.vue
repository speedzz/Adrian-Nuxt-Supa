<template>
    <div>
      <h1 class="mb-4">Dashboard</h1>
      <p>Welcome to your dashboard, {{ user?.email }}</p>
      <!-- Add your dashboard content here -->
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: 'auth'
  })
  
  const user = useSupabaseUser()
  </script>