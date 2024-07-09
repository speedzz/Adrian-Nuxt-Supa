<template>
    <div>
      <h1 class="mb-4">Properties</h1>
      
      <!-- Add your dashboard content here -->
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    name: 'properties',
    middleware: 'auth',
    layout: 'dashboard'
  })
  
  const user = useSupabaseUser()
  </script>