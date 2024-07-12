<template>
  <div class="ps-5">
    <h1 class="mb-4">User Profile</h1>
    <div v-if="user">
      <div class="py-4">
        <img :src="user.photoURL || '/profilePlace.png'" alt="User Profile Image" class="img-fluid rounded-circle" style="width: 75px; height: 75px;">
        <input type="file" @change="handleFileChange" class="px-4" accept="image/*">
      </div>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Last Sign In:</strong> {{ new Date(user.last_sign_in_at).toLocaleString() }}</p>
    </div>
    <LogoutButton />
  </div>
</template>

<script setup>

definePageMeta({
  name: 'userProfile',
  middleware: 'auth',
  layout: 'dashboard'
})

const authStore = useAuthStore()
const { signOut } = useCustomAuth()
const user = computed(() => authStore.getUser)


const handleSignOut = async () => {
  try {
    await signOut()
    navigateTo({ name: 'login' })
  } catch (error) {
    console.error('Sign out failed:', error)
  }
}
</script>