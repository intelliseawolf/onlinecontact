import { useAuthStore } from "~~/stores/auth";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);
  const config = useRuntimeConfig();

  if (isAuthenticated.value === false) {
    return navigateTo(config.public.loginUrl, { replace: true });
  }
});
