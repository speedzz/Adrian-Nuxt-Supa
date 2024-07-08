<template>
  <div class="py-1 border-bottom border-success">  
    <header class="navbar">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-light" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-light me-3" @click="toggleTheme">
            <i :class="theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'"></i>
          </button>
          <div class="dropdown me-3">
            <button class="btn btn-outline-light" type="button" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-bell"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
              <li><a class="dropdown-item" href="#">Notification 1</a></li>
              <li><a class="dropdown-item" href="#">Notification 2</a></li>
              <li><a class="dropdown-item" href="#">Notification 3</a></li>
            </ul>
          </div>
          <a href="/settings" class="btn btn-outline-light"><i class="fas fa-cog"></i></a>
          <img :src="authStore.user.profileImage || 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'" alt="Profile Image" class="rounded-circle ms-2" width="40" height="40">
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore()
</script>