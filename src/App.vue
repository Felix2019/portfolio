<template>
  <div class="bg-slate-100">
    <!-- <button @click="loginSpotify">login</button> -->

    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { analytics } from "./firebase-config";
import { SpotfiyController } from "./controller/spotify_controller";

export default {
  setup() {
    // const serverUrl = "http://localhost:4000";

    // const spotifyController = new SpotfiyController();

    onMounted(async () => {
      console.log("mounted app");
      // await loginSpotify();
      // await test();
      // await spotifyController.checkToken();
      // await checkToken();
    });

    // const checkToken = async () => {
    //   const expireTime = parseInt(localStorage.getItem("expireTime"));
    //   const currentTime = Date.now();

    //   // console.log("now", new Date(Date.now()).toString());
    //   // console.log("expire", new Date(expireTime).toString());

    //   // The expiry time has been exceeded and the token is no longer valid
    //   if (currentTime >= expireTime) await refreshToken();
    // };

    const test = async () => {
      try {
        const response = await fetch(serverUrl + "/", {
          credentials: "include",
        });

        if (response.status != 200) throw await response.json();
      } catch (e) {
        throw e;
      }
    };

    // const refreshToken = async () => {
    //   try {
    //     const response = await fetch(serverUrl + "/spotify/refreshToken", {
    //       credentials: "include",
    //     });

    //     if (response.status != 200) throw await response.json();

    //     const result = await response.json();

    //     localStorage.setItem("expireTime", result.expireTime);
    //   } catch (e) {
    //     throw e;
    //   }
    // };

    // const loginSpotify = async () => {
    //   try {
    //     const response = await fetch(serverUrl + "/spotify/login");

    //     if (response.status != 200) throw await response.json();

    //     const redirectUrl = await response.json();

    //     window.location.href = redirectUrl;
    //   } catch (e) {
    //     throw e;
    //   }
    // };

    return {
      // loginSpotify,
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
