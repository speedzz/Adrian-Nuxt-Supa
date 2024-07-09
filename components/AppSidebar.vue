<template>
  <div :class="{ 'd-none': !layoutStore.sidebarOpen, 'd-flex': layoutStore.sidebarOpen }" class="flex-column flex-shrink-0 px-2 border-end" :style="{ width: '280px' }">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" :class="{ 'link-dark': layoutStore.theme === 'light', 'link-light': layoutStore.theme === 'dark' }">
      <span class="fs-4">Logo</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <NuxtLink to="/dashboard" class="nav-link" :class="{ 'active': $route.path === '/dashboard', 'link-dark': layoutStore.theme === 'light', 'link-light': layoutStore.theme === 'dark' }">
          <i class="fas fa-home me-2"></i>
          Dashboard
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile" class="nav-link" :class="{ 'active': $route.path === '/profile', 'link-dark': layoutStore.theme === 'light', 'link-light': layoutStore.theme === 'dark' }">
          <i class="fas fa-user me-2"></i>
          Profile
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useLayoutStore } from '~/stores/layout'
import { useRoute } from 'vue-router'

const layoutStore = useLayoutStore()
const route = useRoute()
</script>