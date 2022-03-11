<template>
  <div>
    <!-- grid container -->
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="relative hover:scale-105 transition ease-in-out"
      >
        <router-link
          :to="{
            name: 'Project',
            params: { id: item.id },
          }"
        >
          <!-- image loader -->
          <!-- <div
            v-if="isLoading"
            class="w-40 h-40 rounded-sm shadow bg-slate-200 animate__animated animate__fadeIn md:w-60 md:h-60 lg:w-72 lg:h-72"
          /> -->

          <!-- product image 
            v-show="!isLoading"
            @load="onImgLoad"
          -->
          <img
            class="w-40 h-40 object-cover rounded-sm shadow md:w-60 md:h-60 lg:w-72 lg:h-72"
            :src="item.images[0].url"
            alt="project-image"
          />

          <!-- price chip -->
          <!-- <div
            class="absolute bottom-3 right-3 flex items-center px-2.5 py-1.5 bg-white rounded-md shadow"
          >
            <p class="text-gray-700 text-xs font-bold">
              {{ product.price }},00 €
            </p>
          </div> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../data/projects.json";

console.debug(data);
</script>
