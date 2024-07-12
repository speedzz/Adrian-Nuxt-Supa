<template>
  <div :class="['sidebar', { 'sidebar-open': layoutStore.sidebarOpen }]" class="flex-column flex-shrink-0 border-end">
    <div class="mb-5">
      <NuxtLink :to="{ name: 'dashboard' }" class="d-flex justify-content-center align-items-center text-decoration-none mt-3">
        <h2>Logo</h2>
      </NuxtLink>
    </div>
    
    <ul class="nav nav-pills flex-column">
      <template v-for="item in menuItemsStore.menu" :key="item.name">
        <li v-if="item.header" class="nav-header">{{ item.header }}</li>
        <li v-else-if="item.divider" class="nav-divider">
          <hr class="mx-3">
        </li>
        <li v-else class="nav-item">
          <div v-if="item.children" @click="toggleDropdown(item)" class="nav-link d-flex justify-content-between align-items-center" :class="{ 'active': isActiveRoute(item) }">
            <div>
              <i :class="item.icon"></i>
              {{ item.name }}
            </div>
            <i class="fas" :class="{'fa-chevron-down': !item.isOpen, 'fa-chevron-up': item.isOpen}"></i>
          </div>
          <NuxtLink v-else :to="getRouteOrFallback(item.to)" class="nav-link" :class="{ 'active': isActiveRoute(item) }">
            <i :class="item.icon"></i>
            {{ item.name }}
          </NuxtLink>
          <ul v-if="item.children && item.isOpen" class="nav flex-column">
            <li v-for="child in item.children" :key="child.name" class="nav-item">
              <NuxtLink :to="getRouteOrFallback(child.to)" class="nav-link" :class="{ 'active': isActiveRoute(child) }">
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

const layoutStore = useLayoutStore()
const route = useRoute()
const router = useRouter()
const menuItemsStore = useMenuItemsStore()

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

const getRouteOrFallback = (to) => {
  if (typeof to === 'string') {
    return to
  }
  
  if (to && to.name) {
    const routeExists = router.hasRoute(to.name)
    if (routeExists) {
      return to
    } else {
      // If the route doesn't exist, use a hash-based fallback
      return { path: '#' + to.name }
    }
  }
  
  // Default fallback if 'to' is not properly defined
  return '#'
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