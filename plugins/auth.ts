import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()
  const supabase = useSupabaseClient()
  const ssrContext = nuxtApp.ssrContext

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw error
    return data.user
  }

  // Initialize user on app creation
  nuxtApp.hook('app:created', async () => {
    try {
      const user = await getUser()
      authStore.setUser(user)
    } catch (error) {
      //console.error('Error fetching user:', error)
      authStore.setUser(null)
    }
  })

  // Refresh user on client-side navigation
  if (!ssrContext) {
    nuxtApp.hook('page:finish', async () => {
      try {
        const user = await getUser()
        authStore.setUser(user)
      } catch (error) {
        //console.error('Error refreshing user:', error)
        authStore.setUser(null)
      }
    })
  }
})