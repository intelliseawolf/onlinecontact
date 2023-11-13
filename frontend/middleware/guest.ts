import { useAuthStore } from "~~/stores/auth";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);
  const config = useRuntimeConfig();

  if (isAuthenticated.value === true) {
    return navigateTo(config.public.homeUrl, { replace: true });
  }
});
