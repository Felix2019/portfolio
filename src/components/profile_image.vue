<template>
  <div>
    <div
      v-if="!isLoaded"
      class="w-32 h-32 rounded-full bg-gray-200 animate-pulse"
    />

    <!-- <div
      class="w-10 h-10 border-2 border-green-800 animate-spin rounded-full border-dotted"
    ></div> -->
    <div id="profileImage" class="shadow">
      <img
        src="../assets/images/profile_image.jpeg"
        alt="Felix Günthner"
        @load="onImgLoad"
        v-show="isLoaded"
        class="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white md:w-64 md:h-64 animate__animated animate__fadeIn animate__faster"
      />
    </div>
  </div>

  <!-- <div class="bg-green-400 w-full flex items-center justify-center">
    <ul>
      <li>
        <div class="bg-red-500 h-10 w-10">icon</div>
      </li>

      <li>
        <div class="bg-red-500 h-10 w-10">icon</div>
      </li>
    </ul>

    <div>
      <div
        v-if="!isLoaded"
        class="w-32 h-32 rounded-full bg-gray-200 animate-pulse"
      />

      <img
        src="https://ik.imagekit.io/wvyhkcp1wic/felix-guenthner/profile-img?ik-sdk-version=javascript-1.4.3&updatedAt=1643034256398"
        alt="Felix Günthner"
        @load="onImgLoad"
        v-show="isLoaded"
        style="width: 160px; height: 160px"
        class="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white md:w-64 md:h-64 animate__animated animate__fadeIn animate__faster"
      />
    </div> -->
</template>

<script setup>
import { ref } from "vue";

const isLoaded = ref(false);

const onImgLoad = () => (isLoaded.value = true);
</script>

<!-- idea: set link tree icons revolve around profile image -->

<style scoped>
#profileImage {
  padding: 30px 60px 30px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f97316;
  animation: anim 8s infinite;
}

@keyframes anim {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
  }
  10% {
    border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
  }

  20% {
    border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
  }

  30% {
    border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
  }

  40% {
    border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
  }

  50% {
    border-radius: 100%;
  }

  60% {
    border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
  }

  70% {
    border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
    /* box-shadow: 1vmin 1vmin 8vmin LightPink inset,
      2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 16vmin purple inset; */
  }

  80% {
    border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
  }

  90% {
    border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
  }
}
</style>
