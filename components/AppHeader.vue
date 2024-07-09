<template>
  <div class="py-1 border-bottom ">  
    <header class="navbar">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <button class="btn btn-outline" @click="layoutStore.toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <div class="d-flex align-items-center">
          <ClientOnly>
            <button class="btn btn-outline me-3" @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'">
              <i :class="colorMode.preference === 'dark' ? 'fas fa-moon' : 'fas fa-sun'"></i>
            </button>
          </ClientOnly>
          <div class="dropdown me-3">
            <button class="btn btn-outline" type="button" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-bell"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
              <li><a class="dropdown-item" href="#">Notification 1</a></li>
              <li><a class="dropdown-item" href="#">Notification 2</a></li>
              <li><a class="dropdown-item" href="#">Notification 3</a></li>
            </ul>
          </div>
          <a href="/settings" class="btn btn-outline"><i class="fas fa-cog"></i></a>
          <div class="dropdown ms-2">
            <img 
              :src="authStore.user?.profileImage" 
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
const { signOut } = useCustomAuth()
const authStore = useAuthStore()
const layoutStore = useLayoutStore()
const colorMode = useColorMode()

onMounted(() => {
  
})

const handleSignOut = async () => {
  try {
    await signOut()
    navigateTo({ name: 'login' })
  } catch (error) {
    console.error('Sign out failed:', error)
  }
}
</script>

<style scoped>

</style>