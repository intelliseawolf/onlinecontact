<script lang="ts" setup>
import { object, string, ref as yupRef } from "yup";
import { FormActions } from "vee-validate";

interface Form {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const initialValues = {
  name: "",
  title: "",
  phone: "",
  email: "",
  address: "",
};
const schema = object({
  name: string().required().label("Name"),
  title: string().required().label("Title"),
  phone: string().required().label("Phone"),
  address: string().required().label("Address"),
  email: string().required().email().label("Email"),
});

const address = ref("");
const avatar = ref();
const { $api } = useNuxtApp();
const emit = defineEmits(["handleCreate"]);

async function submit(values: Form, actions: FormActions<Form>) {
  try {
    values = {
      ...values,
      address: address.value,
    };
    let formData = new FormData();
    if (avatar.value) formData.append("avatar", avatar.value);

    (Object.keys(values) as (keyof typeof values)[]).forEach((key, index) => {
      formData.append(key, values[key]);
    });

    emit("handleCreate", formData);
  } catch (err) {
    console.log(err);
  }
}

function setPlace(value: any) {
  address.value = value.formatted_address;
}

function onFileChange(e: HTMLInputEvent) {
  if (e.target.files) {
    avatar.value = e.target.files[0];
  }
}
</script>

<template>
  <VForm
    class="px-2 mt-4"
    :validation-schema="schema"
    :initial-values="initialValues"
    @submit="submit"
    enctype="multipart/form-data"
  >
    <VTextInput name="name" placeholder="Dustin Warren" label="Name" />
    <VTextInput
      name="title"
      placeholder="UX Designer"
      label="Title"
      class="mt-2"
    />
    <div class="field mt-2">
      <label class="label text-xl font-semibold">Profile Picture</label>
      <input
        type="file"
        name="avatar"
        class="w-full bg-[#fbeeff] rounded-md p-2"
        placeholder="Upload file"
        @change="onFileChange"
      />
    </div>
    <GoogleTextInput
      name="address"
      placeholder="Address"
      label="Address"
      @setPlace="setPlace"
      class="mt-2"
    />
    <VTextInput
      name="phone"
      placeholder="(217) 499-0822"
      label="Phone"
      class="mt-2"
    />
    <VTextInput
      name="email"
      placeholder="ryan@rowandtable.com"
      label="Email"
      class="mt-2"
    />

    <div class="px-10">
      <button
        type="submit"
        class="bg-[#9378ff] rounded-full uppercase text-white py-3 w-full mt-[30px]"
      >
        Add
      </button>
    </div>
  </VForm>
</template>
