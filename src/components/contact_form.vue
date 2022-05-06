<template>
  <div class="h-full flex flex-col items-start justify-center space-y-10">
    <!-- header -->
    <div class="w-full flex justify-between items-center">
      <span>
        <h1
          class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"
        >
          Contact
        </h1>
        <h2 class="text-lg font-medium text-gray-500 sm:text-2xl">
          Let's create progress together.
        </h2>
      </span>
      <Lottie url="https://assets8.lottiefiles.com/packages/lf20_x62chJ.json" />
    </div>

    <!-- contact button -->
    <button
      type="submit"
      class="w-full space-x-2.5 px-5 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg"
    >
      <a
        href="
          mailto:turtlelab.developer@gmail.com?subject=Let's work together

        "
      >
        <span class="text-white font-medium text-lg">Contact me</span>
      </a>
    </button>
  </div>
</template>

<script setup>
import Lottie from "./lottie.vue";
</script>
