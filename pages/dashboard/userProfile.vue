<template>
  <div>
    <h1 class="mb-4">User Profile</h1>
    <div v-if="user">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>User ID:</strong> {{ user.id }}</p>
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