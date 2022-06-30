<template>
  <div class="bg-slate-100">
    <button @click="loginSpotify">login</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { analytics } from "./firebase-config";

export default {
  setup() {
    const server = "http://localhost:4000";

    onMounted(async () => {
      // await loginSpotify();
      console.log("mounted app");
    });

    const loginSpotify = async () => {
      try {
        const response = await fetch(server + "/spotifyLogin");

        if (response.status != 200) {
          const e = await response.text();
          throw e;
        }

        // get auth redirect url
        const redirectUrl = await response.json();

        window.location.href = redirectUrl;
      } catch (e) {
        console.log("err", e);
        throw Error(e);
      }
    };

    return {
      loginSpotify,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

#app {
  font-family: "DM Sans", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
