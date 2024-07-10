<template>
  <div :class="['sidebar', { 'sidebar-open': layoutStore.sidebarOpen }]" class="flex-column flex-shrink-0 border-end">
    <div class="mb-5">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <span class="fs-4">Logo</span>
    </a>
    </div>
    
    <ul class="nav nav-pills flex-column mb-auto">
      <template v-for="item in menuItems" :key="item.name">
        <li v-if="item.header" class="nav-header">{{ item.header }}</li>
        <li v-else-if="item.divider" class="nav-divider"><hr></li>
        <li v-else class="nav-item">
          <div v-if="item.children" @click="toggleDropdown(item)" class="nav-link d-flex justify-content-between align-items-center" :class="{ 'active': isActiveRoute(item) }">
            <div>
              <i :class="item.icon"></i>
              {{ item.name }}
            </div>
            <i class="fas" :class="{'fa-chevron-down': !item.isOpen, 'fa-chevron-up': item.isOpen}"></i>
          </div>
          <NuxtLink v-else :to="item.to" class="nav-link" :class="{ 'active': isActiveRoute(item) }">
            <i :class="item.icon"></i>
            {{ item.name }}
          </NuxtLink>
          <ul v-if="item.children && item.isOpen" class="nav flex-column ms-3">
            <li v-for="child in item.children" :key="child.name" class="nav-item">
              <NuxtLink :to="child.to" class="nav-link" :class="{ 'active': isActiveRoute(child) }">
                <i :class="child.icon"></i>
                {{ child.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
const route = useRoute()

const menuItems = ref([
  { header: 'Main Menu' },
  { name: 'Dashboard', to: { name: 'dashboard' }, icon: 'fas fa-home me-2' },
  { name: 'Profile', to: { name: 'profile' }, icon: 'fas fa-user me-2' },
  { divider: true },
  { header: 'Settings' },
  {
    name: 'Settings',
    icon: 'fas fa-cog me-2',
    children: [
      { name: 'Properties', to: { name: 'properties' }, icon: 'fas fa-sign-out-alt me-2' }
    ]
  }
])

const isActiveRoute = (item) => {
  if (item.children) {
    const isActive = item.children.some(child => route.name === child.to.name)
    if (isActive) {
      item.isOpen = true
    }
    return isActive
  }
  return route.name === item.to.name
}

const toggleDropdown = (item) => {
  if (item.children) {
    item.isOpen = !item.isOpen
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  z-index: 1000;
}

.sidebar-open {
  width: 280px;
}

.nav-link {
  white-space: nowrap;
  cursor: pointer;
}

.nav-header {
  font-weight: bold;
  padding: 0.5rem 1rem;
}

.nav-divider {
  margin: 0.5rem 0;
}
</style>