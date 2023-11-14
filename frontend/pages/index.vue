<script lang="ts" setup>
import { storeToRefs } from "pinia";
import debounce from "lodash.debounce";

import { useContactStore } from "~~/stores/contact";

definePageMeta({
  middleware: ["auth"],
});

const contactStore = useContactStore();
const searchParams = ref("");
const { getContacts } = contactStore;
const { contacts } = storeToRefs(contactStore);

const searchContacts = debounce(() => {
  getContacts({ name: searchParams.value });
}, 500);

onMounted(() => {
  getContacts();
});

watch(searchParams, () => {
  searchContacts();
});
</script>

<template>
  <div class="pt-8">
    <h1 class="text-4xl font-bold px-2">Contacts</h1>
    <div class="px-2 my-5 relative">
      <input
        v-model="searchParams"
        class="w-full bg-white rounded-md p-2 pr-6"
      />
      <div class="absolute top-[10px] right-4">
        <font-awesome-icon icon="fas fa-magnifying-glass" />
      </div>
    </div>
    <div class="px-10">
      <NuxtLink to="/contact/add">
        <button
          type="submit"
          class="bg-[#9378ff] rounded-full uppercase text-white py-3 w-full mb-5"
        >
          Add New
        </button>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        :to="`/contact/${contact.id}`"
        v-for="(contact, index) in contacts"
        :key="contact.id"
      >
        <contact-item :index="index" :contact="contact" />
      </NuxtLink>
    </div>
  </div>
</template>
