<template>
  <div class="bg-slate-100">
    <router-view></router-view>
  </div>
</template>

<script>
import { analytics } from "./firebase_config";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

#app {
  font-family: "DM Sans", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}
</style>
