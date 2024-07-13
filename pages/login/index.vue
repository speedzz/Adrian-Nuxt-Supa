<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-3">
        <div class="card">
          <div class="py-3 ps-3 border-bottom">
            <h5 class="m-0">Login</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleEmailLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" required placeholder="example@example.com" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" required placeholder="******" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <hr>
            <AuthProviderButtons />
            
          </div>
          <div class="card-footer text-center">
            <NuxtLink :to="{ name: 'forgot-password' }">Forgot Password?</NuxtLink>
          </div>
        </div>
        <NuxtLink :to="{ name: 'signup' }" class="btn btn-success w-100 my-4">Sign Up</NuxtLink>
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
  name: 'login'
});

const email = ref("");
const password = ref("");
const router = useRouter();
const { showModal, modalType, modalTitle, modalMessage, showSuccessModal, showErrorModal } = useModal();
const { signIn, signInWithProvider } = useCustomAuth();

const handleEmailLogin = async () => {
  try {
    await signIn(email.value, password.value);
    router.push("/dashboard");
  } catch (error) {
    console.error("Login failed:", error.message);
    showErrorModal(error.message || 'An error occurred while logging in.');
  }
};

</script>
