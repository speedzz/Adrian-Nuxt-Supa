<template>
  <div>
    <a @click="handleSignOut" class="btn btn-danger">Logout</a>
  </div>
</template>

<script lang="ts" setup>
  const { getUser, signOut } = useAuth()
  const user = ref(null)

const handleSignOut = async () => {
  try {
    await signOut()
    navigateTo('/login')
  } catch (error) {
    console.error('Sign out failed:', error)
  }
}

</script>

<style>


</style>