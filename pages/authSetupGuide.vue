<template>
 

 
 
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
const emailError = ref('')

const validateForm = () => {
  if (!email.value || !validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.'
  } else {
    emailError.value = ''
    // Proceed with form submission or further processing
  }
}

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
</script>

<style>

</style>