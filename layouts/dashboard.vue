<template>
    <div class="d-flex flex-row min-vh-100">
      <AppSidebar />
      <div class="d-flex flex-column flex-grow-1">
        <AppHeader />
        <main class="flex-grow-1 p-3">
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
  </template>
  
  <script setup>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'
  import AppSidebar from '~/components/AppSidebar.vue'
  </script>