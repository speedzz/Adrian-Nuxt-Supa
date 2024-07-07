<template>
    <div>
      <h1 class="mb-4">Sign Up</h1>
      <form @submit.prevent="handleSignUp">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
      </form>
      <div class="mt-3">
        <p>Or sign up with:</p>
        <AuthProviderButtons />
      </div>
      <p class="mt-3">
        Already have an account? <NuxtLink to="/login">Login</NuxtLink>
      </p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'auth'
  })
  
  const email = ref('')
  const password = ref('')
  const { signUp } = useAuth()
  
  const handleSignUp = async () => {
    try {
      await signUp(email.value, password.value)
      // Show success message or redirect
    } catch (error) {
      // Handle error
      console.error('Signup failed:', error)
    }
  }
  </script>