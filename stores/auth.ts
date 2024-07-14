import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: (User & { profileImage?: string; provider: string }) | null
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
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
    setUser(user: User | null) {
      this.user = user ? {
        ...user,
        profileImage: user.user_metadata?.avatar_url || user.user_metadata?.picture,
        provider: user.app_metadata?.provider || ''
      } : null
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setError(error: string | null) {
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
      } catch (error: unknown) {
        this.setError(error instanceof Error ? error.message : 'An unknown error occurred')
        this.setUser(null)
      } finally {
        this.setLoading(false)
      }
    },
  },
})