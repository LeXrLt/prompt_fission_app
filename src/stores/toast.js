import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: '',
    visible: false,
  }),
  actions: {
    showToast(message) {
      this.message = message;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 1000);
    },
  },
});