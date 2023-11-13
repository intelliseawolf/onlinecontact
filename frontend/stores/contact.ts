import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: [],
  }),
});
