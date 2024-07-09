<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <h1 class="mb-4">Confirming your account...</h1>
            <div v-if="isLoading" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p v-if="error" class="alert alert-danger">{{ error }}</p>
            <p v-if="confirmed" class="alert alert-success">Your account has been confirmed! Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCustomAuth } from '~/composables/useCustomAuth'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const { verifySession, fetchUser } = useCustomAuth()
const router = useRouter()
const route = useRoute()

const error = ref(null)
const confirmed = ref(false)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const session = await verifySession()
    if (session) {
      await fetchUser()
      confirmed.value = true
      setTimeout(() => router.push('/dashboard'), 2000)
    } else {
      // Check for GitHub-specific error
      const errorDescription = route.query.error_description
      if (errorDescription) {
        error.value = `GitHub auth error: ${errorDescription}`
      } else {
        error.value = "Authentication failed. Please try logging in again."
      }
      console.error('Auth error:', route.query)
    }
  } catch (err) {
    console.error('Detailed error:', err)
    error.value = err.message || "An error occurred during confirmation."
  } finally {
    isLoading.value = false
  }
})
</script>