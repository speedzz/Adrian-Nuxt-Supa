<template>
  <div class="ps-5">
    <h1 class="mb-4">User Profile</h1>
    <div v-if="user">
      <div class="py-4">
        <img :src="authStore.user?.profileImage || '/profilePlace.png'" alt="User Profile Image" class="img-fluid rounded-circle" style="width: 75px; height: 75px;">
        <input v-if="showFileInput" type="file" @change="handleFileChange" class="px-4" accept="image/*">
      </div>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Last Sign In:</strong> {{ new Date(user.last_sign_in_at).toLocaleString() }}</p>
      <p><strong>Login Type:</strong> {{ user?.provider || 'Unknown' }}</p>
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

const showFileInput = computed(() => {
  console.log('Auth Provider:', authStore.user?.provider)
  return authStore.user?.provider === 'email'
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