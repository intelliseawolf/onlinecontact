<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
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
</script>

<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <VField :name="name" v-slot="{ field }">
      <input
        v-bind="field"
        class="w-full bg-[#fbeeff] rounded-md p-2"
        :placeholder="placeholder"
        :type="type"
      />

      <VErrorMessage :name="name" as="div" class="text-red-600 pt-1 pl-1" />
    </VField>
  </div>
</template>
