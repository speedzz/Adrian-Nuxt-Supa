<template>
  <div class="px-5">
    <Table title="Role Management" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'roleManagement',
  middleware: 'auth',
  layout: 'dashboard',
  role: 'admin'
})
</script>

<style>

</style>