<template>
  <div class="space-y-8">
    <!-- header -->
    <div class="space-y-5">
      <span class="flex flex-row items-center space-x-6">
        <img
          class="h-12 w-12"
          src="../assets/images/spotify_icon_black.png"
          alt="spotify-icon"
        />
        <h2 class="font-bold text-3xl text-gray-900">Top Tracks</h2>
      </span>
      <p class="font-medium text-gray-500">
        Here's my top tracks on Spotify updated daily.
      </p>
    </div>

    <Loader v-if="isLoading" />
    <div v-else-if="error" class="p-6 bg-red-400">{{ error }}</div>

    <!-- track container -->
    <div
      v-else
      v-for="(song, index) in topTracks"
      :key="index"
      class="w-full flex flex-col items-start p-6 space-y-6 bg-stone-800 rounded-md"
    >
      <h1 class="text-white text-3xl">{{ index + 1 }}.</h1>
      <!-- information -->
      <div class="w-full flex flex-row items-start justify-between">
        <div class="flex flex-row space-x-5">
          <img
            class="h-24 w-24 rounded-md"
            :src="song.imageUrl"
            alt="spotify-icon"
          />

          <span class="space-y-1 break-words">
            <h1 class="text-white font-bold text-lg">
              {{ song.title }}
            </h1>
            <h2 class="text-white text-sm">{{ song.artist }}</h2>
          </span>
        </div>

        <!-- open song btn -->
        <button @click="openInNewTab(song.url)">
          <Icon
            icon="akar-icons:link-chain"
            width="26"
            height="26"
            color="white"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import Loader from "./loader.vue";
import { SpotifyController } from "../controller/spotify_controller";

export default {
  components: {
    Icon,
    Loader,
  },
  setup() {
    const topTracks = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const spotifyController = new SpotifyController();

    onMounted(async () => {
      topTracks.value = await spotifyController
        .getTopTracks()
        .catch((e) => {
          error.value = e;
        })
        .finally(() => {
          isLoading.value = false;
        });
    });

    const openInNewTab = (url) => {
      window.open(url, "_blank").focus();
    };

    return {
      topTracks,
      isLoading,
      error,
      openInNewTab,
    };
  },
};
</script>
