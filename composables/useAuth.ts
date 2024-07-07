import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
  const authStore = useAuthStore()
  const supabase = useSupabaseClient()
  //const user = useSupabaseUser()

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw error
    return data.user
  }

  const signIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${useRuntimeConfig().public.baseUrl}/confirm`
      }
    })
    if (error) throw error
  }

  const signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${useRuntimeConfig().public.baseUrl}/confirm`
      }
    })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    //user.value = null
    authStore.setUser(null)
  }

  return {
    getUser,
    signIn,
    signUp,
    signOut
  }
}