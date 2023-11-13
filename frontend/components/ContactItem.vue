<script lang="ts" setup>
import User from "~~/api/models/User";

const props = defineProps({
  index: {
    type: Number,
    default: 1,
  },
  contact: {
    type: Object as PropType<User>,
    required: true,
  },
});
</script>

<template>
  <div
    :class="`${index % 2 === 0 && 'bg-white'} flex justify-between py-4 px-2`"
  >
    <div class="w-[48px]"></div>
    <div
      class="flex flex-col items-start"
      :style="{ width: 'calc(100% - 96px)' }"
    >
      <h4 class="font-bold text-xl">{{ contact.name }}</h4>
      <span class="text-sm text-[#ac9db0]">{{ contact.title }}</span>
    </div>
    <div class="w-[48px] flex justify-center items-center">
      <font-awesome-icon icon="fas fa-arrow-right" />
    </div>
  </div>
</template>
