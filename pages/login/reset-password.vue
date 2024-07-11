<template>
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">
              <h5 class="m-0 py-2">Reset Password</h5>
            </div>
            <div class="card-body">
              <form v-if="!error" @submit.prevent="handleResetPassword">
                <div class="mb-3">
                  <label for="password" class="form-label">New Password</label>
                  <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm New Password</label>
                  <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" required>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary" :disabled="isLoading">
                    {{ isLoading ? 'Resetting...' : 'Reset Password' }}
                  </button>
                </div>
              </form>
              <div v-if="message" class="alert" :class="{'alert-success': !error, 'alert-danger': error}" role="alert" mt-3>
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const router = useRouter()

const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)
const message = ref('')
const error = ref(false)

definePageMeta({
  name: 'reset-password'
})

onMounted(async () => {
  try {
    await verifyResetSession()
  } catch (err) {
    error.value = true
    message.value = 'Invalid or expired reset link. Please request a new password reset.'
  }
})

const handleResetPassword = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = true
    message.value = 'Passwords do not match'
    return
  }

  isLoading.value = true
  message.value = ''
  error.value = false

  try {
    await resetPassword(password.value)
    message.value = 'Password reset successfully. Redirecting to login...'
    setTimeout(() => router.push({ name: 'login' }), 3000)
  } catch (err) {
    error.value = true
    message.value = err.message || 'An error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}
  </script>