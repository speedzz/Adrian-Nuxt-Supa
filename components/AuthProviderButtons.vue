<template>
  <div>
    <button @click="() => signInWithProvider('github')" class="btn btn-dark mb-2 w-100">Sign in with GitHub</button>
    <button @click="() => signInWithProvider('google')" class="btn btn-primary w-100">Sign in with Google</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const supabase = useSupabaseClient()
const router = useRouter()

const signInWithProvider = async (provider) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/confirm`
      }
    })
    
    if (error) throw error
    
    // The user will be redirected to the provider's login page
  } catch (error) {
    console.error(`Failed to sign in with ${provider}:`, error.message)
    // Here you might want to show an error message to the user
  }
}
</script>