<template>
  <div>
    <h1>Profile</h1>
    <div v-if="user">
      <p>Username: {{ user.username }}</p>
      <p>Registered at: {{ user.created_at }}</p>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import apiClient from '@/api';

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();
    const authStore = useAuthStore();

    onMounted(async () => {
      try {
        const response = await apiClient.get('/profile');
        user.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const logout = () => {
      authStore.clearToken();
      router.push('/login');
    };

    return {
      user,
      logout,
    };
  },
};
</script>