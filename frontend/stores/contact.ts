import { defineStore } from "pinia";

interface GetContactsPayload {
  name?: string;
}

export const useContactStore = defineStore("contactStore", () => {
  const contacts = ref([]);

  async function getContacts(payload?: GetContactsPayload) {
    const { $api } = useNuxtApp();
    const response = await $api.application.getContacts(payload);
    contacts.value = response.contacts;
  }

  return { contacts, getContacts };
});
