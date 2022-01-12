<template>
  <div v-if="!isLoaded" class="w-32 h-32 rounded-full bg-gray-200 animate-pulse" />

  <img
    src="https://picsum.photos/200"
    alt="profile-image"
    @load="onImgLoad"
    v-show="isLoaded"
    class="w-40 h-40 rounded-full shadow-lg border-slate-200 md:w-64 md:h-64 animate__animated animate__fadeIn animate__faster"
  />
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const isLoaded = ref(false);

    const onImgLoad = () => (isLoaded.value = true);

    return {
      isLoaded,
      onImgLoad,
    };
  },
};
</script>
