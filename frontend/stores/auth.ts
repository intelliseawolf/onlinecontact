import { defineStore } from "pinia";

import User from "~~/api/models/User";

interface LoginPayload {
  email: string;
  password: string;
  remember?: boolean;
}

export const useAuthStore = defineStore("authStore", () => {
  const user = ref();
  const isAuthenticated = ref(false);

  async function fetchUser() {
    const { $api } = useNuxtApp();
    user.value = await $api.authentication.user();
    isAuthenticated.value = true;
  }

  async function login(payload: LoginPayload) {
    const { $api } = useNuxtApp();
    const { email, password, remember } = payload;

    if (isAuthenticated.value === true) {
      return;
    }
    await $api.authentication.login(email, password, remember);
    await fetchUser();
  }

  function setUser(value: User | null) {
    user.value = value;
    if (user) {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  }

  return { isAuthenticated, user, fetchUser, login, setUser };
});
