<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h3 class="card-title">User Table</h3>
      <div class="d-flex">
        <input type="text" class="form-control d-inline-block" placeholder="Search...">
        <button class="btn btn-primary mx-2">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="card-body">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th @click="sortTable('name')">Name</th>
            <th @click="sortTable('email')">Email</th>
            <th @click="sortTable('role')">Role</th>
            <th @click="sortTable('provider')">Provider</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedData" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.provider }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <div class="pagination-buttons">
        <button v-for="page in totalPages" :key="page" class="btn btn-secondary mx-1" @click="goToPage(page)">
          {{ page }}
        </button>
      </div>
      <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const users = ref([
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', provider: 'Google' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', provider: 'Facebook' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Moderator', provider: 'Twitter' },
  // Add more user data as needed
]);

const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;
const sortKey = ref('');
const sortOrder = ref(1);

const filteredData = computed(() => {
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.provider.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const sortedData = computed(() => {
  return filteredData.value.sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) return -1 * sortOrder.value;
    if (a[sortKey.value] > b[sortKey.value]) return 1 * sortOrder.value;
    return 0;
  });
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedData.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage);
});

const sortTable = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = -sortOrder.value;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};
</script>

<style>
.card {
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

.card-title {
  margin: 0;
}

.table th {
  cursor: pointer;
}

.table th:hover {
  text-decoration: underline;
}

.pagination-buttons {
  display: flex;
  align-items: center;
}
</style>