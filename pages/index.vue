<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-12">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the home page of your dashboard application.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <NuxtLink v-if="!user" to="/login" class="btn btn-primary mx-1">Login</NuxtLink>
        <NuxtLink v-if="user" to="/dashboard" class="btn btn-primary mx-1">Go to Dashboard</NuxtLink>
        <NuxtLink v-if="user" to="/logout" class="btn btn-danger mx-1">Logout</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSupabaseClient } from '@nuxtjs/supabase'

const supabase = useSupabaseClient()
const user = ref(null)

onMounted(async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error('Error fetching user:', error)
  } else {
    user.value = data.user
  }
})
</script>