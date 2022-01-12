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
            title: "https://felixguenthner.com",
            text: "Ein Schmuckstück für Dich.",
          })
          .catch((error) => console.log(error));
    };
    return {
      share,
    };
  },
};
</script>
