<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const { fetchUser } = useCustomAuth()
const layoutStore = useLayoutStore()

// Fetch user data 
onMounted(() => {
  fetchUser()
})
</script>