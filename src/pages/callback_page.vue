<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="w-10 h-10 border-4 border-t-transparent border-slate-800 border-solid rounded-full animate-spin"
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { SpotifyController } from "../controller/spotify_controller";

const spotifyController = new SpotifyController();

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const { code, state } = route.query;

  await spotifyController.getAccessToken(code, state);

  router.push("/");
});
</script>
