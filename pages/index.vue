<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-12 text-center">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the home page of your dashboard application.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <NuxtLink v-if="!user" :to="{ name: 'login' }" class="btn btn-primary mx-1">Login</NuxtLink>
        <NuxtLink v-if="user" :to="{ name: 'dashboard' }" class="btn btn-primary mx-1">Go to Dashboard</NuxtLink>
        <logoutButton v-if="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
const user = computed(() => useAuthStore().user)

onMounted(async () => {
  // ...
})
</script>

<style scoped>
.vh-100 {
  height: 100vh;
}
</style>