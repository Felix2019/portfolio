<template>
  <div class="h-full flex flex-col items-center space-y-12 justify-center">
    <span
      class="flex flex-row items-center px-3 py-2 space-x-4 bg-white rounded-lg shadow"
    >
      <h3 class="text-3xl text-center font-medium text-gray-900">
        Get in touch
      </h3>

      <span style="font-size: 30px">&#128234</span>
    </span>

    <!-- form container -->
    <div class="w-full bg-white rounded-lg space-y-2 shadow md:w-2/3 lg:1/3">
      <form
        action="
          mailto:felix-guenthner@web.de?subject=GET IN TOUCH
        "
        enctype="text/plain"
        method="POST"
        class="p-5 space-y-8"
      >
        <!-- email input -->
        <!-- <div
          class="flex flex-row items-center bg-slate-100 rounded-lg shadow focus:ring-blue-600"
        >
          <input
            type="email"
            name="email"
            class="appearance-none w-full p-3 rounded-lg text-gray-900 bg-transparent"
            placeholder="Deine Email"
            autocomplete="on"
            required
          />

          <Icon icon="mdi:at" width="26" height="26" class="mx-4" />
        </div> -->

        <!-- message input -->
        <div
          class="flex flex-row items-center bg-slate-100 rounded-lg shadow focus:ring-blue-600"
        >
          <textarea
            type="text"
            name="body"
            rows="3"
            class="appearance-none w-full p-3 rounded-lg text-gray-900 bg-transparent"
            placeholder="Deine Nachricht"
            required
          ></textarea>
        </div>

        <!-- submit button -->
        <button
          type="submit"
          class="w-full flex flex-row items-center justify-center space-x-2.5 px-5 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg"
        >
          <Icon icon="mdi:send" width="23" height="23" color="white" />
          <span class="text-white font-medium text-lg">Abschicken</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  setup() {
    const message = ref(null);
    const error = ref(null);

    const handleSubmit = async (event) => {
      // create object from form data
      // const { email, message } = Object.fromEntries(new FormData(event.target));

      console.log(message.value);
    };

    return {
      handleSubmit,
      message,
      error,
    };
  },
};
</script>
