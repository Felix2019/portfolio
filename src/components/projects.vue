<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-white">Projects</h1>

    <!-- grid container -->
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
      <router-link
        :to="{
          name: 'Project',
          params: { id: item.id },
        }"
        v-for="(item, index) in data"
        :key="index"
        class="p-10 bg-white text-center shadow rounded flex items-center justify-center hover:scale-105 transition ease-in-out"
      >
        <p>{{ item.title }}</p>

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
