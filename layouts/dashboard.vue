<template>
    <div class="d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="flex-grow-1 d-flex">
        <AppSidebar />
        <main class="flex-grow-1 p-3">
          <slot />
        </main>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'
  import AppSidebar from '~/components/AppSidebar.vue'
  </script>