<template>
  <div class="flex flex-col items-start space-y-2.5">
    <div class="mx-5 p-3 bg-stone-900 shadow rounded-lg">
      <h2 class="text-lg font-semibold text-white text-center">
        {{ props.projectTitle }}
      </h2>
    </div>
    <div class="overflow-x-scroll whitespace-nowrap space-x-6 p-5">
      <img
        v-for="(item, index) in props.images"
        :key="index"
        class="w-1/4 inline-block shadow rounded-lg md:w-1/6"
        :src="item.mobile"
        alt="project-image"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projectTitle: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});
</script>
