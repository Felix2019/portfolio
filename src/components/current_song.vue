<template>
  <div class="h-full flex items-center justify-center">
    <Loader v-if="isLoading" />
    <div v-else-if="error" class="p-6 bg-red-400">{{ error }}</div>
    <!-- container -->
    <div
      v-else
      class="w-full flex flex-col items-start p-6 space-y-6 bg-stone-800 rounded-md"
    >
      <!-- header -->
      <span class="flex flex-row items-center space-x-4">
        <img
          class="h-10 w-10"
          src="../assets/spotify_icon.png"
          alt="spotify-icon"
        />
        <h2 class="text-white font-bold text-xl">Current Song</h2>
      </span>

      <!-- information -->
      <div class="w-full flex flex-row items-start justify-between">
        <div class="flex flex-row space-x-5">
          <img
            class="h-20 w-20 rounded-md"
            :src="currentSong.albumImageUrl"
            alt="spotify-icon"
          />

          <span class="space-y-1 break-words">
            <h1 class="text-white font-bold text-lg">
              {{ currentSong.title }}
            </h1>
            <h2 class="text-white text-sm">{{ currentSong.artist }}</h2>
          </span>
        </div>

        <!-- open song btn -->
        <button @click="openInNewTab(currentSong.songUrl)">
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

export default {
  components: {
    Icon,
    Loader,
  },
  setup() {
    const currentSong = ref(null);
    const isLoading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      currentSong.value = await fetchCurrentSong().catch((e) => {
        error.value = e;
      });
      isLoading.value = false;
    });

    const fetchCurrentSong = async () => {
      const serverUrl = "http://localhost:4000";

      try {
        const response = await fetch(`${serverUrl}/spotify/currentSong`, {
          credentials: "include",
        });

        if (response.status != 200) throw await response.json();

        const result = await response.json();

        console.log(result);
        return result;
      } catch (e) {
        console.log(e.error);
        throw e;
      }
    };

    const checkToken = async () => {
      let item = JSON.parse(localStorage.getItem("accessToken"));

      console.log(JSON.parse(item));
    };

   

    const openInNewTab = (url) => {
      window.open(url, "_blank").focus();
    };

    return {
      currentSong,
      isLoading,
      error,
      openInNewTab,
    };
  },
};
</script>
