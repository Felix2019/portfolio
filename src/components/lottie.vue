<template>
  <div class="w-32 h-32" ref="canvas"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import lottie from "lottie-web";
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // reference in dom tree
    const canvas = ref(null);

    onMounted(() => {
      initLottie();
    });

    const initLottie = () =>
      lottie.loadAnimation({
        container: canvas.value,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: props.url,
      });
    return {
      canvas,
    };
  },
};
</script>
