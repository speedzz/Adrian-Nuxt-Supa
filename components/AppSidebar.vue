<template>
    <nav class="bg-light sidebar">
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/dashboard">Dashboard</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/profile">Profile</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100%;
  }
  </style>