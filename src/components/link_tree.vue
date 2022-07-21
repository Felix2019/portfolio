<template>
  <div
    class="w-full whitespace-nowrap flex bg-white px-6 py-4 space-x-10 shadow rounded-xl overflow-x-scroll md:justify-center lg:bg-transparent lg:shadow-none lg:space-x-14"
  >
    <button
      @click="openLink(item.link)"
      name="link-button"
      aria-label="link-button"
      v-for="item in links"
      :key="item.key"
      class="p-3 bg-slate-100 rounded-full shadow-sm md:hover:bg-slate-300"
    >
      <Icon :icon="item.icon" width="26" height="26" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data: () => {
    return {
      links: [
        {
          link: "https://github.com/Felix2019",
          icon: "mdi-github",
        },
        {
          link: "https://www.instagram.com/felixx.dev/",
          icon: "mdi-instagram",
        },
        {
          link: "https://www.youtube.com/channel/UCFYkuQhoBQjzn_vwhWay6bQ",
          icon: "ant-design:youtube-filled",
        },
        {
          link: "https://www.linkedin.com/in/felix-günthner-706b4b208/",
          icon: "mdi-linkedin",
        },
        {
          link: "https://felixguenthner.com/assets/cv_felix_guenthner.2a7e2cff.pdf",
          icon: "academicons:cv",
        },
        // add xing, tiktok?
      ],
    };
  },
  methods: {
    openLink: function (link) {
      window.open(link);
    },
  },
};
</script>
