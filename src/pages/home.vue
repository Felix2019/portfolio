<template>
  <div>
    <AppBar />

    <section class="h-screen flex flex-col items-center justify-evenly p-5">
      <ProfileImage />
      <ProfileInfo />
      <LinkTree />
    </section>

    <section ref="projects" class="py-20 bg-slate-400">
      <Projects />
    </section>

    <section ref="about" class="h-screen py-20 bg-slate-700"></section>

    <!-- filter button -->
    <!-- <button
      @click="openFilter"
      class="fixed z-10 bottom-3 right-3 bg-emerald-500 rounded-2xl p-3.5 shadow transition ease-in-out hover:bg-emerald-700"
    >
      <Icon icon="mdi:filter-outline" width="26" height="26" color="white" />
    </button> -->
  </div>
</template>

<script setup>
import ProfileImage from "../components/profile-image.vue";
import ProfileInfo from "../components/profile-info.vue";
import LinkTree from "../components/link-tree.vue";
import { ref, provide } from "vue";
import AppBar from "../components/app-bar.vue";
import Projects from "../components/projects.vue";

const projects = ref();
const about = ref();

// provide reactive values globally
provide("projects", projects);
provide("about", about);

// const scrollPosition = computed(() => {
//   document.addEventListener("scroll", (event) => {
//     console.log(window.scrollY);
//   });
// });

const jeweleryShop = [
  {
    mobile: new URL("../assets/jewelry-store/mobile/home.jpg", import.meta.url),
    // desktop: new URL("./assets/home.png", import.meta.url),
  },
  {
    mobile: new URL(
      "../assets/jewelry-store/mobile/product.jpg",
      import.meta.url
    ),
  },
  {
    mobile: new URL("../assets/jewelry-store/mobile/bag.jpg", import.meta.url),
  },
  {
    mobile: new URL(
      "../assets/jewelry-store/mobile/about.jpg",
      import.meta.url
    ),
  },
];
</script>
