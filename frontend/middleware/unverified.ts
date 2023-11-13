import { useAuthStore } from "~~/stores/auth";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const { user, isAuthenticated } = storeToRefs(authStore);
  const config = useRuntimeConfig();

  if (isAuthenticated.value === false) {
    return navigateTo(config.public.loginUrl, { replace: true });
  }

  if (user.value?.email_verified_at !== null) {
    return navigateTo(config.public.homeUrl, { replace: true });
  }
});
