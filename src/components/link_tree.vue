k<template>
  <div class="container">
    <v-btn
      v-for="item in links"
      :key="item.key"
      icon
      large
      color="black"
      @click="openLink(item.link)"
    >
      <v-icon large>{{ item.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          link: "https://github.com/Felix2019",
          icon: "mdi-github",
        },
        {
          link: "https://www.instagram.com/_felixx_3/",
          icon: "mdi-instagram",
        },
        {
          link: "https://www.linkedin.com/in/felix-g-706b4b208/",
          icon: "mdi-linkedin",
        },
        {
          link: "https://turtlelab.web.app",
          icon: "mdi-web",
        },
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

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>