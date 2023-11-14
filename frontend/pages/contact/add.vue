<script lang="ts" setup>
import { useContactStore } from "~~/stores/contact";

definePageMeta({
  middleware: ["auth"],
});

const contactStore = useContactStore();
const { createContact } = contactStore;
const router = useRouter();

async function handleCreate(form: FormData) {
  await createContact(form);
  router.push("/");
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
    <contac-form @handleCreate="handleCreate" />
  </div>
</template>
