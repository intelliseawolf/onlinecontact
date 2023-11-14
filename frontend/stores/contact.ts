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

  async function createContact(payload: FormData) {
    const { $api } = useNuxtApp();
    await $api.application.createContact(payload);
  }

  async function getContact(id: string) {
    const { $api } = useNuxtApp();
    return await $api.application.getContact(id);
  }

  return { contacts, getContacts, createContact, getContact };
});
