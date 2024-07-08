<template>
  <div id="sidebar">  
    <nav class="h-100">
      <div class="position-sticky">
        <h1 class="text-white text-center">Logo</h1>
        <hr>
        <ul class="nav flex-column">
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/dashboard">  <i class="fas fa-home pe-2"></i>Dashboard</NuxtLink>
          </li>
              <li class="nav-item">
                <NuxtLink class="nav-link text-white" to="/profile"> <i class="fas fa-user pe-2"></i>Profile</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </template>
  
  <style scoped>
  #sidebar {
    width: 250px;
    height: auto;
    border-right: 1px solid #00ffc886;
  }

  .nav-link:hover {
    background-color: #f1f1f123; /* LimeGreen color */
    color: #ffffff!important;
  }
  </style>