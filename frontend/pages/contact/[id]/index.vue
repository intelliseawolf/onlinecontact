<script lang="ts" setup>
import { useContactStore } from "~~/stores/contact";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const contactStore = useContactStore();
const { getContact } = contactStore;
const contact = ref();
const config = useRuntimeConfig();

onMounted(async () => {
  if (typeof route.params.id === "string") {
    const response = await getContact(route.params.id);
    contact.value = response.contact;
  }
});
</script>

<template>
  <div class="pt-8 px-2">
    <div class="flex">
      <NuxtLink to="/" class="flex items-center">
        <font-awesome-icon icon="fas fa-arrow-left" color="#ac9db0" />
        <div class="text-xl text-[#ac9db0] pl-2">Back</div>
      </NuxtLink>
    </div>

    <div v-if="contact">
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

      <h4 class="font-bold text-xl mt-3">Address</h4>
      <span class="text-md text-[#ac9db0] truncate w-full">{{
        contact.address
      }}</span>

      <h4 class="font-bold text-xl mt-3">Phone</h4>
      <span class="text-md text-[#ac9db0] truncate w-full">{{
        contact.phone
      }}</span>

      <h4 class="font-bold text-xl mt-3">Email</h4>
      <span class="text-md text-[#ac9db0] truncate w-full">{{
        contact.email
      }}</span>

      <div class="px-10 pt-5">
        <NuxtLink :to="`/contact/${contact.id}/edit`">
          <button
            type="submit"
            class="bg-[#9378ff] rounded-full uppercase text-white py-3 w-full"
          >
            Edit
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
