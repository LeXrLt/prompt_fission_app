import axios from 'axios';

import { useAuthStore } from '@/stores/auth';
import { useToastStore } from '@/stores/toast';

const apiClient = axios.create({
  baseURL: 'http://192.168.2.115/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  const token = authStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const toastStore = useToastStore();
    if (error.response && error.response.status !== 200) {
      toastStore.showToast(error.response.data.message || 'An error occurred');
    }
    return Promise.reject(error);
  }
);

export default apiClient;