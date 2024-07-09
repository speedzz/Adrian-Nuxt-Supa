import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    sidebarOpen: true,
    theme: 'light' // Default theme
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.saveTheme()
      this.applyTheme()
    },
    initTheme() {
      if (process.client) {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
          this.theme = savedTheme
        }
        this.applyTheme()
      }
    },
    saveTheme() {
      if (process.client) {
        localStorage.setItem('theme', this.theme)
      }
    },
    applyTheme() {
      if (process.client) {
        document.documentElement.setAttribute('data-bs-theme', this.theme)
      }
    }
  }
})