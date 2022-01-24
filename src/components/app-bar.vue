<template>
  <header
    class="w-full h-14 p-4 bg-slate-100 flex flex-row shadow-sm items-center justify-between md:justify-around"
  >
    <div class="flex flex-row items-center space-x-2">
      <span class="text-lg font-bold">Hey</span>
      <Icon icon="mdi:hand-wave-outline" width="23" height="23" />
    </div>

    <ShareButton />
  </header>
</template>

<script setup>
import ShareButton from "./share-btn.vue";
import { Icon } from "@iconify/vue";
</script>
