<script setup>
import { ref, onMounted } from 'vue';
import { userService } from '@/services/user';

// Reactive variable to store users
const users = ref([]);
const errorMessage = ref('');

// Function to fetch all users
const fetchAllUsers = async () => {
  try {
    const response = await userService.allUsers(); // Call the allUsers service
    users.value = response; // Update the users list
  } catch (error) {
    errorMessage.value = error.message || 'An unknown error occurred while fetching users.';
  }
};

// Fetch users when the component is mounted
onMounted(() => {
});
</script>

<template>
</template>
