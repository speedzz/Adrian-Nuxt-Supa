import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    isEmailConfirmed: (state) => !!state.user?.email_confirmed_at,
    getUser: (state) => state.user,
  },
  actions: {
    setUser(user) {
      const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
      if (avatarUrl) {
        user = { ...user, profileImage: avatarUrl }
      }
      this.user = user
    },
    setLoading(loading) {
      this.loading = loading
    },
    setError(error) {
      this.error = error
    },
    async fetchUser() {
      if (this.user) return this.user

      this.setLoading(true)
      this.setError(null)

      try {
        const supabase = useSupabaseClient()
        const { data, error } = await supabase.auth.getUser()
        if (error) throw error
        this.setUser(data.user)
        
        return data.user
      } catch (error) {
        this.setError(error.message)
        this.setUser(null)
      } finally {
        this.setLoading(false)
      }
    },
  },
})