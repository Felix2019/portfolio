<template>
  <div
    v-if="!isLoaded"
    class="w-32 h-32 rounded-full bg-gray-200 animate-pulse"
  />

  <img
    src="https://ik.imagekit.io/wvyhkcp1wic/felix-guenthner/profile-img?ik-sdk-version=javascript-1.4.3&updatedAt=1643034256398"
    alt="Felix Günthner"
    @load="onImgLoad"
    v-show="isLoaded"
    style="width: 160px; height: 160px"
    class="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white md:w-64 md:h-64 animate__animated animate__fadeIn animate__faster"
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
