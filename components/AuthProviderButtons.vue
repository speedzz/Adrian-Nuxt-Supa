<template>
 <div class="mt-3">
  <p>Social login:</p>
  <div class="d-flex gap-2">
    <button @click="() => signInWithProvider('github')" class="btn btn-outline mb-2 w-100">
      <i class="fab fa-github"></i>
    </button>
    <button @click="() => signInWithProvider('google')" class="btn btn-outline mb-2 w-100">
      <i class="fab fa-google"></i>
    </button>
    <button @click="() => signInWithProvider('facebook')" class="btn btn-outline mb-2 w-100">
      <i class="fab fa-facebook-f"></i>
    </button>
    <button @click="() => signInWithProvider('apple')" class="btn btn-outline mb-2 w-100">
      <i class="fab fa-apple"></i>
    </button>
  </div>
</div>
</template>

<script setup>

const supabase = useSupabaseClient()

const signInWithProvider = async (provider) => {
  try {
    await useCustomAuth().signInWithProvider(provider)
    
    // The user will be redirected to the provider's login page
  } catch (error) {
    console.error(`Failed to sign in with ${provider}:`, error.message)
    // Here you might want to show an error message to the user
  }
}
</script>