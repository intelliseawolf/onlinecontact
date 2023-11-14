<script lang="ts" setup>
import { useContactStore } from "~~/stores/contact";

definePageMeta({
  middleware: ["auth"],
});

const contactStore = useContactStore();
const { createContact } = contactStore;
const router = useRouter();

async function handleSubmit(form: FormData) {
  try {
    await createContact(form);
    router.push("/");
  } catch (error: any) {
    if (error.message) {
      useNuxtApp().$toast.error(error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}
</script>

<template>
  <div class="pt-8">
    <div class="flex">
      <NuxtLink to="/" class="flex items-center px-2">
        <font-awesome-icon icon="fas fa-arrow-left" color="#ac9db0" />
        <div class="text-xl text-[#ac9db0] pl-2">Cancel</div>
      </NuxtLink>
    </div>
    <contact-form @handleSubmit="handleSubmit" />
  </div>
</template>
