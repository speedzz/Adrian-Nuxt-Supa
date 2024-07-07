<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0 py-2">Login</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleEmailLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" required placeholder="******" />
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
            <NuxtLink  to="/forgot-password">Forgot Password?</NuxtLink>
          </div>
        </div>
        <a href="/signup" class="btn btn-success w-100 my-4">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCustomAuth } from "~/composables/useCustomAuth";

definePageMeta({});

const email = ref("");
const password = ref("");
const router = useRouter();
const { signIn, signInWithProvider } = useCustomAuth();

const handleEmailLogin = async () => {
  try {
    await signIn(email.value, password.value);
    router.push("/dashboard");
  } catch (error) {
    console.error("Login failed:", error.message);
    // Here you might want to show an error message to the user
  }
};
</script>
