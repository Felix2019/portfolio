<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="w-10 h-10 border-4 border-t-transparent border-slate-800 border-solid rounded-full animate-spin"
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  width: String,
  height: String,
});

const route = useRoute();
const router = useRouter();
const server = "http://localhost:4000";

onMounted(async () => {
  console.log("mounted callback page");

  let { code, state } = route.query;

  await getAccessToken(code, state);
});

const getAccessToken = async (code, state) => {
  try {
    const response = await fetch(
      `${server}/spotifyCallback?code=${code}&state=${state}`
    );

    if (response.status != 200) {
      const e = await response.text();
      throw e;
    }

    router.push("/");
  } catch (e) {
    console.log("callback page err", e);
    router.push("/");
    throw Error(e);
  }
};
</script>
