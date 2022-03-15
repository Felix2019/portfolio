<template>
  <header
    class="sticky w-full top-0 h-14 z-10 flex flex-row items-center justify-between px-5 shadow bg-slate-100 md:justify-around"
  >
    <div class="flex flex-row items-center space-x-1">
      <span class="text-lg font-bold">Hey</span>
      <span 
      >&#128075</span>

    </div>
    <!-- <ShareButton /> -->

    <div class="flex flex-row space-x-4">
      <button
        @click="scrollToProjects"
        name="share-button"
        aria-label="share-button"
        class="flex flex-row space-x-2.5"
      >
        <!-- <Icon icon="ic:sharp-workspace-premium" width="26" height="26" /> -->
        <span class="text-lg font-bold">Projects</span>
      </button>

      <!-- <button
        @click="scrollToAbout"
        name="share-button"
        aria-label="share-button"
        class="flex flex-row space-x-2.5"
      >
        <span class="text-lg font-bold">Contact</span>
      </button> -->
    </div>
  </header>
</template>

<script setup>
import ShareButton from "./share-btn.vue";
import { inject } from "vue";

// inject reactive value
const projects = inject("projects");
const about = inject("about");

const scrollToProjects = () => projects.value.scrollIntoView(true);
const scrollToAbout = () => about.value.scrollIntoView(true);
</script>
