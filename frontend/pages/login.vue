<script lang="ts" setup>
import { object, string, ref as yupRef } from "yup";
import { FormActions } from "vee-validate";
import { useAuthStore } from "~~/stores/auth";

definePageMeta({
  middleware: ["guest"],
});

interface Form {
  email: string;
  password: string;
}

const { $api } = useNuxtApp();

const initialValues = { email: "", password: "" };
const config = useRuntimeConfig();
const router = useRouter();
const authStore = useAuthStore();
const { login } = authStore;

const schema = object({
  email: string().required().email().label("Email"),
  password: string().required().min(8).label("Your Password"),
});

async function submit(values: Form, actions: FormActions<Form>) {
  try {
    await login(values);
    router.push(config.public.homeUrl);
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div class="pt-[170px]">
    <h1 class="text-4xl font-bold text-center">Welcome</h1>

    <VForm
      class="px-2 mt-10"
      :validation-schema="schema"
      :initial-values="initialValues"
      @submit="submit"
    >
      <VTextInput name="email" placeholder="john@doe.com" />
      <VTextInput
        type="password"
        name="password"
        placeholder="***********"
        class="mt-5"
      />

      <div class="px-10">
        <button
          type="submit"
          class="bg-[#9378ff] rounded-full uppercase text-white py-3 w-full mt-[70px]"
        >
          Login
        </button>
      </div>
    </VForm>
  </div>
</template>
