<template>
  <section class="bg-white">
    <div
      class="flex flex-col items-center p-6 mx-auto md:flex-row md:justify-between md:items-center"
    >
      <p class="text-sm text-gray-500">© 2022 Felix Günthner</p>

      <span class="inline-flex justify-center mt-4 space-x-5 md:mt-0">
        <router-link to="/imprint">
          <span class="">Imprint</span>
        </router-link>

        <router-link to="/privacy-policy">
          <span class="">Privacy Policy</span>
        </router-link>
      </span>
    </div>
  </section>
</template>
