import { useAuthStore } from '~/stores/auth'

export const useCustomAuth = () => {
  const authStore = useAuthStore()
  const supabase = useSupabaseClient()

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    await authStore.fetchUser()
    return data
  }

  const signInWithProvider = async (provider: 'github' | 'google' | 'facebook' | 'apple') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${useRuntimeConfig().public.baseUrl}/confirm`
      }
    })
    
    if (error) throw error
    return data
  }

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${useRuntimeConfig().public.baseUrl}/confirm`
      }
    })
    if (error) throw error
    return data
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    authStore.setUser(null)
  }

  const forgotPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${useRuntimeConfig().public.baseUrl}/reset-password`,
    })
    if (error) throw error
    return data
  }

  const verifyResetSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error || !data.session) {
      throw new Error('No valid reset session found')
    }
    return data.session
  }

  const verifySession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  }

  const resetPassword = async (newPassword: string) => {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) throw error
    return data
  }

  return {
    user: computed(() => authStore.user),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    isEmailConfirmed: computed(() => authStore.isEmailConfirmed),
    loading: computed(() => authStore.loading),
    error: computed(() => authStore.error),
    fetchUser: authStore.fetchUser,
    signIn,
    signInWithProvider,
    signUp,
    signOut,
    forgotPassword,
    verifyResetSession,
    resetPassword,
    verifySession
  }
}