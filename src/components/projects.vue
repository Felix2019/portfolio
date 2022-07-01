<template>
  <div class="space-y-14">
    <div>
      <h1
        class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"
      >
        Projects
      </h1>
      <h2 class="text-lg font-medium text-gray-500 sm:text-2xl">
        Get a view about all production ready projects.
      </h2>
    </div>

    <div>
      <!-- grid container -->
      <div class="mt-8 grid grid-cols-12 col-span-12 gap-7">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col items-start col-span-12 overflow-hidden shadow rounded-xl hover:scale-105 transition duration-300 ease-out md:col-span-6 lg:col-span-4"
        >
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full"
          >
            <!-- project image -->
            <img
              class="block w-full object-cover shadow max-h-56"
              :src="project.thumbnail"
            />
            <!-- project description -->
            <div
              class="relative w-full h-full flex flex-col items-start p-5 bg-white rounded-b-xl"
            >
              <h2 class="text-base font-bold sm:text-lg md:text-xl">
                {{ project.title }}
              </h2>
              <p class="mt-1.5 mb-8 text-sm text-gray-500">
                {{ project.description }}
              </p>

              <!-- project chips -->
              <div class="flex flex-row flex-wrap items-start">
                <div
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="bg-slate-800 px-3 py-1.5 mr-2 my-1 leading-none rounded-full text-xs font-medium uppercase text-white"
                >
                  <span> {{ tag }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: "1",
    title: "Ruth Günthner Schmuck",
    description: "An online shop that sells handmade jewelry.",
    url: "https://goldschmiede-ruthguenthner.com",
    tags: ["Vue", "Vite", "Firebase", "Tailwind", "Stripe", "Vuex"],
    thumbnail: new URL(
      "../assets/thumbnails/ruth_guenthner_schmuck.png",
      import.meta.url
    ),
    images: [
      new URL(
        "../assets/thumbnails/ruth_guenthner_schmuck.png",
        import.meta.url
      ),
    ],
  },
  {
    id: "2",
    title: "Interview",
    description:
      "Digital questionnaire and social media platform about questions.",
    url: "https://interview-app.com",
    tags: [
      "Flutter",
      "Riverpod",
      "Postgres",
      "Node",
      "Firebase",
      "Express",
      "Digital Ocean",
    ],

    thumbnail: new URL("../assets/thumbnails/interview.png", import.meta.url),
    images: [new URL("../assets/thumbnails/interview.png", import.meta.url)],
  },
  {
    id: "3",
    title: "One for all",
    description:
      "Web App which displays all available rental vehicles provider close to you.",
    url: "https://one-for-all-b8cd4.web.app",
    tags: ["Vue", "Webpack", "Vuetify", "PWA", "Firebase"],
    thumbnail: new URL("../assets/thumbnails/one_for_all.png", import.meta.url),
    images: [new URL("../assets/thumbnails/one_for_all.png", import.meta.url)],
  },
  {
    id: "4",
    title: "Shop Dashboard",
    description:
      "Dashboard for an e-commerce jewelry shop for creating, updating and deleting products and for an overview about all products, customers and orders.",
    url: "https://github.com/Felix2019",
    tags: ["Vue", "Vite", "Tailwind", "Firebase"],
    thumbnail: new URL(
      "../assets/thumbnails/shop_dashboard_banner.png",
      import.meta.url
    ),
    images: [new URL("../assets/thumbnails/one_for_all.png", import.meta.url)],
  },

  // think together, speech recognition, corona daily, webnasa, ulna, one for all. recipe finder
];
</script>
