<template>
  <div>
    <h1>Confirming your account...</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="confirmed">Your email has been confirmed! Redirecting to dashboard...</p>
  </div>
</template>

<script setup>
const { user, isEmailConfirmed, fetchUser, error: authError } = useCustomAuth()
const router = useRouter()
const error = ref(null)
const confirmed = ref(false)

onMounted(async () => {
  await fetchUser()
  
  if (isEmailConfirmed.value) {
    confirmed.value = true
    setTimeout(() => router.push('/dashboard'), 2000)
  } else {
    const hash = window.location.hash
    if (hash && hash.includes('access_token')) {
      // Wait for Supabase to process the token
      setTimeout(async () => {
        await fetchUser()
        if (isEmailConfirmed.value) {
          confirmed.value = true
          setTimeout(() => router.push('/dashboard'), 2000)
        } else {
          error.value = "Email confirmation failed. Please try again."
        }
      }, 1000)
    } else if (user.value) {
      router.push('/dashboard')
    } else {
      error.value = "Authentication failed. Please try logging in again."
    }
  }
})

watch(() => authError.value, (newError) => {
  if (newError) error.value = newError
})
</script>