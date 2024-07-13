<template>
  <div class="px-5">
    <Table title="Users Management" />
  </div>
</template>

<script setup>
import Table from '~/components/Table.vue'

definePageMeta({
  name: 'userManagement',
  middleware: 'auth',
  layout: 'dashboard',
  role: 'admin'
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