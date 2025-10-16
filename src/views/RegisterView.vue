<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/api';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const register = async () => {
      try {
        await apiClient.post('/register', {
          username: username.value,
          password: password.value,
        });
        router.push('/login');
      } catch (error) {
        // The error is handled by the global interceptor
      }
    };

    return {
      username,
      password,
      register,
    };
  },
};
</script>