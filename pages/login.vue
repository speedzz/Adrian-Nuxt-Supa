<template>
  <div>
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="handleEmailLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login with Email</button>
    </form>
    <div class="mt-3">
      <p>Or sign in with:</p>
      <button @click="() => signInWithProvider('github')" class="btn btn-dark mb-2 w-100">Sign in with GitHub</button>
      <button @click="() => signInWithProvider('google')" class="btn btn-primary w-100">Sign in with Google</button>
    </div>
    <p class="mt-3">
      Don't have an account? <NuxtLink to="/signup">Sign up</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCustomAuth } from '~/composables/useCustomAuth'

definePageMeta({
  layout: 'auth'
})

const email = ref('')
const password = ref('')
const router = useRouter()
const { signIn, signInWithProvider } = useCustomAuth()

const handleEmailLogin = async () => {
  try {
    await signIn(email.value, password.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error.message)
    // Here you might want to show an error message to the user
  }
}
</script>