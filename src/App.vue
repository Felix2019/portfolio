<template>
  <div class="bg-slate-100">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { analytics } from "./firebase-config";
import { Buffer } from "buffer";

export default {
  setup() {
    const SERVER_URL = "http://localhost:3000";

    onMounted(async () => {
      await loginSpotify();
    });

    const loginSpotify = async () => {
      try {
        const response = await fetch(SERVER_URL + "/spotifyLogin", {
          // headers: {
          //   Authorization: `Basic ${basic}`,
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },
          // body: new URLSearchParams({
          //   grant_type: "client_credentials",
          //   // refresh_token,
          // }),
        });

        if (response.status != 200) {
          const e = await response.text();
          throw Error(e);
        }
      } catch (e) {
        console.log(e);
        throw Error(e);
      }
    };

    const getAccessToken = async () => {
      const scopes = ["user-read-private", "user-read-email"];

      const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

      const client_id = "d2286f669ada41b99b393f97673c5f21";
      const client_secret = "99d10428bd7a46d2b73a6a45cfb2ae88";
      // const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
      const TOP_TRACKS_ENDPOINT =
        "https://api.spotify.com/v1/users/jmperezperez";

      var redirect_uri = "http://localhost:3000";
      const refresh_token = "saddfdsffs";

      const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
        "base64"
      );

      try {
        const response = await fetch(TOKEN_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            // refresh_token,
          }),
        });

        if (response.status != 200) {
          const e = await response.text();
          throw Error(e);
        }

        let body = await response.json();

        let { access_token, expires_in } = body;

        console.log(access_token);

        try {
          let data = await fetch(TOP_TRACKS_ENDPOINT, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });

          let o = await data.json();

          console.log(o);
        } catch (e) {
          console.log();
        }
      } catch (e) {
        console.log(e);
        throw Error(e);
      }
    };

    const fetchData = async () => {};
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
