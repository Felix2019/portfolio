<template>
  <AppBar />

  <div class="h-screen p-10 flex flex-col items-center justify-evenly bg-slate-100">
    <ProfileImage />
    <ProfileInfo />
  </div>
</template>

<script setup>
import AppBar from "./components/app-bar.vue"
import ProfileImage from "./components/profile-image.vue";
import ProfileInfo from "./components/profile-info.vue";

import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

#app {
  font-family: "DM Sans", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
}
</style>
