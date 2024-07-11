<template>
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">
              <h5 class="m-0 py-2">Forgot Password</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleForgotPassword">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="email" type="email" class="form-control" id="email" required>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary" :disabled="isLoading">
                    {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
                  </button>
                </div>
              </form>
              <div v-if="message" class="alert" :class="{'alert-success': !error, 'alert-danger': error}" role="alert" mt-3>
                {{ message }}
              </div>
            </div>
            <div class="card-footer text-center mt-3">
                <NuxtLink :to="{ name: 'login' }">Back to Login</NuxtLink>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCustomAuth } from '~/composables/useCustomAuth'
  
  definePageMeta({
    name: 'forgot-password'
  })
  
  const { forgotPassword } = useCustomAuth()
  
  const email = ref('')
  const isLoading = ref(false)
  const message = ref('')
  const error = ref(false)
  
  const handleForgotPassword = async () => {
    isLoading.value = true
    message.value = ''
    error.value = false
  
    try {
      await forgotPassword(email.value)
      message.value = 'Password reset link sent to your email. Please check your inbox.'
    } catch (err) {
      error.value = true
      message.value = err.message || 'An error occurred. Please try again.'
    } finally {
      isLoading.value = false
    }
  }
  </script>