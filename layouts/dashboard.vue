<template>
  <div class="d-flex flex-row min-vh-100">
    <AppSidebar />
    <div :class="['main-content', { 'sidebar-open': layoutStore.sidebarOpen }]" class="d-flex flex-column flex-grow-1">
      <AppHeader />
      <main class="flex-grow-1 p-3">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
const layoutStore = useLayoutStore()
</script>

<style scoped>
.main-content {
  transition: margin-left 0.3s ease;
}

.main-content.sidebar-open {
  margin-left: 280px; /* Same width as the sidebar */
}
</style>