<template>
  <button @click="share" name="share-button" aria-label="share-button">
    <Icon icon="mdi:share-variant-outline" width="26" height="26" />
  </button>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const share = () => {
  if (navigator.share)
    navigator
      .share({
        title: "Felix Günthner - Full Stack Developer.",
        url: "https://felixguenthner.com",
      })
      .catch((e) => console.log(e));
};
</script>
