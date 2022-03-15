<template>
  <div
    class="h-full flex flex-col  items-center p-6 space-y-8 bg-gradient-to-b from-slate-100 to-slate-300 md:justify-center"
  >
    <span class="flex flex-row items-center px-4 py-3 space-x-3 bg-white rounded-lg shadow">
      <h3 class="text-4xl text-center font-medium text-gray-900">Schreib mir</h3>

      <span style="font-size: 30px">&#128075</span>
    </span>

    <div class="w-full bg-white rounded-lg space-y-2 shadow md:w-1/2 lg:1/3">
      <form class="p-5 space-y-8" @submit.prevent="handleSubmit">
        <div class="space-y-6">
          <!-- email -->
          <div
            class="flex flex-row items-center bg-slate-100 rounded-lg shadow focus:ring-blue-600"
          >
            <input
              type="email"
              name="email"
              class="appearance-none w-full p-3 rounded-lg text-gray-900 bg-transparent"
              placeholder="Deine Email"
              autocomplete="on"
            />

            <Icon icon="mdi:at" width="26" height="26" class="mx-4" />
          </div>

         <!-- textarea -->
        </div>

        <!-- submit button -->
        <button
          type="submit"
          class="w-full flex flex-row items-center justify-center space-x-2.5 px-5 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg"
        >
          <Icon icon="mdi:send" width="23" height="23" color="white" />
          <p class="text-white font-medium text-lg">Abschicken</p>
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import Input from "./input.vue";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Input,
    Icon,
  },
  setup() {
    const showPassword = ref(false);
    const error = ref(null);
    const handleSubmit = async (event) => {
      // create object from form data
      const { email, password } = Object.fromEntries(
        new FormData(event.target)
      );
    //   signInWithEmailAndPassword(auth, email, password).catch((e) => {
    //     error.value = e.message;
    //     setTimeout(() => (error.value = null), 4000);
    //   });
    };
    const togglePassword = () => showPassword.value = !showPassword.value;
    return {
      showPassword,
      handleSubmit,
      togglePassword,
      error,
    };
  },
};
</script>