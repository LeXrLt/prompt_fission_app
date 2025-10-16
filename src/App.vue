<template>
  <RouterView />
  <ToastNotification :message="toast.message" :visible="toast.visible" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import ToastNotification from './components/ToastNotification.vue';
import { useToastStore } from './stores/toast';

const toast = useToastStore();
</script>

<style scoped>
</style>