import { useLayoutStore } from '~/stores/layout'

export default defineNuxtPlugin((nuxtApp) => {
  const layoutStore = useLayoutStore()

  // Run on client-side only
  if (process.client) {
    // Use Nuxt's built-in onNuxtReady hook
    nuxtApp.hook('app:mounted', () => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        layoutStore.theme = savedTheme
      }
      layoutStore.applyTheme()
    })
  }
})