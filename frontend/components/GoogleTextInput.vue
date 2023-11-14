<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["setPlace"]);

function setPlace(value: any) {
  emit("setPlace", value);
}
</script>

<template>
  <div class="field">
    <label class="label text-xl font-semibold" v-if="label">{{ label }}</label>
    <VField :name="name" v-slot="{ field }">
      <GMapAutocomplete
        v-bind="field"
        :placeholder="placeholder"
        class="w-full bg-[#fbeeff] rounded-md p-2"
        @place_changed="setPlace"
      />

      <VErrorMessage :name="name" as="div" class="text-red-600 pt-1 pl-1" />
    </VField>
  </div>
</template>
