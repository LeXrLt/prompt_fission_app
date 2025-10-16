<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
      <button @click="goToRegister">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import apiClient from '@/api';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const authStore = useAuthStore();

    const login = async () => {
      try {
        const response = await apiClient.post('/login', {
          username: username.value,
          password: password.value,
        });
        authStore.setToken(response.data.token);
        router.push('/profile');
      } catch (error) {
        // The error is handled by the global interceptor
      }
    };

    const goToRegister = () => {
      router.push('/register');
    };

    return {
      username,
      password,
      login,
      goToRegister,
    };
  },
};
</script>