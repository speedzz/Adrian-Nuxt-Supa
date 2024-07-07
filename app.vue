<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useCustomAuth } from '~/composables/useCustomAuth'

const { fetchUser } = useCustomAuth()

// Fetch user data on app initialization
onMounted(fetchUser)
</script>