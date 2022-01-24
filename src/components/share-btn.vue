<template>
  <button @click="share">
    <Icon icon="mdi:share-variant-outline" width="26" height="26" />
  </button>
</template>
<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  setup() {
    const share = () => {
      if (navigator.share)
        navigator
          .share({
            title: "Felix Günthner - Full Stack Developer.",
            url: "https://felixguenthner.com",
          })
          .catch((error) => console.log(error));
    };
    return {
      share,
    };
  },
};
</script>
