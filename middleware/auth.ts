import { useCustomAuth } from '~/composables/useCustomAuth'

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, fetchUser } = useCustomAuth()
  
  // Fetch the latest user data
  await fetchUser()

  // If the user is not authenticated and is trying to access a protected route
  if (!isAuthenticated && to.name !== 'login' && to.name !== 'signup' && to.name !== 'confirm') {
    // Redirect to login page
    return navigateTo({ name: 'login' })
  }

  // If the user is authenticated and trying to access login or signup pages
  if (isAuthenticated && (to.name === 'login' || to.name === 'signup')) {
    // Redirect to dashboard or home page
    return navigateTo({ name: 'dashboard' })
  }
})