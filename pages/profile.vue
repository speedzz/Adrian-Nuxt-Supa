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
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({
  middleware: 'auth'
})

const { getUser, signOut } = useAuth()
const user = ref(null)

onMounted(async () => {
  try {
    user.value = await getUser()
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})

const handleSignOut = async () => {
  try {
    await signOut()
    navigateTo('/login')
  } catch (error) {
    console.error('Sign out failed:', error)
  }
}
</script>