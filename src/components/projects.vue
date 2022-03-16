<template>
  <div class="h-full space-y-8">
    <h1 class="text-2xl font-bold">Projects</h1>

    <!-- grid container -->
    <div class="h-full grid grid-cols-2 gap-6 md:grid-cols-3">
      <!-- <router-link
        :to="{
          name: 'Project',
          params: { id: item.id },
        }"
        v-for="(item, index) in projects"
        :key="index"
        :style="{ backgroundImage: `url(${item.thumbnail})` }"
        class="h-1/2 flex items-end justify-start px-5 py-4 bg-cover bg-center shadow rounded-lg border-4 border-white hover:scale-105 transition ease-in-out"
      >
        <span class="text-white font-bold">{{ item.title }}</span>
      </router-link> -->
      <a
        v-for="(item, index) in projects"
        :key="index"
        :href="item.url"
        :style="{ backgroundImage: `url(${item.thumbnail})` }"
        class="h-1/2 flex items-end justify-start px-5 py-4 bg-cover bg-center shadow rounded-lg border-4 border-white hover:scale-105 transition ease-in-out"
      >
        <span class="text-white font-bold">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: "1",
    title: "Ruth Günthner Schmuck",
    thumbnail: new URL(
      "../assets/thumbnails/ruth-guenthner-schmuck.png",
      import.meta.url
    ),
    images: [
      {
        mobile: new URL(
          "../assets/jewelry-store/mobile/home.jpg",
          import.meta.url
        ),
        desktop: "dsfdf",
      },
    ],
    url: "https://goldschmiede-ruthguenthner.com",
  },
  {
    id: "2",
    title: "Interview",
    thumbnail: new URL("../assets/thumbnails/interview.png", import.meta.url),
    images: [
      {
        mobile: new URL(
          "../assets/jewelry-store/mobile/home.jpg",
          import.meta.url
        ),
        desktop: "dsfdf",
      },
    ],
    url: "https://interview-app.com",
  },
  {
    id: "3",
    title: "One for all",
    thumbnail: new URL("../assets/thumbnails/one-for-all.png", import.meta.url),
    images: [
      {
        mobile: new URL(
          "../assets/jewelry-store/mobile/home.jpg",
          import.meta.url
        ),
        desktop: "dsfdf",
      },
    ],
    url: "https://one-for-all-b8cd4.web.app",
  },

  // think together, speech recognition, corona daily, webnasa, shop dashboard, ulna, one for all. recipe finder
];
</script>
