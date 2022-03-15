<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Projects</h1>

    <!-- grid container -->
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
      <router-link
        :to="{
          name: 'Project',
          params: { id: item.id },
        }"
        v-for="(item, index) in data"
        :key="index"
        :style="{ backgroundImage: `url(${item.thumbnail})` }"
        class="h-60 px-5 py-4 bg-cover bg-center shadow rounded flex items-end justify-start hover:scale-105 transition ease-in-out"
      >
        <p class="text-white font-bold ">{{ item.title }}</p>

        <!-- <img
            class="w-40 h-40 object-cover rounded-sm shadow md:w-60 md:h-60 lg:w-72 lg:h-72"
            :src="item.images[0].mobile"
            alt="project-image"
          /> -->
      </router-link>
    </div>
  </div>
</template>

<script setup>
import data from "../data/projects";
</script>
