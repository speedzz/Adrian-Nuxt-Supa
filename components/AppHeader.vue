<template>
  <div class="py-1 border-bottom ">  
    <header class="navbar">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <button :class="['btn', `btn-outline-${layoutStore.theme === 'light' ? 'dark' : 'light'}`]" @click="layoutStore.toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <div class="d-flex align-items-center">
          <button :class="['btn', `btn-outline-${layoutStore.theme === 'light' ? 'dark' : 'light'}`, 'me-3']" @click="layoutStore.toggleTheme">
            <i :class="layoutStore.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'"></i>
          </button>
          <div class="dropdown me-3">
            <button :class="['btn', `btn-outline-${layoutStore.theme === 'light' ? 'dark' : 'light'}`]" type="button" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-bell"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
              <li><a class="dropdown-item" href="#">Notification 1</a></li>
              <li><a class="dropdown-item" href="#">Notification 2</a></li>
              <li><a class="dropdown-item" href="#">Notification 3</a></li>
            </ul>
          </div>
          <a href="/settings" :class="['btn', `btn-outline-${layoutStore.theme === 'light' ? 'dark' : 'light'}`]"><i class="fas fa-cog"></i></a>
          <div class="dropdown ms-2">
            <img 
              :src="authStore.user?.profileImage || 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'" 
              alt="Profile Image" 
              class="rounded-circle" 
              width="40" 
              height="40"
              role="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a class="dropdown-item" href="/profile">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" @click.prevent="handleSignOut">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
import { useLayoutStore } from '~/stores/layout'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const layoutStore = useLayoutStore()

onMounted(() => {
  layoutStore.initTheme()
})

const handleSignOut = async () => {
  // Implement sign out logic here
}
</script>

<style scoped>

</style>