export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode'
  ],
  colorMode: { 
    dataValue: 'bs-theme',
    preference: 'dark'
  },
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  supabase: {
    //redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/signup', '/forgot-password', '/reset-password'],
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  build: {
    transpile: ['pinia']
  },
  app: {
    head: {
      htmlAttrs: {
      }
    }
  }
})