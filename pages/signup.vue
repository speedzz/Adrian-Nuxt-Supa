<template>
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">
              <h5 class="m-0 py-2">Sign Up</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSignUp">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="email" type="email" class="form-control" id="email" placeholder="joe@example.com" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input v-model="password" type="password" class="form-control" id="password" placeholder="******" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
            <div class="card-footer text-center">
              <p class="m-0 py-2">Already have an account? <NuxtLink :to="{ name: 'login' }">
                Login
              </NuxtLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal 
      v-model:show="showModal"
      :type="modalType"
      :title="modalTitle"
      :message="modalMessage"
      :autoClose="modalType === 'success' ? 3000 : 0"
    />  
</template>
  
  <script setup>
  definePageMeta({
    name: 'signup'
  })
  
  const email = ref('')
  const password = ref('')
  const { signUp } = useAuth()
  const { showModal, modalType, modalTitle, modalMessage, showSuccessModal, showErrorModal } = useModal();
  
  const handleSignUp = async () => {
    try {
      await signUp(email.value, password.value)
      // Show success message or redirect
    } catch (error) {
      // Handle error
      console.error('Signup failed:', error)
      showErrorModal(error.message || 'An error occurred while signing up.');
    }
  }
  </script>