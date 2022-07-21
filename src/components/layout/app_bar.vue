<template>
  <header
    class="sticky w-full top-0 h-14 z-20 flex flex-row items-center justify-between px-5 shadow  bg-slate-100  md:justify-around"
  >
    <div class="flex flex-row items-center space-x-1">
      <span class="text-lg font-bold">Hey</span>
      <span 
      >&#128075</span>

    </div>

    <div class="flex flex-row space-x-6">
      <!-- projects btn -->
      <button
        @click="scrollToProjects"
        name="projects-button"
        aria-label="projects-button"
        class="flex flex-row space-x-2.5"
      >
        <!-- <Icon icon="ic:sharp-workspace-premium" width="26" height="26" /> -->
        <span class="text-lg font-bold">Projects</span>
      </button>

        <!-- stats btn -->
       <button
        @click="scrollToStats"
        name="stats-button"
        aria-label="stats-button"
        class="flex flex-row space-x-2.5"
      >
        <span class="text-lg font-bold">Stats</span>
      </button>

      <!-- contact btn -->
      <button
        @click="scrollToContact"
        name="contact-button"
        aria-label="contact-button"
        class="flex flex-row space-x-2.5"
      >
        <span class="text-lg font-bold">Contact</span>
      </button>


    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";

// inject reactive value
const projects = inject("projects");
const stats = inject("stats");
const contact = inject("contact");

const scrollToProjects = () => projects.value.scrollIntoView(true);
const scrollToStats = () => stats.value.scrollIntoView(true);
const scrollToContact = () => contact.value.scrollIntoView(true);
</script>