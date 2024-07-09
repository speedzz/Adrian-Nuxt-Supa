<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useCustomAuth } from '~/composables/useCustomAuth'
import { useLayoutStore } from '~/stores/layout'

const { fetchUser } = useCustomAuth()
const layoutStore = useLayoutStore()

// Fetch user data and initialize theme on app initialization
onMounted(() => {
  fetchUser()
  layoutStore.initTheme()
})
</script>