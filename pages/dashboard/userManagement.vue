<template>
  <div class="ps-5">
    <Table />
  </div>
</template>

<script setup>
import Table from '@/components/table.vue'

definePageMeta({
  name: 'userManagement',
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