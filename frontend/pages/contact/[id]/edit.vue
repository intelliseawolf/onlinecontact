<script lang="ts" setup>
import { useContactStore } from "~~/stores/contact";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const router = useRouter();
const contactStore = useContactStore();
const { updateContact, getContact } = contactStore;
const contact = ref();
const config = useRuntimeConfig();

onMounted(async () => {
  if (typeof route.params.id === "string") {
    const response = await getContact(route.params.id);
    contact.value = response.contact;
  }
});

async function handleSubmit(form: FormData) {
  if (typeof route.params.id !== "string") return;

  try {
    await updateContact(form, route.params.id);
    router.push(`/contact/${route.params.id}`);
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
  <div class="pt-8 px-2" v-if="contact">
    <div class="flex">
      <NuxtLink :to="`/contact/${contact.id}`" class="flex items-center">
        <font-awesome-icon icon="fas fa-arrow-left" color="#ac9db0" />
        <div class="text-xl text-[#ac9db0] pl-2">Cancel</div>
      </NuxtLink>
    </div>

    <div class="flex justify-between py-4">
      <div class="w-[70px]">
        <img
          :src="config.api.baseUrl + contact.avatar"
          alt="avatar"
          class="w-[48px] h-[48px] rounded-full object-cover"
        />
      </div>
      <div
        class="flex flex-col items-start"
        :style="{ width: 'calc(100% - 70px)' }"
      >
        <h4 class="font-bold text-xl">{{ contact.name }}</h4>
        <span class="text-sm text-[#ac9db0] truncate w-full">{{
          contact.title
        }}</span>
      </div>
    </div>

    <contact-form @handleSubmit="handleSubmit" :contact="contact" />
  </div>
</template>
