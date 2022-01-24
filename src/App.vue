<template>
  <div class="h-screen flex flex-col items-center bg-slate-100">
    <AppBar />

    <div class="h-full flex flex-col items-center justify-around m-5">
      <ProfileImage />
      <ProfileInfo />
      <LinkTree />
    </div>
  </div>
</template>

<script setup>
import AppBar from "./components/app-bar.vue";
import ProfileImage from "./components/profile-image.vue";
import ProfileInfo from "./components/profile-info.vue";
import LinkTree from "./components/link-tree.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

#app {
  font-family: "DM Sans", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
}
</style>
